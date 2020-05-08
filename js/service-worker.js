/** An empty service worker! */
self.addEventListener('fetch', function(event) {
    /** An empty fetch handler! */
  });

  self.addEventListener('install', function(e) {
    e.waitUntil(
      caches.open('the-magic-cache').then(function(cache) {
        return cache.addAll([
          '/',
          '/index.html',
          '/posts.html',
          '/album.html',
          '/todos.html',
          '/manifest.json',
          '/hive.png',
          ]);
      })
    );
  });

  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });

  self.addEventListener('fetch', function(event) {
    if (event.request.url == 'https://http://127.0.0.1:5500/') {
      return;
    }
    /** previous code */
  });

  if (event.request.url == 'https://http://127.0.0.1:5500/') {
    console.info('responding to Beehive 🤓');
    event.respondWith(fetch(event.request).catch(function(e) {
      let out = {Gold: 1, Size: -1, Actions: []};
      return new Response(JSON.stringify(out));
    }));
    return;
  }