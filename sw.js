// Service worker disabled — unregisters itself immediately
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => {
  self.registration.unregister();
  self.clients.claim();
});
