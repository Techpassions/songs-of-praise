const CACHE='sop-v2';
const ASSETS=['./','./index.html','./songs-data.js','./manifest.json','./logo.png','./db.js','https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,700;1,500&family=Inter:wght@400;500;600&display=swap'];

self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()));});

self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});

self.addEventListener('fetch',e=>{
  if(e.request.url.startsWith('chrome-extension'))return;
  
  // Handle sync API calls
  if(e.request.method==='POST' && e.request.url.includes('/api/sync-songs')){
    e.respondWith(handleSyncRequest(e.request));
    return;
  }
  
  // Standard caching for GET requests
  if(e.request.method!=='GET')return;
  
  e.respondWith(caches.match(e.request).then(c=>{
    if(c)return c;
    return fetch(e.request).then(r=>{
      if(r&&r.status===200){
        const cl=r.clone();
        caches.open(CACHE).then(ca=>ca.put(e.request,cl));
      }
      return r;
    }).catch(()=>{
      if(e.request.headers.get('accept')?.includes('text/html'))return caches.match('./index.html');
    });
  }));
});

// Handle sync API requests
async function handleSyncRequest(request){
  try{
    const data=await request.json();
    
    // Try to send to server
    const serverResponse=await fetch(request.url,{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(data)
    });
    
    if(serverResponse.ok){
      return new Response(JSON.stringify({success:true,synced:true}),{
        status:200,
        headers:{'Content-Type':'application/json'}
      });
    }
  }catch(e){
    // Network error - will be retried when online
    console.log('Sync failed, will retry when online');
  }
  
  // Return success anyway (will be stored in sync queue for retry)
  return new Response(JSON.stringify({success:true,synced:false}),{
    status:200,
    headers:{'Content-Type':'application/json'}
  });
}

// Background sync for pending updates
self.addEventListener('sync',e=>{
  if(e.tag==='sync-songs'){
    e.waitUntil(syncPendingUpdates());
  }
});

// Sync pending updates when online
async function syncPendingUpdates(){
  try{
    // Notify all clients to sync
    const clients=await self.clients.matchAll();
    clients.forEach(client=>{
      client.postMessage({type:'SYNC_PENDING'});
    });
  }catch(e){
    console.error('Sync error:',e);
  }
}
