# Testing the Offline-First Sync System

## Quick Start Testing

### Step 1: Load the App
1. Open the Songs of Praise app in your browser
2. Check browser console (F12 → Console)
3. You should see: "Database opened successfully"

### Step 2: Test Offline Update

#### Setup
1. Open DevTools (F12)
2. Go to **Network** tab
3. Check the **Offline** checkbox to simulate offline mode
4. Go to **Admin** panel (password: `admin123`)

#### Test Offline Add
1. Click "Add New Song"
2. Fill in the form:
   - Title: "Test Offline Song"
   - Language: "Odia"
   - Lyrics: "This is a test song"
3. Click "Save Song"
4. **Expected**: 
   - Notification: "Changes saved. Will sync when online."
   - Song appears in admin list
   - Song appears in main "Home" page immediately

#### Verify Offline Storage
1. Open DevTools → **Application** tab
2. Expand **IndexedDB** → SongsOfPraiseDB → songs
3. You should see the new song with:
   - `updated`: Current timestamp
   - `synced`: false
4. Expand **syncQueue**
5. You should see one pending item with:
   - `action`: "add"
   - `status`: "pending"

### Step 3: Test Sync When Online

#### Go Online
1. DevTools → Network tab → Uncheck **Offline**
2. You should see sync banner: "📤 1 change pending sync"
3. Click "Sync Now" button
4. **Expected**: 
   - Banner disappears
   - Notification: "All changes synced!"
   - Sync queue is now empty

#### Verify Sync Completed
1. DevTools → Application → IndexedDB → syncQueue
2. Item should now have `status`: "synced"

### Step 4: Test Offline Edit

#### Make Offline
1. Network tab → Check **Offline**
2. Go to Admin → Find "Test Offline Song"
3. Click "Edit"
4. Change lyrics to: "Updated offline"
5. Click "Save Song"
6. **Expected**: 
   - Song updated immediately
   - Sync queue has one more pending item (with `action`: "update")

#### Verify Sync
1. Uncheck **Offline**
2. Click "Sync Now"
3. Check that sync queue is cleared

### Step 5: Test Offline Delete

#### Delete While Offline
1. Check **Offline** again
2. Admin → Find updated song
3. Click "Delete"
4. Confirm deletion
5. **Expected**:
   - Song removed from list
   - Sync queue has pending "delete" action

#### Verify Sync
1. Go online, sync queue clears
2. Song should be removed from all views

## Advanced Testing

### Test Data Persistence

```javascript
// In browser console, while offline:

// Check IndexedDB songs
const songs = await SongsDB.getAllSongs()
console.log('Total songs:', songs.length)
console.log('Unsynced:', songs.filter(s => !s.synced).length)

// Check sync queue
const queue = await SongsDB.getSyncQueue()
console.log('Pending syncs:', queue)

// Add a test song directly
await SongsDB.saveSong({
  id: 'test001',
  lang: 'odia',
  title: 'Test Direct',
  lyrics: 'Added via JS',
  updated: Date.now(),
  synced: false
})

// Verify it was added
const allSongs = await SongsDB.getAllSongs()
console.log('Song added:', allSongs.find(s => s.id === 'test001'))
```

### Test Sync Queue

```javascript
// Get pending updates
const pending = await SongsDB.getSyncQueue()
pending.forEach(item => {
  console.log(`${item.action}: ${item.songData.title} (${item.status})`)
})

// Manual sync (go online first)
await syncPendingUpdates()

// Check queue after sync
const afterSync = await SongsDB.getSyncQueue()
console.log('Remaining pending:', afterSync.filter(q => q.status === 'pending'))
```

### Test Data Flow

```javascript
// Check current app state
console.log('allSongs count:', allSongs.length)
console.log('Pending syncs:', pendingSyncCount)

// Check localStorage
console.log('Admin updates:', JSON.parse(localStorage.getItem('adminSongs')))

// Check IndexedDB
const dbSongs = await SongsDB.getAllSongs()
console.log('DB songs:', dbSongs.length)

// Check metadata
const lastSync = await SongsDB.getMetadata('lastSync')
console.log('Last sync:', new Date(lastSync))
```

### Simulate Network Issues

```javascript
// In console, while offline:

// Add multiple items to queue
for(let i = 0; i < 3; i++) {
  await SongsDB.addToSyncQueue('update', {
    id: `test${i}`,
    title: `Test ${i}`,
    lyrics: 'Test content'
  })
}

// Check queue
const queue = await SongsDB.getSyncQueue()
console.log('Queue size:', queue.length)

// Now go online and sync - all should process
await syncPendingUpdates()
```

## Troubleshooting Tests

### Songs Not Appearing in Main List?
1. Check if IndexedDB was initialized: 
   ```javascript
   console.log(SongsDB.db)
   ```
2. Check if `allSongs` is populated:
   ```javascript
   console.log('allSongs:', allSongs.length)
   ```
3. Manually trigger load:
   ```javascript
   await initializeApp()
   ```

### Sync Not Working?
1. Check network status:
   ```javascript
   console.log('Online:', navigator.onLine)
   ```
2. Check sync queue:
   ```javascript
   const q = await SongsDB.getSyncQueue()
   console.log('Pending:', q.filter(x => x.status === 'pending'))
   ```
3. Manually trigger sync:
   ```javascript
   await syncPendingUpdates()
   ```

### IndexedDB Not Working?
1. Check if available:
   ```javascript
   console.log('IndexedDB:', !!indexedDB)
   ```
2. Check database:
   ```javascript
   await SongsDB.init()
   console.log('DB:', SongsDB.db)
   ```
3. Clear and restart:
   ```javascript
   await SongsDB.clear()
   location.reload()
   ```

## Test Scenarios

### Scenario 1: Complete Offline Workflow
- Go offline
- Add 3 songs
- Edit 2 songs
- Delete 1 song
- Verify all appear in UI
- Go online
- Sync and verify queue clears

### Scenario 2: Intermittent Connection
- Go offline, make changes
- Go online, sync completes
- Go offline, make more changes
- Go online, sync those changes
- Repeat 3 times

### Scenario 3: Multiple Admin Sessions
- Edit song while offline
- Export data
- Import data in another session
- Verify changes propagated
- Sync and verify

### Scenario 4: Large Data
- Add 50 songs while offline
- Verify performance
- Sync all 50
- Check sync queue clears

## Browser DevTools Tips

### IndexedDB Inspector
1. DevTools → Application → IndexedDB
2. Open "SongsOfPraiseDB"
3. View **songs** store - see all stored songs
4. View **syncQueue** - see pending changes
5. View **metadata** - see app settings

### Network Throttling
1. Network tab → Throttling dropdown
2. Select "Slow 3G" for realistic offline testing
3. Or use offline for complete disconnection

### Console Commands
```javascript
// Show app version info
console.log('DB version:', SongsDB.version)
console.log('Total songs:', allSongs.length)
console.log('Pending syncs:', pendingSyncCount)

// Force refresh from DB
await initializeApp()
renderAdminSongs()

// Show sync status
await checkPendingSync()
showSyncStatus()
```

## Expected Console Output

```
✓ Database opened successfully
✓ Song saved to IndexedDB
✓ Added to sync queue: id=1, action=update, status=pending
✓ All songs: 150 total
✓ Pending syncs: 3
✓ Sync complete! Marked 3 items as synced
```

## Performance Benchmarks

- **Initial load**: < 500ms (indexedDB query)
- **Save song**: < 100ms (local only)
- **Sync 10 items**: < 1000ms (with network)
- **Query 1000 songs**: < 100ms (IndexedDB indexed)

## Next Test: Backend Integration

Once you have a backend:

1. Modify `/api/sync-songs` endpoint in `syncPendingUpdates()`
2. Backend should validate and store updates
3. Return success/failure
4. App marks as synced/failed based on response
5. Failed items retry on next sync attempt
