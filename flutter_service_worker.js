'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "48abae97aff21f3633e06e577a952345",
"assets/assets/github.svg": "ddc250127189a3b4ee4802e6c2493757",
"assets/assets/linkedin.svg": "4b475fb3f54b3e35daa04295ec48df4c",
"assets/assets/profile_image.jpg": "ea3819a5512cbda2481a719f32f5a5f1",
"assets/assets/twitter.svg": "c9f1200836515fd4bacd29160be78732",
"assets/FontManifest.json": "580ff1a5d08679ded8fcf5c6848cece7",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "2a4ff25ab709f05e8d93d21075cb70cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "10f41d93753a166d5b3ff1cc193d5b4e",
"/": "10f41d93753a166d5b3ff1cc193d5b4e",
"main.dart.js": "2e28fdb8b012a9082976277cfd84eb3f",
"manifest.json": "6f329b3a398bb282fa75661ee9d0abb8"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
