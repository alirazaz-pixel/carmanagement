const CACHE='fleetledger-v7';
self.addEventListener('install',e=>{self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.map(k=>caches.delete(k)))));self.clients.claim();});
self.addEventListener('fetch',e=>{
  if(e.request.url.includes('googleapis')||e.request.url.includes('firebasejs')||e.request.url.includes('gstatic')||e.request.url.includes('jsdelivr')||e.request.url.includes('fonts.'))return;
  e.respondWith(fetch(e.request).then(res=>{if(res&&res.status===200){const clone=res.clone();caches.open(CACHE).then(c=>c.put(e.request,clone));}return res;}).catch(()=>caches.match(e.request)));
});
