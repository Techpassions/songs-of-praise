// ═══════════════════════════════════════════════════════════════
// IndexedDB Module - Offline-First Song Storage & Sync Queue
// ═══════════════════════════════════════════════════════════════

const SongsDB = {
  dbName: 'SongsOfPraiseDB',
  version: 1,
  db: null,

  // Initialize database
  async init() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, this.version);

      request.onerror = () => {
        console.error('Database failed to open');
        reject(request.error);
      };

      request.onsuccess = () => {
        this.db = request.result;
        console.log('Database opened successfully');
        resolve(this.db);
      };

      request.onupgradeneeded = (event) => {
        const db = event.target.result;

        // Songs store - main song data
        if (!db.objectStoreNames.contains('songs')) {
          const songStore = db.createObjectStore('songs', { keyPath: 'id' });
          songStore.createIndex('lang', 'lang', { unique: false });
          songStore.createIndex('title', 'title', { unique: false });
          songStore.createIndex('updated', 'updated', { unique: false });
        }

        // Sync queue store - pending updates to sync
        if (!db.objectStoreNames.contains('syncQueue')) {
          const syncStore = db.createObjectStore('syncQueue', { keyPath: 'id', autoIncrement: true });
          syncStore.createIndex('timestamp', 'timestamp', { unique: false });
          syncStore.createIndex('action', 'action', { unique: false });
          syncStore.createIndex('status', 'status', { unique: false });
        }

        // Metadata store - app metadata
        if (!db.objectStoreNames.contains('metadata')) {
          db.createObjectStore('metadata', { keyPath: 'key' });
        }
      };
    });
  },

  // Get all songs from IndexedDB
  async getAllSongs() {
    if (!this.db) await this.init();
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(['songs'], 'readonly');
      const request = transaction.objectStore('songs').getAll();
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  },

  // Get songs by language
  async getSongsByLanguage(lang) {
    if (!this.db) await this.init();
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(['songs'], 'readonly');
      const index = transaction.objectStore('songs').index('lang');
      const request = index.getAll(lang);
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  },

  // Get single song by ID
  async getSong(id) {
    if (!this.db) await this.init();
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(['songs'], 'readonly');
      const request = transaction.objectStore('songs').get(id);
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  },

  // Add or update a song
  async saveSong(song) {
    if (!this.db) await this.init();
    const songWithTimestamp = {
      ...song,
      updated: new Date().getTime(),
      synced: false
    };

    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(['songs'], 'readwrite');
      const request = transaction.objectStore('songs').put(songWithTimestamp);
      request.onsuccess = () => resolve(songWithTimestamp);
      request.onerror = () => reject(request.error);
    });
  },

  // Bulk add songs from static data
  async bulkAddSongs(songs) {
    if (!this.db) await this.init();
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(['songs'], 'readwrite');
      const store = transaction.objectStore('songs');
      let count = 0;

      songs.forEach(song => {
        const request = store.put({
          ...song,
          updated: new Date().getTime(),
          synced: true // Mark as synced since they're from static data
        });
        request.onsuccess = () => {
          count++;
          if (count === songs.length) {
            resolve(count);
          }
        };
        request.onerror = () => reject(request.error);
      });

      if (songs.length === 0) resolve(0);
    });
  },

  // Delete a song
  async deleteSong(id) {
    if (!this.db) await this.init();
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(['songs'], 'readwrite');
      const request = transaction.objectStore('songs').delete(id);
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  },

  // Add to sync queue
  async addToSyncQueue(action, songData) {
    if (!this.db) await this.init();
    const queueItem = {
      action: action, // 'add', 'update', 'delete'
      songData: songData,
      timestamp: new Date().getTime(),
      status: 'pending', // pending, synced, failed
      attempts: 0
    };

    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(['syncQueue'], 'readwrite');
      const request = transaction.objectStore('syncQueue').add(queueItem);
      request.onsuccess = () => {
        queueItem.id = request.result;
        resolve(queueItem);
      };
      request.onerror = () => reject(request.error);
    });
  },

  // Get pending sync queue
  async getSyncQueue() {
    if (!this.db) await this.init();
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(['syncQueue'], 'readonly');
      const index = transaction.objectStore('syncQueue').index('status');
      const request = index.getAll('pending');
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  },

  // Update sync queue item
  async updateSyncQueueItem(id, status, attempts = null) {
    if (!this.db) await this.init();
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(['syncQueue'], 'readwrite');
      const store = transaction.objectStore('syncQueue');
      const getRequest = store.get(id);

      getRequest.onsuccess = () => {
        const item = getRequest.result;
        if (item) {
          item.status = status;
          if (attempts !== null) item.attempts = attempts;
          const updateRequest = store.put(item);
          updateRequest.onsuccess = () => resolve(item);
          updateRequest.onerror = () => reject(updateRequest.error);
        }
      };
      getRequest.onerror = () => reject(getRequest.error);
    });
  },

  // Clear sync queue
  async clearSyncQueue() {
    if (!this.db) await this.init();
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(['syncQueue'], 'readwrite');
      const request = transaction.objectStore('syncQueue').clear();
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  },

  // Store metadata
  async setMetadata(key, value) {
    if (!this.db) await this.init();
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(['metadata'], 'readwrite');
      const request = transaction.objectStore('metadata').put({ key, value, updated: Date.now() });
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  },

  // Get metadata
  async getMetadata(key) {
    if (!this.db) await this.init();
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(['metadata'], 'readonly');
      const request = transaction.objectStore('metadata').get(key);
      request.onsuccess = () => resolve(request.result?.value);
      request.onerror = () => reject(request.error);
    });
  },

  // Clear all data (for reset)
  async clear() {
    if (!this.db) await this.init();
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(['songs', 'syncQueue', 'metadata'], 'readwrite');
      const stores = ['songs', 'syncQueue', 'metadata'];
      let cleared = 0;

      stores.forEach(storeName => {
        const request = transaction.objectStore(storeName).clear();
        request.onsuccess = () => {
          cleared++;
          if (cleared === stores.length) resolve();
        };
        request.onerror = () => reject(request.error);
      });
    });
  }
};

// Initialize on load
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    SongsDB.init().catch(err => console.error('Failed to initialize database:', err));
  });
}
