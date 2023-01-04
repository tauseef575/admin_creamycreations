'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "0beb0911c49063c70710c3c1363ccf48",
".git/config": "e1cbec7539d198e202c83be982f0bb94",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "55ddceccd39812ec9753180e843fee50",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "9a44a4813c88fc49ad4953ae6240ca74",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8159230802169e05e0208329dabc7fb0",
".git/logs/refs/heads/main": "59d8204ad5ab617abf689a423eba290a",
".git/logs/refs/remotes/origin/main": "ad82ce394bc32a9885a983edcfe60b40",
".git/objects/05/217f7973e7f3fc62472e2ed49b88ea2fc50e35": "c5bbf8978423ddf78ad3b4369fd371ec",
".git/objects/0d/f4eab35803dbff36f9e7509d3d4e1109c5f027": "7c075a77804a0aca1df03f47fb56cdba",
".git/objects/0e/046013d9c3ca10b3f396c3f33ef9ae69c1722f": "da61f0bf4d92b94d2a4dc96c9bec393b",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/15/58f2c7d74d5925cdb29ea7f7fdd2974f90654a": "d3d013eb2659aa7801521384c36de535",
".git/objects/18/979e24570f6ebef06be783f242b1037c57dca4": "b17caca4fe9940d75eb774646d610f06",
".git/objects/18/cbe353b3edb9ed03c267c297a566cd060b244d": "efe4fbb89eae093a29ecf74995f7dc85",
".git/objects/19/a8b90d3234f5a0bbdeb2f5986614f848349b1e": "f58ef417338b9e19dcc0af6d967f4fd3",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/27/4bba0b06fbebf319e17eb0957d4f89b73c74ff": "0acc0dbe6cc7fd321f10075ff1d3c70e",
".git/objects/29/c7288c1c40590c4cb72b627ef783b07cd6b1d8": "7485720bf6cab66a5212f0e094d33b63",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/30/009e8fccf05abe927634cface3e1ed0e06480a": "f98eaae041a747c2de980cde8225aaf3",
".git/objects/30/906c5ddac33c2be9d5345d40de383f7a81fca8": "cf9abce19fcb0550b1b36f1ff9a3ffa8",
".git/objects/34/d4df9b1ee3c49c10866c3ab33fc05af6ab9e4b": "bd64ccb2485f9fedfdd4f739315422ab",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/3d/555a6a0944898fc747952c0b1280a58aa299b3": "1cc75e23c31e18556334bcf1a8cd1f6b",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/43/0e472592f5809eab148f818d086c1a370b2133": "755e1a46cdde7491178f6046f96b43a3",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/4a/59a30e57f518456a79dd7ffa6d710526543c28": "8b7cabc03ffd6968de5562b0719aaaf0",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4c/ad78356a8642892e88db87449ac0606c113c44": "8afe511956a02bd9676170926138e97c",
".git/objects/52/d6d44613fd16ebc4227e4f964d2a6a9085fa4c": "739399bdda7c8332c4d8d218725fd7a4",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/56/091581ac7658e02c9fa24a2d65eabdce0e1d18": "8fe3a536736e95145d5cc7581c200f1d",
".git/objects/5c/e4cbe3492baa38f0d23b254bc9958b0420ef2b": "14815b8ba98ffc43dbc317daa515bf5f",
".git/objects/63/5e0eab9dee48bbe379c3e7ab0c2b01cf0d23ab": "cd2ff7980326ae1eee51548acb79d9c4",
".git/objects/67/51c98117c750563adfb8bfd616da94a0e084d0": "3f056588dd749874852d8b05a9d92e2f",
".git/objects/69/3889f0cf454d59bed2ebc10f5de65392da7143": "3c521b2d9575f1f9af49dc65bb149aa1",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6d/ec5b609da58f8569eb1a9a7f5470252c734ef9": "4a6c06a0cc6457550b9646a02d8e5316",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/e5c661c4375cce9ee802bdd77b3afcaf154612": "ccf663e49ba7161bc0cd4e19471d3a2a",
".git/objects/83/0f86b7790a1ef8f63f68dd7a8aae2757cde068": "b02a3bb0e3b6ded4c9d3a68b53e62f5d",
".git/objects/83/c1a74d9405b8cfeadfacbc645d8e413f031d92": "9487e52a67fab41d61dab3f55d3a7ce7",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/eec567f15d7bdbb8298eccb06bc707280af7f2": "669eb0b4d3b29650883e2e1afcad1fe5",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8d/31221c26a587cafe010d18bd3e90f945d0df7c": "1978b07e45171fb81b1383d7c1fd524f",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/95/cc5b5d1990cf3967b7b368e2d0a667276b0f73": "5a5a5c8fbff2dc58fc59f5edcb8fb3e4",
".git/objects/99/1226aa9f035db6d05248396fa8e4d2676ffa24": "87632ef00f44c54b15baa54d33b1a0a0",
".git/objects/99/a319e4df6407428a4acb275604b291f00728cb": "46d96e0884e29b287217eaff46e86324",
".git/objects/9c/124c3a0c695e1646169353b29c9390431d8010": "3d2c017590362a4267e09d6c4de53270",
".git/objects/9d/75bb4d8d2773dec96030e0c7be364b84c2194a": "3dfed708f4e10972dd3f17f5a7d806b3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/faabe115be74dbf5d8071d0e15ed7a3910cdb1": "463302c92fd427eb21d5d962696a743a",
".git/objects/ac/d31962b502b5dee58acd3d26726aa01df4c3ba": "04e064daf35ab332a17ae8cca22c1a34",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/ae/e76e3fda4f5519920e4197584e41e7508be9e0": "f87beb6424ce8920b8353ce035ae3330",
".git/objects/b2/a8a4ac0405c5bcdab68103ea2e095bb9f0b892": "531174575af94201ee5c8b9cd2b90c8d",
".git/objects/b4/6fb517ce2cf6ab00375485897f7a59c70ff367": "02683ac9c57531917c9775e0193a1df3",
".git/objects/b6/f8a88f99df7631229d494eafaf10005ca9260a": "5ff158e6867e90da0c95d2b262a27c0d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/0d2c1865cce04a27a4cde6647800a12295a905": "03f21fc28b397a4475981178c8e0f84e",
".git/objects/bb/e3a9f4eec61aa758f8b1021dad117064291539": "3a6a81af8257ea4fd0065c85da7c03ab",
".git/objects/bc/6b28cff3e11b1b13d7dc6c4bb95363cfd1f0fb": "f909eab2494e6fd9cfe250e02a0cb5b2",
".git/objects/bc/978df7f96c6b504f925011fc6dd96e181e0110": "0c62282bbce030a39c0ae0ee4e6abe5a",
".git/objects/cb/21abc8d548329706058e5906a13403f70d8034": "16cd5efa7908f5b5d024798fa54fd8f7",
".git/objects/cd/acc74c2f84176abfd225202fec8d415465a34c": "d23b22e5a9a9255fd1794ba7020dbd0b",
".git/objects/d2/2abddab485b4bde6bb4e941061fa8385016fba": "28f465c7fcfcba4645da3f2dfd959212",
".git/objects/d4/b9197fd40a5eb841a261cd94d97886fcf999a6": "f1732fcd863a98511bfc4e3295930191",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e2/dd90ff5e881d5039206ad8c6d3f0982a6d41eb": "879b8f015585ec0017f1d32d988de60f",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/5a45b5cc9a2a1b5571a0712e68a67e32dcb010": "a5bdd3e71963860eee2596bf0696dfd0",
".git/objects/ef/a76ff2c1318a5820b92390302ca94d1d6bded0": "ef2d54b48eb731648f105fdc61b770cc",
".git/objects/ef/c55dd5fa7b14d40f3d3a1209c2ddad2d5146ae": "ca7ad7ea5093d602eb579b6b32c6a263",
".git/objects/f0/4aafa7508fc1ea02a870365afb63d38a72f556": "3a16a323af2e2f3efb8059e7f00fe8d2",
".git/objects/f3/8b8c0010d0e96a3dfce580a24c22482191798e": "4c1edbec78e0d3aceb3b4b5b68bcc1e3",
".git/objects/f6/6ede1965e2459915ecbe0884593edec697d36a": "ea31fab15a12c6c19908fe7384aca8ac",
".git/objects/f7/90c3d9a73fb8652b0a289e50d32442cca95fcd": "6708fd7051cf8de9404284904523d440",
".git/objects/fc/b8018c02fa17f3f4a35bfcf3060431795a0ad4": "dcc89e4619e45a703333daa13ea3c53d",
".git/ORIG_HEAD": "e1828e640f2be82c17ab42b7e4466b26",
".git/refs/heads/main": "2cbf721c9168fccf3a0b6ff5f45ad35c",
".git/refs/remotes/origin/main": "2cbf721c9168fccf3a0b6ff5f45ad35c",
"assets/AssetManifest.json": "6da688945943d1c68e474701182c7124",
"assets/assets/images/box.png": "a9d988cd6785918680f105ce032970be",
"assets/assets/images/groceries.png": "669f8e6be0c3c2e7111081e286a7ea83",
"assets/assets/images/logo.png": "7b24bc89bf3763036e1f5e1c18a73a55",
"assets/FontManifest.json": "9ee548a5be803eea4cd8dc712d80fb39",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "ce5beed0a3bc9c93a9a6935d76d4df18",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/iconly/fonts/IconlyBold.ttf": "128714c5bf5b14842f735ecf709ca0d1",
"assets/packages/iconly/fonts/IconlyBroken.ttf": "6fbd555150d4f77e91c345e125c4ecb6",
"assets/packages/iconly/fonts/IconlyLight.ttf": "5f376412227e6f8450fe79aec1c2a800",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.ico": "59b70edbf6c8ecc1022e7c7d0707dd49",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b6baee48068a24a6f29cf39c5a7aff3c",
"/": "b6baee48068a24a6f29cf39c5a7aff3c",
"main.dart.js": "499c6ce50e79ca196d9bc7e4b021e1b7",
"manifest.json": "cfdf9129a6273101b1ac41211130d736",
"README.md": "c84dd7d29382d571437223dcd6b0fa9c",
"version.json": "1f9eb1d3bc47f576f99356b4a96b5bf7"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
