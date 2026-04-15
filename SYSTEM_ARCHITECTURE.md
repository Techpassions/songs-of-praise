```
╔════════════════════════════════════════════════════════════════════════════════╗
║           SONGS OF PRAISE v2 - OFFLINE-FIRST SYNC ARCHITECTURE                ║
╚════════════════════════════════════════════════════════════════════════════════╝

┌─────────────────────────────────────────────────────────────────────────────────┐
│                              USER PERSPECTIVE                                   │
└─────────────────────────────────────────────────────────────────────────────────┘

                                    🏠 HOME
                                      │
                    ┌───────────────────┼───────────────────┐
                    │                   │                   │
                ❌ OFFLINE           ✅ ONLINE         ⚠️ SLOW NETWORK
    • View all songs     • View all songs    • View all songs
    • Edit songs         • Edit songs        • Edit + Sync
    • Changes auto-save  • Changes sync      • See pending count
    • No export          • Instant update    • Manual sync option
    • No import


┌─────────────────────────────────────────────────────────────────────────────────┐
│                           DATA STORAGE LAYERS                                   │
└─────────────────────────────────────────────────────────────────────────────────┘

    ┌──────────────────────────────────────────────────────────────┐
    │                    FRONTEND (Browser)                        │
    │                                                              │
    │  ┌────────────────┐    ┌──────────────────┐                 │
    │  │  RAM Memory    │    │   Local Storage  │                 │
    │  │                │    │                  │                 │
    │  │ • allSongs[]   │    │ • adminSongs     │ (Per-Admin)     │
    │  │ • currentSong  │    │   (JSON String)  │                 │
    │  │ • filters      │    │                  │                 │
    │  └────────────────┘    └──────────────────┘                 │
    │           △                      △                           │
    │           │                      │                           │
    │           └──────────┬───────────┘                           │
    │                      │                                       │
    │           ┌──────────▼──────────┐                            │
    │           │   IndexedDB (IDB)   │                            │
    │           │                     │                            │
    │           │ 📦 songs            │                            │
    │           │  ├─ id (KEY)        │                            │
    │           │  ├─ lang (INDEX)    │                            │
    │           │  ├─ title (INDEX)   │                            │
    │           │  ├─ lyrics          │                            │
    │           │  ├─ updated         │                            │
    │           │  └─ synced          │                            │
    │           │                     │                            │
    │           │ 📋 syncQueue        │                            │
    │           │  ├─ action          │                            │
    │           │  ├─ songData        │                            │
    │           │  ├─ status (INDEX)  │                            │
    │           │  ├─ timestamp       │                            │
    │           │  └─ attempts        │                            │
    │           │                     │                            │
    │           │ ⚙️ metadata         │                            │
    │           │  └─ lastSync        │                            │
    │           │                     │                            │
    │           └────────────────────┘                             │
    │                      │                                       │
    │                      ▼                                       │
    │           ┌─────────────────────┐                            │
    │           │  Service Worker     │                            │
    │           │         (sw.js)     │                            │
    │           │                     │                            │
    │           │ • Cache assets      │                            │
    │           │ • Detect online/off │                            │
    │           │ • Background sync   │                            │
    │           └─────────────────────┘                            │
    │                      │                                       │
    │                      ▼ (Network)                             │
    └──────────────────────────────────────────────────────────────┘
                           │
                    ┌──────▼──────┐
                    │              │
           ❌ OFFLINE      ✅ ONLINE
           (No network)   (Connected)
                    │              │
                    └──────┬──────┘
                           ▼
            ┌────────────────────────────┐
            │   Backend Server (Future)  │
            │                           │
            │  ┌─────────────────────┐  │
            │  │   /api/sync-songs   │  │
            │  │                     │  │
            │  │ POST: {             │  │
            │  │   action: "update", │  │
            │  │   songData: {...}   │  │
            │  │ }                   │  │
            │  └─────────────────────┘  │
            │           │               │
            │           ▼               │
            │  ┌─────────────────────┐  │
            │  │   Database Server   │  │
            │  │  (PostgreSQL/MySQL) │  │
            │  └─────────────────────┘  │
            └────────────────────────────┘


┌─────────────────────────────────────────────────────────────────────────────────┐
│                        WORKFLOW: OFFLINE UPDATE                                 │
└─────────────────────────────────────────────────────────────────────────────────┘

      USER (OFFLINE)              APP                   STORAGE
           │                        │                      │
           │ Opens Admin Panel      │                      │
           ├──────────────────────▶ │                      │
           │                        │                      │
           │ Clicks "Add New Song"  │                      │
           ├──────────────────────▶ │                      │
           │                        │ Shows form           │
           │◀───────────────────────┤                      │
           │                        │                      │
           │ Fills song details     │                      │
           │ Clicks "Save"          │                      │
           ├──────────────────────▶ │                      │
           │                        │ 1. Save to admin     │
           │                        │    localStorage      │
           │                        ├───────────────────▶ JSON
           │                        │                   Storage
           │                        │ 2. Save to IDB       │
           │                        ├───────────────────▶ IndexedDB
           │                        │                    (songs)
           │                        │ 3. Add to sync       │
           │                        │    queue             │
           │                        ├───────────────────▶ IndexedDB
           │                        │                  (syncQueue)
           │                        │ 4. Update allSongs   │
           │                        │    (in memory)       │
           │                        │ 5. Refresh UI        │
           │                        │                      │
           │ "Changes saved.        │                      │
           │  Will sync when        │                      │
           │  online." ◀────────────┤                      │
           │                        │                      │
           │ Song appears in        │                      │
           │ • Admin list  ✓        │                      │
           │ • Home page   ✓        │                      │


┌─────────────────────────────────────────────────────────────────────────────────┐
│                        WORKFLOW: SYNC WHEN ONLINE                               │
└─────────────────────────────────────────────────────────────────────────────────┘

      USER (NOW ONLINE)           APP              SYNC OPERATIONS
           │                        │                    │
           │ Device comes           │                    │
           │ back online            │                    │
           └────────┐               │                    │
                    │               │                    │
                    │ Network       │                    │
                    │ connected!    │ Service Worker     │
                    ├──────────────▶ detects online     │
                    │               │                   │
                    │               │ 1. Check          │
                    │               │    syncQueue      │
                    │               ├──────────────────▶ Query IDB
                    │               │                   (pending)
                    │               │ 2. Get 3 pending  │
                    │               │    changes        │
                    │               │◀──────────────────┤
                    │               │                   │
                    │               │ 3. Show banner:   │
                    │               │ "📤 3 changes     │
                    │               │  pending sync"    │
                    ⚠️  Notification │                   │
                    │               │                   │
                    │ User clicks   │ 4. Send to        │
                    │ "Sync Now"    │    backend        │
                    ├──────────────▶ POST /api/sync    │
                    │               ├──────────────────▶ Network
                    │               │                   Request
                    │               │ 5. Get response   │
                    │               │    from server    │
                    │               │◀──────────────────┤
                    │               │                   │
                    │               │ 6. Mark items     │
                    │               │    as "synced"    │
                    │               ├──────────────────▶ Update IDB
                    │               │                   (status)
                    │               │ 7. Clear queue    │
                    │               │                   │
                    │ "All changes  │                   │
                    │  synced!" ◀───┤                   │
                    │ ✓ Success      │                   │
                    │                │                  │


┌─────────────────────────────────────────────────────────────────────────────────┐
│                           DATA FLOW DIAGRAM                                     │
└─────────────────────────────────────────────────────────────────────────────────┘

    INITIAL LOAD
    ════════════════════════════════════════════════════════════════

    1. App Starts
         │
         ▼
    Load static SONGS from songs-data.js
         │
         ▼
    Initialize IndexedDB
         │
         ├─ Check if IndexedDB has songs
         │  ├─ NO → Bulk import SONGS from songs-data.js
         │  └─ YES → Use existing data
         │
         ├─ Load from localStorage (admin updates)
         │
         └─ Merge both sources
              │
              ▼
         allSongs[] = merged data
              │
              ▼
         Render UI from allSongs[]


    ADMIN SAVES A SONG
    ════════════════════════════════════════════════════════════════

    User Form Input
         │
         ▼
    Validate input
         │
         ▼
    adminSongs[] + localStorage
         │
         ▼
    SongsDB.saveSong()
         │
         ▼
    IndexedDB.songs (with timestamp)
         │
         ▼
    SongsDB.addToSyncQueue()
         │
         ▼
    IndexedDB.syncQueue (pending)
         │
         ├─ Update memory (allSongs[])
         │
         ├─ Refresh admin list
         │
         └─ Show "Saved, will sync when online" notification


    SYNC PROCESS (ONLINE)
    ════════════════════════════════════════════════════════════════

    Navigator.onLine event
         │
         ▼
    Check SyncQueue for pending items
         │
         ▼
    For each item:
         │
         ├─ Format request payload
         │
         ├─ POST to /api/sync-songs
         │
         ├─ Wait for server response
         │
         └─ Update queue status: "synced" or "failed"


┌─────────────────────────────────────────────────────────────────────────────────┐
│                          KEY FEATURES SUMMARY                                   │
└─────────────────────────────────────────────────────────────────────────────────┘

    ✓ OFFLINE CAPABILITY
      • Make changes without internet
      • Changes saved to IndexedDB
      • App remains fully functional offline

    ✓ AUTOMATIC SYNC
      • Detect when online
      • Auto-trigger sync process
      • Queue system for reliability

    ✓ USER NOTIFICATIONS
      • "Changes saved" messages
      • Pending sync badge
      • Sync success confirmation

    ✓ BACKWARD COMPATIBILITY  
      • localStorage still used (admin panel)
      • Static SONGS included for fallback
      • Multiple data sources merged

    ✓ PERSISTENCE
      • IndexedDB survives browser restart
      • Multiple layers of backup
      • Export/import functionality

    ✓ PERFORMANCE
      • Fast local operations
      • Indexed queries for speed
      • Efficient memory usage


┌─────────────────────────────────────────────────────────────────────────────────┐
│                         FILES & MODIFICATIONS                                   │
└─────────────────────────────────────────────────────────────────────────────────┘

    📄 db.js (NEW)
       └─ IndexedDB wrapper
          ├─ Database initialization
          ├─ Songs CRUD operations
          ├─ Sync queue management
          └─ Metadata storage

    📄 sw.js (UPDATED)
       └─ Service worker enhancements
          ├─ Background sync support
          ├─ Online/offline detection
          └─ Sync API message passing

    📄 index.html (UPDATED)
       └─ Application logic
          ├─ Load from IndexedDB instead of SONGS
          ├─ Merge data sources
          ├─ Sync queue functions
          ├─ User notifications
          └─ Admin panel auto-save to IndexedDB

    📄 OFFLINE_SYNC_GUIDE.md (NEW)
       └─ Comprehensive documentation

    📄 TESTING_GUIDE.md (NEW)
       └─ Testing procedures & scenarios

    📄 SYSTEM_ARCHITECTURE.md (THIS FILE)
       └─ Visual overview of the system


┌─────────────────────────────────────────────────────────────────────────────────┐
│                      BROWSER COMPATIBILITY                                      │
└─────────────────────────────────────────────────────────────────────────────────┘

    ✓ Chrome/Chromium    Full support
    ✓ Firefox            Full support
    ✓ Safari             IndexedDB + SW (partial)
    ✓ Edge               Full support
    ✓ Android Browser    Full support
    ✓ iOS Safari         Limited (no SW)
    
    Note: System gracefully falls back to static data if IndexedDB
          unavailable (e.g., private browsing mode)


┌─────────────────────────────────────────────────────────────────────────────────┐
│                         SYNC QUEUE STATUSES                                     │
└─────────────────────────────────────────────────────────────────────────────────┘

    pending     ➜  Waiting to be synced (offline or queued)
    synced      ➜  Successfully sent to backend (completed)
    failed      ➜  Sync failed, ready for retry with backoff


┌─────────────────────────────────────────────────────────────────────────────────┐
│                        NEXT STEPS FOR PRODUCTION                                │
└─────────────────────────────────────────────────────────────────────────────────┘

    1. Implement Backend
       └─ Create /api/sync-songs endpoint
          ├─ Validate incoming updates
          ├─ Store in permanent database
          ├─ Handle conflicts
          └─ Return success/failure

    2. Enhance Error Handling
       └─ Retry logic with exponential backoff
          ├─ Max retries (5-10)
          ├─ Retry delay escalation
          └─ Failure notifications

    3. Add Conflict Resolution
       └─ Multiple device edits
          ├─ Last-write-wins
          ├─ Merge strategies
          └─ User prompts for conflicts

    4. Monitoring & Analytics
       └─ Sync success rates
          ├─ Error logs
          ├─ Performance metrics
          └─ User insights

    5. UI Enhancements
       └─ Sync history view
          ├─ Edit timeline
          ├─ User attribution
          └─ Rollback capability

    6. Security
       └─ Encrypt sync data in transit
          ├─ User authentication
          ├─ Backend validation
          └─ Rate limiting

```

---

## How to Use This Architecture

### For Development
1. Test offline changes (disable network in DevTools)
2. Verify IndexedDB storage
3. Simulate coming online
4. Check sync queue processes
5. See [TESTING_GUIDE.md](TESTING_GUIDE.md) for detailed steps

### For Debugging
```javascript
// In browser console:
await SongsDB.getAllSongs()           // View all songs
await SongsDB.getSyncQueue()          // View pending syncs
console.log('allSongs:', allSongs)    // Current app state
console.log('Online:', navigator.onLine)  // Network status
```

### For Production Integration
1. Implement backend at `/api/sync-songs`
2. Update `syncPendingUpdates()` with real API call
3. Add proper error handling and retries
4. Monitor sync success rates
5. Implement user conflict resolution UI

See [OFFLINE_SYNC_GUIDE.md](OFFLINE_SYNC_GUIDE.md) for complete API reference.
