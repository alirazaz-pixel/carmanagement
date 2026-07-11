// Service worker disabled - clears all caches
self.addEventListener('install', e => { self.skipWaiting(); });
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.map(k => caches.delete(k))))
  );
  self.clients.claim();
});
// No caching - always fetch fresh from network
self.addEventListener('fetch', e => {});
