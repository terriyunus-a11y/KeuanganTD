// Service worker minimal: syarat "Instal aplikasi" di Chrome Android.
// Tidak menyimpan data apa pun; semua permintaan diteruskan ke internet seperti biasa.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
