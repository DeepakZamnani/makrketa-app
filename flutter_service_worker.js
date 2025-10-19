'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "cc9b435d7053eef9ab2575da008b2ce3",
"version.json": "e6a97d66495ba8ed97aed4b6f1a838ba",
"index.html": "538aa47a69142c66df1051731dd4ed99",
"/": "538aa47a69142c66df1051731dd4ed99",
"main.dart.js": "fa2483eddf8bc043433b2844a522c396",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "f4b1624caedb0891b66afc8d872ef801",
".git/config": "bd403a11d24cfabb20842fa4510ae915",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "7a2beaf557655dfe4d49f90a155f8001",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "1cc6403c603e76bcc26b0586008b247e",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "e105e618ebe72cd32bb8ffbede8c4bf6",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "ecdf16b6e236ddf82afbc5360f5ce6bb",
".git/objects/35/887789b57e2d52c79916b74d010c54b19c791d": "52772e96ce719eb9111cb95d700abc54",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "c04d0bcbee109da1b68573e9237d1b84",
".git/objects/3c/ddf31c8f6efa4f8bf433aa27656f4e1da00e06": "ae6313e3307bc7af1c2f844c6e0fc2c5",
".git/objects/56/9045bbca63732f94bd85b2e72014335d66eab7": "e08b3e6d531f6fe73d210a24d1c1543a",
".git/objects/5a/6cc9b7d8030e63231e7ded3c7c52d3ebcfceeb": "36d2c4f99ab427d8904601de002c6531",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "c507d69554096e8cf8f581a9e3e2421e",
".git/objects/b5/17171aa45987641fc5c0ecc1f89fed1ce57e6a": "9af09e5b4c301c957fd5e1fc6cb44e7a",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "819a1bee2d98b54140582e489dcbb8ba",
".git/objects/ac/1f7dd995b969a3ff56dd04c8f9f776c9cdfe05": "da75f78ebf736ec101ff5100206b0753",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "1a4ee0c85a695a5f8ce1f75dac7efc0c",
".git/objects/d7/a05b07de5f9bdd7482c28654568003567075c2": "bb4d5b1adcd0e4cbcebf50a21745f081",
".git/objects/d0/adce1002777f1f6995699f91d4233aac243221": "0e04c1bf05743a6b8614c125f630a3a1",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "5bea32f46d8e9e33e1e2bbb5c1523ffa",
".git/objects/bd/6be43d015a2a8a92db341ee519feb383a20cb4": "70bc1d07824e0d0a16b4211b42792fef",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "5a9f3522bf38ba5dd54f15a0f75cb0d7",
".git/objects/d8/8b48b3bfb7eb467bd59a0cbe05183f8ac681b0": "ca71666b29fbb7d5d485ae70e43f12cd",
".git/objects/e5/59deb3c0c076d83393057e4231b177ea2b3254": "be4e655f9432db2cab222284901cee88",
".git/objects/f4/57b3098e0b3792c0d0638049dbe00759dbb478": "b5342cc1f9b898cd35ca7256af25dddb",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "28153710279c4ac512d78eab4ff360c9",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "01d8a507be49f15714be4d17b6947e52",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "aa30b45014e5ab878c26ecce9ea89743",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "fb2ee964a7fc17b8cba79171cb799fa3",
".git/objects/ed/2b769b85894dcfe0f867c4b6b73a02de038357": "26ac472e486df49ae31517f275f0618e",
".git/objects/c6/1df849687e3503f1da4e939807f83c34ea2b77": "d7552567bf8b64b79bc638bb807e2f81",
".git/objects/42/6c36efd080f04322a22602a9d2236447443818": "bd7037cf7fc931f94cc91c1505a1347b",
".git/objects/1f/045e821c6bd267cc2e7e7bad5e998b60f38e39": "a09c29bc777b3367dc7ff81d64485d7b",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "6db9ef87f25d1bcf0e7bea48b7fdf817",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "0e7fbd1f8845cbeb2cdbf944a84ebaee",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "b25b26893b8f92a4f583677ba27f0a7f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e35fdc55764d9ed14315f6ff50093ab3",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "9524d053d0586a5f9416552b0602a196",
".git/objects/07/6283b3c01581a67494f04c3914e9109b81150f": "c03445c1575ff7f5aec74eab3f07e69b",
".git/objects/6e/f173dfd5c1a4d1096a3234bbb8e9342318e71f": "d43657a9567ec8fceffa112e8d27ccb1",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "bff9d14adbb36657694ef0fc6d5e6f7f",
".git/objects/65/d4597e88ca71ac35a05bd7b69b3f2b4984051a": "fc699e4ae6b2c20ee319bb1ae7096697",
".git/objects/54/888c6f005b5d7703ee32e70d23953dadb68ce3": "af72fcb4a1334b44771c02749ac563af",
".git/objects/5b/598171d5fd2b9b3518836b6f7462444ece4938": "1430b75c5c92ad14dc03ed015166399d",
".git/objects/37/b734fde90d974266d3baeb1ad594c788755d56": "6a12933bbd7f7a72e72b57aacc9777d7",
".git/objects/6d/caac877b135ffe7131b292cb0404adf3d46645": "3d55522ad158658bc70d60cce0bf8c74",
".git/objects/06/856a1ae09994b71769891cfe348b944d345354": "fb919b4d947dd9c464e3186114a2f3e9",
".git/objects/6c/0ce1f2fa4ac1bf8a9fecdc6b15437905d57d25": "55b11bc310733be234353e74645f4966",
".git/objects/39/76fae64e6e6fec6ff77efde68dfcab803cd07c": "e99a6c438c80a5b63dcc9e8347298277",
".git/objects/39/c01b838adf79f6e4bec38167af909e9cba5ab2": "8c2f02753ce531552bb76293c5f34ff0",
".git/objects/55/edb665bfd5831717c6e69537a6b5d5044a719b": "db1d1478e5a3d9ce3709c6742f16b8aa",
".git/objects/97/a21aa09ff48fe998284c495990744f8f29b03a": "073a2fb61cb12deff7b13b6c435f3921",
".git/objects/64/d88f47420fb86759e9e592e0e5814e1057bde2": "9e8c4de9e3e2261ab407a487019acdd5",
".git/objects/bf/ad1775570c7b6e3fe85ed59fd97a222f516ac4": "5945adf11e2a5ed6d84e7580617d4cde",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "9dbf5b01e391c548c8343be8d1d4b04e",
".git/objects/b8/a4e4a1a10098aeae4679eaee860b12fa0124a3": "3a1b6bcd990626462a58c8593fca0b24",
".git/objects/dc/f83695f71da8c6278eb914cdd42692c427924e": "70211b0a8348423a1f37454c4b604839",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "b0c549c0aed479932cf26d094f76630e",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "936bdc921e2d2af84e1b88a53c8fc956",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "9de9f2c6fa0aea6ee34b79162e9fc361",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "06319d1126433915a2b82321cb327d7f",
".git/objects/ef/a1f56db32642a8b446a3850e57e8cbba6d4fbd": "3b057d63bd8d79e1a976f7ce404e1e25",
".git/objects/ea/f3016b9f86ca04722e00cde5e2d4ba56dd5200": "bb2212c4b1ef797572a1c67776796826",
".git/objects/cd/6c13a572deb1371dba17e4e18722bd1a38f66a": "3be8c89c07079764ed9226720cb2eb5e",
".git/objects/e8/f72a7bc8dd2db07488bde6bd31ec75869909ec": "4f7244b69a6fabe1947785b9c4b6b5b7",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "c3694958e54483a81b3e32ab9f84ece2",
".git/objects/ce/4e2f8e91b56d6271a475bde2587efd782e5a70": "99fdd543586b08ec8891f9cc8bb6dbe3",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "0bb82caa96c962530864f28e847f4ab9",
".git/objects/2c/ea586b6bc7256366c5fbaa4f8a4b7d8ecc9ed4": "6af0e8deb29599538cb2d9a9de7c170a",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "bdc2f4ba1c16b2f697d776261713037a",
".git/objects/76/f5d5c5d206b97ca33ef39f93c116277c3f2e86": "642d764edb4bc4a28037990207031783",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "3ac7af462afd2c09154fc9d4fe3ca9ec",
".git/objects/7a/c66ac597a6f0116a4aabf79d28c23b7b43c7b4": "0a92ab499e1c59f62f122d43d0a7970f",
".git/objects/8e/12c519d279e4c9337e4c821fd776fba3065310": "b14b4204b3cdf20a178586f0d44c3ca5",
".git/objects/22/830c10f3f1887dad756efa5a5648c331bc80c7": "1a4cc5a890b18cb95ee38f8f5cd976fe",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "318721e4a776258fbffe88a7b7977cfd",
".git/logs/refs/heads/main": "ca1945cd8da092f9b3387c8deafad511",
".git/logs/refs/remotes/origin/main": "e8bd21da5571af4bc590a56e6eb85e7b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "84cc5183a65e9cdd7c4eb98ceda93ff9",
".git/refs/remotes/origin/main": "84cc5183a65e9cdd7c4eb98ceda93ff9",
".git/index": "5dbfd0964eedb89a3d062c3f34a9c6d2",
".git/COMMIT_EDITMSG": "f2f43598425351e9f8ad38fef569861d",
"assets/AssetManifest.json": "95862361667a50922afff0adffecc654",
"assets/NOTICES": "fcf7afb23067fdaac30149a21ca8ac2d",
"assets/FontManifest.json": "23d41126e269accf6b936260854d3429",
"assets/AssetManifest.bin.json": "9ef1c2d973ae48d94069200f55cfac36",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "6615741d766be51ec8f0fd58b5be3b24",
"assets/fonts/MaterialIcons-Regular.otf": "e6c1fb3f5f8ae79850d1c6e3ee0ddc88",
"assets/assets/fonts/ubounded.ttf": "54711a5918ed6de678623359ea2bfd74",
"assets/assets/fonts/CCC.ttf": "ad82c6836779a62c089b3be3dfac19d1",
"assets/assets/fonts/ranade.ttf": "ce65c6f9f9ea8c031182864e024e7e4a",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
