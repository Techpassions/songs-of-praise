const CACHE='sop-v2';
const ASSETS=['./','./index.html','./songs-data.js','./manifest.json','./logo.png','https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,700;1,500&family=Inter:wght@400;500;600&display=swap'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;if(e.request.url.startsWith('chrome-extension'))return;e.respondWith(caches.match(e.request).then(c=>{if(c)return c;return fetch(e.request).then(r=>{if(r&&r.status===200){const cl=r.clone();caches.open(CACHE).then(ca=>ca.put(e.request,cl));}return r;}).catch(()=>{if(e.request.headers.get('accept')?.includes('text/html'))return caches.match('./index.html');});})});});
