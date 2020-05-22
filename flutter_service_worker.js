'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "6575773d4aef24a098fe6e6901b07c35",
"assets/assets/github.svg": "ddc250127189a3b4ee4802e6c2493757",
"assets/assets/linkedin.svg": "4b475fb3f54b3e35daa04295ec48df4c",
"assets/assets/profile_image.jpg": "ea3819a5512cbda2481a719f32f5a5f1",
"assets/assets/twitter.svg": "c9f1200836515fd4bacd29160be78732",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "b9011baf50a2a7b7519041c3ae57935e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
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
