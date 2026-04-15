# Quick Reference Card

## Core Functions

### Initialize App
```javascript
await initializeApp()
// Loads from IndexedDB, merges localStorage, renders UI
```

### Save Song (Admin)
```javascript
// Automatically called by saveSong() form handler
// Saves to localStorage + IndexedDB + SyncQueue
```

### Check Pending Sync
```javascript
await checkPendingSync()
// Updates pendingSyncCount global variable
```

### Sync Now (Manual)
```javascript
await syncPendingUpdates()
// Processes all pending items in queue
```

### Show Notification
```javascript
showNotification('Your message', 'success')
// Types: 'success', 'error', 'warning'
```

---

## Database Operations

### Get All Songs
```javascript
const songs = await SongsDB.getAllSongs()
```

### Get Songs by Language
```javascript
const odiaSongs = await SongsDB.getSongsByLanguage('odia')
```

### Save a Song
```javascript
await SongsDB.saveSong({
  id: 'o001',
  lang: 'odia',
  title: 'Song Title',
  lyrics: 'Lyrics...',
  updated: Date.now(),
  synced: false
})
```

### Delete a Song
```javascript
await SongsDB.deleteSong('o001')
```

### Get Sync Queue
```javascript
const pending = await SongsDB.getSyncQueue()
pending.forEach(item => {
  console.log(`${item.action}: ${item.songData.title}`)
})
```

### Add to Sync Queue
```javascript
await SongsDB.addToSyncQueue('update', songData)
// action: 'add', 'update', 'delete'
```

### Update Sync Status
```javascript
await SongsDB.updateSyncQueueItem(itemId, 'synced', attemptCount)
// status: 'pending', 'synced', 'failed'
```

### Clear All Data (Dev Only)
```javascript
await SongsDB.clear()
```

---

## Debugging Shortcuts

### Check What's Loaded
```javascript
console.log('In memory:', allSongs.length)
console.log('Pending syncs:', pendingSyncCount)
console.log('Online:', navigator.onLine)
```

### View IndexedDB Contents
```javascript
// Open DevTools → Application → IndexedDB → SongsOfPraiseDB
// View stores: songs, syncQueue, metadata
```

### Force Reload from DB
```javascript
await initializeApp()
location.reload()  // Hard refresh
```

### Check Admin Updates
```javascript
const admin = JSON.parse(localStorage.getItem('adminSongs'))
console.log('Admin songs:', admin.length)
```

### Simulate Online/Offline
```javascript
// DevTools → Network → Offline checkbox
// Or use: navigator.onLine (read-only)
```

---

## Notifications

### Auto-shown Messages
```
✅ Online               → "Offline banner" hidden
❌ Offline             → "Offline banner" shown
💾 Saving              → "Changes saved. Will sync when online."
📤 Pending             → "📤 2 changes pending sync" (banner)
✅ Synced              → "All changes synced!"
❌ Error               → "Error message" (red notification)
```

### Manual Trigger
```javascript
showNotification('Custom message', 'success')
showSyncStatus()
```

---

## Global Variables

```javascript
allSongs              // Currently displayed songs (from IDB)
adminSongs           // Admin panel songs (from localStorage)
pendingSyncCount     // Number of pending sync items
currentSong          // Currently viewed song
isAdminAuthenticated // Admin logged in?
navigator.onLine     // (Read-only) Current network status
```

---

## Important Constants

```javascript
// In index.html
const ADMIN_PASSWORD = 'admin123'  // Change this!

// In db.js
SongsDB.dbName = 'SongsOfPraiseDB'
SongsDB.version = 1
```

---

## Database Schema

### songs Store
```javascript
{
  id: 'o001',                    // PRIMARY KEY
  lang: 'odia',                  // INDEXED
  title: 'Song Title',           // INDEXED
  lyrics: 'Full lyrics...',
  url: 'https://source.url',
  ytUrl: 'https://youtube.url',
  updated: 1713182400000,        // Timestamp
  synced: false                  // Sync status
}
```

### syncQueue Store
```javascript
{
  id: 1,                         // AUTO INCREMENT
  action: 'update',              // 'add', 'update', 'delete'
  songData: {...},               // Full song object
  timestamp: 1713182400000,      // When queued
  status: 'pending',             // 'pending', 'synced', 'failed'
  attempts: 0                    // Retry count
}
```

### metadata Store
```javascript
{
  key: 'lastSync',
  value: 1713182400000,
  updated: 1713182400000
}
```

---

## Workflow: From Edit to Sync

```
1. Admin edits song
   ↓
2. saveSong() form handler called
   ↓
3. Validate input
   ↓
4. Save to adminSongs[] array
   ↓
5. Save to localStorage
   ↓
6. Call saveSongToSync(songData, 'update')
   ↓
7. In saveSongToSync():
   - Save to IndexedDB.songs
   - Add to IndexedDB.syncQueue (status: pending)
   - Update memory (allSongs[])
   - Show notification
   ↓
8. When online:
   - syncPendingUpdates() called
   - Get all pending from syncQueue
   - Process each item
   - Send to backend (when implemented)
   - Update status to 'synced'
   - Show success notification
```

---

## Testing Commands

### Simulate Offline
```javascript
// DevTools → Network tab → Offline checkbox ✓
navigator.onLine  // Will return false
```

### Add Test Data
```javascript
await SongsDB.saveSong({
  id: 'test001',
  lang: 'odia',
  title: 'Test Song',
  lyrics: 'Test lyrics',
  updated: Date.now(),
  synced: false
})
```

### Check Sync Status
```javascript
const queue = await SongsDB.getSyncQueue()
const pending = queue.filter(q => q.status === 'pending')
console.log(`Pending: ${pending.length}`)
```

### Manual Full Sync
```javascript
const queue = await SongsDB.getSyncQueue()
if(queue.length > 0) {
  console.log('Syncing', queue.length, 'items...')
  await syncPendingUpdates()
  console.log('Done!')
}
```

---

## Common Issues

| Issue | Command | Solution |
|-------|---------|----------|
| Songs not showing | `console.log(allSongs.length)` | Check if IndexedDB loaded |
| Sync not working | `navigator.onLine` | Check if online |
| Changes not saved | `await SongsDB.getAllSongs()` | Verify IndexedDB save |
| Duplicate data | `await SongsDB.clear()` | Reset and reload |
| Old data visible | `location.reload()` | Hard refresh page |

---

## File Locations

```
sop2/
├── index.html              Main app + admin panel
├── db.js                   IndexedDB wrapper
├── sw.js                   Service worker
├── songs-data.js           Static song data
│
├─ Docs/
├── IMPLEMENTATION_SUMMARY.md    ← START HERE
├── OFFLINE_SYNC_GUIDE.md        Full API reference
├── TESTING_GUIDE.md             Testing steps
└── SYSTEM_ARCHITECTURE.md       Visual diagrams
```

---

## Keyboard Shortcuts

```
F12                 Open DevTools
Ctrl+Shift+I        Open DevTools (alternative)
Ctrl+K              Open DevTools console

In DevTools:
  Application       IndexedDB viewer
  Network           Offline simulator
  Console           Run JS commands
```

---

## Useful Console Commands

```javascript
// View current state
console.table(allSongs)
console.table(await SongsDB.getSyncQueue())

// Check status
console.log('Songs:', allSongs.length)
console.log('Pending:', pendingSyncCount)
console.log('Online:', navigator.onLine)

// Trigger actions
await initializeApp()
await syncPendingUpdates()
await checkPendingSync()

// Reset data
await SongsDB.clear()
```

---

## Remember

- ✅ Saves work offline
- ✅ Queues changes automatically
- ✅ Syncs when online
- ⚠️ Needs backend for persistent sync
- 💡 Check DevTools Application tab for data
- 🐛 Browser console shows all sync activity

---

For full details, see:
- 📖 OFFLINE_SYNC_GUIDE.md
- 🧪 TESTING_GUIDE.md
- 🏗️ SYSTEM_ARCHITECTURE.md
