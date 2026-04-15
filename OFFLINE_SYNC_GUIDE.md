# Offline-First Sync System Documentation

## Overview
The Songs of Praise app now supports **offline-first** updates with automatic synchronization when the device comes back online. Song updates made in the admin panel will be saved locally and synced to the server when connection is restored.

## Architecture

### Components

#### 1. **IndexedDB Database** (`db.js`)
- **Purpose**: Local persistent storage of all songs and sync queue
- **Stores**:
  - `songs`: Main song database with metadata (language, title, updated timestamp)
  - `syncQueue`: Queue of pending updates to sync (add, update, delete operations)
  - `metadata`: App configuration and sync state

#### 2. **Service Worker** (`sw.js`)
- **Purpose**: Enables offline functionality and background sync
- **Features**:
  - Caches assets for offline use
  - Listens for online/offline events
  - Manages background sync requests
  - Falls back to cached content when offline

#### 3. **Main Application** (`index.html`)
- **Purpose**: UI and sync orchestration
- **Initialization**: 
  - Loads songs from IndexedDB on startup
  - Merges admin updates from localStorage
  - Falls back to static SONGS array if needed
- **Sync Functions**: Handles queuing and syncing updates

## How It Works

### Adding/Editing Songs (Offline)

1. User opens admin panel and makes changes
2. When saving a song:
   - Song is saved to **localStorage** (for backward compatibility)
   - Song is also saved to **IndexedDB** with timestamp
   - Update is added to **syncQueue** with "pending" status
   - User sees notification: "Changes saved. Will sync when online."
   - Main app is refreshed to show changes immediately

### Automatic Sync (Online)

1. When device comes **online**:
   - Service Worker detects online event
   - Posts message to app to trigger sync
   - `syncPendingUpdates()` function is called

2. For each pending update in queue:
   - Send to backend (when backend is implemented)
   - Mark as "synced" in the queue
   - Remove from pending list

3. User notification:
   - Shows banner with pending sync count: "📤 2 changes pending sync"
   - "Sync Now" button available for manual trigger
   - Shows success notification: "All changes synced!"

## API Reference

### SongsDB Object

```javascript
// Initialize database
await SongsDB.init()

// Get all songs
const songs = await SongsDB.getAllSongs()

// Get songs by language
const odiaSongs = await SongsDB.getSongsByLanguage('odia')

// Save a song
await SongsDB.saveSong({
  id: 'o001',
  lang: 'odia',
  title: 'Song Title',
  lyrics: 'Lyrics content...',
  updated: Date.now(),
  synced: false
})

// Add to sync queue
await SongsDB.addToSyncQueue('update', songData)

// Get pending updates
const pending = await SongsDB.getSyncQueue()

// Update sync queue status
await SongsDB.updateSyncQueueItem(itemId, 'synced')

// Clear all data
await SongsDB.clear()
```

### App Sync Functions

```javascript
// Save song and add to sync queue
await saveSongToSync(songData, 'update')

// Sync all pending updates
await syncPendingUpdates()

// Check for pending changes
await checkPendingSync()

// Show user notification
showNotification('Message', 'success|error|warning')
```

## User Experience

### Offline Scenario
```
User (Offline)
    ↓
Admin Panel → Edit Song → Save
    ↓
Song saved to IndexedDB + SyncQueue
    ↓
"Changes saved. Will sync when online."
    ↓
Main app shows updated song immediately (from IndexedDB)
```

### Back Online Scenario
```
Device comes Online
    ↓
SW detects online
    ↓
App calls syncPendingUpdates()
    ↓
Show: "📤 2 changes pending sync" (with "Sync Now" button)
    ↓
Updates sent to backend
    ↓
Queue cleared, show: "All changes synced!"
    ↓
Main app data stays in sync
```

## Implementation Details

### Initial Load
1. App loads static `SONGS` from `songs-data.js`
2. Bulk inserted into IndexedDB with `synced: true`
3. Any localStorage admin updates are merged
4. `allSongs` array populated from IndexedDB
5. UI renders songs from `allSongs` (not static SONGS)

### Data Merging
- Admin updates (from localStorage) are merged with IndexedDB data
- Admin updates take precedence (newer timestamps)
- Main app always reads from merged `allSongs` array

### Sync Queue States
- **pending**: Waiting to be synced
- **synced**: Successfully synced to backend
- **failed**: Sync failed (with retry count)

## Backend Integration (Future)

When a backend is implemented, modify the sync endpoint:

```javascript
// In syncPendingUpdates()
const serverResponse = await fetch('/api/sync-songs', {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({
    action: item.action,
    songData: item.songData
  })
})
```

The server should:
1. Validate the update
2. Store in permanent database
3. Return success/failure
4. App marks queue item as synced/failed

## Browser Support

- **Chrome/Edge**: Full support (IndexedDB + SW + Background Sync)
- **Firefox**: Full support (except Background Sync API)
- **Safari**: IndexedDB support, partial SW support
- **Mobile**: Full support on modern Android/iOS browsers

## Testing

### Test Offline Functionality

1. **Open DevTools** → Network tab
2. **Set online/offline**:
   - DevTools → Network → "Offline"
3. **Make changes** in admin panel
4. **Verify**:
   - Changes appear immediately
   - "Changes saved" notification
   - localStorage shows updates
5. **Go online**:
   - DevTools → Network → "Online"
6. **Check sync**:
   - "📤 changes pending sync" banner appears
   - Click "Sync Now" or wait
   - Success notification

### Clear Data (Development)

```javascript
// In browser console
await SongsDB.clear()
localStorage.clear()
location.reload()
```

## Settings

### Change Admin Password
Edit in `index.html`:
```javascript
const ADMIN_PASSWORD = 'new-password-here';
```

### Database Name
Edit in `db.js`:
```javascript
dbName: 'SongsOfPraiseDB',
version: 1
```

Increment version number to trigger schema migration.

## Troubleshooting

### Songs not syncing?
- Check browser console for errors
- Verify network connection
- Call `syncPendingUpdates()` manually
- Check `await SongsDB.getSyncQueue()` for pending items

### Changes not showing in main app?
- IndexedDB may not be initialized: Wait for `SongsDB.init()`
- Admin updates might not be merged: Check localStorage['adminSongs']
- Reload page: `location.reload()`

### IndexedDB issues?
- Check if private/incognito mode (not recommended)
- Clear site data: DevTools → Application → Clear storage
- Rebuild database: Run `await SongsDB.clear()` then reload

## Files Modified

1. **db.js** (NEW)
   - IndexedDB wrapper with sync queue
   
2. **sw.js** (UPDATED)
   - Background sync handling
   - Online/offline detection
   
3. **index.html** (UPDATED)
   - Load songs from IndexedDB instead of SONGS array
   - Admin saves to both localStorage and IndexedDB
   - Automatic sync functions
   - User notifications for sync status

## Next Steps

1. Implement backend endpoint at `/api/sync-songs`
2. Test with multiple devices
3. Add conflict resolution for simultaneous edits
4. Implement user sync history/logs
5. Add sync status dashboard to admin panel
