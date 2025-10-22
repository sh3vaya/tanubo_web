'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "fdb8299c360bad8959843d073eb86167",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "ba405ce7832051574d90ea9e302a3d8e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4377362fda728a2159f8ca3992a42c01",
".git/logs/refs/heads/main": "58d99bfb48978e79339d2aa38ef1d69d",
".git/logs/refs/remotes/origin/main": "e22cc9707a59ff57399919643d435fe1",
".git/objects/01/e28008ea3fc5879590d3196eabe97d2abb09ce": "d7909e0b4c0ff937b1f3411c0893b55f",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/0d/1d848868fdb28e8d33dd980a80833722c0e705": "fe9ffc9b7a71231d8224ffca64373f8d",
".git/objects/0d/a2214a85895a550e54eb42ada08a3d9187db21": "c2006d7f89e7128ab4b8df6b54884e6d",
".git/objects/14/550ca1428376587849f2dd7bbffb7dfd7c7a42": "6f41290d293a2068ab49a187921d320c",
".git/objects/17/744a48681753ef0c3baa0be7a75df1cc1a8449": "eac02bbc29c105718519bf85cbcfef38",
".git/objects/17/9e6191110ff3430b4dd988f94b6200561dff8e": "b13d21904678b598f9060b4cb4a47ac4",
".git/objects/18/094b7622831b2b6336ec69693bee32fd07b8da": "fd9556c0a8827bc4f5abf06356aeec0c",
".git/objects/1d/3e141beec472e554b599deea6ddd8b1531a999": "a5a416811ba1dfaeb728a0cfa4ba8708",
".git/objects/1e/b351d918a1509b88d1dc3f15091eff83fd1bef": "cba6a43a8eff83be31441b72370f5551",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/21/6a90bcce43dd8456307fb8b3b8f78afc81612d": "c7334cd6bb1b6f382174c238a6154b9d",
".git/objects/21/dc909bccd3d248558c3c3c8cddc6718d861558": "c7d7d51cc7015943e4140407f3035970",
".git/objects/27/f63668fc68d7002512757ff91c45de9f3b4491": "76a8a607739293fa875b518ea69ccf1d",
".git/objects/29/30b81361ed99978292d94748ae8cfef3089c6c": "008bcc798e197a39c5c9db49be6fd89b",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/2a/9936f393296f4abd97dc2ed488be7f2969477c": "cc18a54375f8428082082a0864819fc8",
".git/objects/2b/5dba399a606095138764ce72b3876c8554e4a3": "7bf37b68992c401fd961c64d2aa06805",
".git/objects/32/782ed884ac17fe6dfa929676ede8b87a2e493a": "63081b582d3a41b63b0cb1db520f0c79",
".git/objects/38/9ef40c9eae55e82a1096483424767a754e34fc": "378b42dd7d461db2359a232ed64c13d0",
".git/objects/38/a04dd4b80f54ef4edd5cf58583f7684444e96b": "6b75a5a0f41b6bcdebb60a06d18e641e",
".git/objects/38/ab96c2e76667951fd5cc3e7ffe45f64641c700": "234ac680bd5009a7387ee0b7e7adc8c1",
".git/objects/3a/ce84dea034c4cace0d8322ec09c1a59028bc80": "c3186da8f9d94114a97db7984163c7be",
".git/objects/3b/29eec39ef12256e3d4e1772d53a95db975000b": "0beb12758b8d50d69de3ce0518c6d3ab",
".git/objects/3f/61230143d7d727beb0e564d13fed4c744cceec": "07be5298d3c9a4ac2c7881a829762437",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4b/a7657d716310a405427f3ff3d41c9704a4b597": "5034470edc9412450c6bf902a9bdcbdc",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/50/b09eab485698f6c1543ff77e32162a0eb22aaa": "43b3615bf6ce2258c776cc93195034d7",
".git/objects/5b/b5ca0d556f0ac8aada8bb92ff26d8ad1e8d208": "1c6625cb12e15122c600f1a41395047b",
".git/objects/60/128cd9feb42ac1e117e8eb826af400c0f42ffc": "65a05d8645f5e60b9611c63212e81411",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6c/f12f1840e7bb29d0de2c4938907dc84f3839c7": "ae6c3639f8b416e561b8c46a0a79e81a",
".git/objects/71/0fad74aeb3dc96a663814f4f59084ecbfb3102": "8b11448b16ade654c57e4d86a99c8872",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/81/7c2e9ef6be2d8584bbcc689752ffa6315a1b13": "a596f6e32a8085b6b3466cbf456c3942",
".git/objects/86/abb904a953c864039dc902abb0facc4dce7c98": "e2194773bf985d5908050eced1bc240c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/8927db492b4f4673154f5214843daacc4c5622": "29e95be570647e7dc2423c6f54e93ba9",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/44350f485ab54b41eadc2e8c659c4c263e9357": "9ad4c2dadf5279112b0eb97a684b2c32",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/99/69d7c121d6e4e9f8341bf251d7b7927830605f": "c311937b817566ffc30ae49988b656d8",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9b/6ac327eac12b9ad2b4e54aed4edacba888ff37": "0435ed01bec9e72c3f221efb218f4ed8",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/9f/f20e8ef7f44724e48b816c51052c44f50f7a88": "0a7eee2381ae72471b6e322b346430f3",
".git/objects/ac/bba03dccffaacd289b9f96904afba8d3ba3e4e": "f6d7ea15023933fdfef9074c5f9a35e4",
".git/objects/ac/e2981fcf969a956f61079aa83b5c69e7af4661": "9ff5622b06daf55368431911d281639e",
".git/objects/ae/386842a2021a7c35e877b6459e2f79b4d8d036": "1c7ffd74420fc137aebd674562613b9e",
".git/objects/ae/a65e4bb061e62aad00363f4afeca8c53206575": "3a8b6bad55c14f39f7aeede7afd8f6e3",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/f7de7df8cb16937372333b5a83377cc090d07b": "dc82e97cb8a86c4c6a273a234fa9b9b6",
".git/objects/b8/f28c45176fd1a4c0a58e7e3bad8b4069fa3ea6": "26c0124c46eeab4ccfa055d5c97c9744",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/5b84277029850fe518a56899b31abc05df1c4d": "4f4f0ac8428cc3e9e40a57e87d3cf8ba",
".git/objects/bd/fb73248f40f8533d9674080be455de18a18f84": "01cf0e155b89d884d967592be20d631c",
".git/objects/c1/c12b295a50cde50a8f800aa0a0163618cc9dd3": "053e481c5b980d6e0325f57c4e995b1a",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/cb/dcfe831fdaf191960a257a1a3a657eb1462671": "3e0d18cfb6c10da33ec9b07feff63098",
".git/objects/cf/15b134f93167d65bf59bf4936788d9df960775": "6cb74b93e5fac888fb675465a6719359",
".git/objects/cf/f0ecc652347638a5fce735b1a66b6d6e28dbef": "d855331fe6ca0ed078428ac80f62cd6f",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/34807d2d996052ec2b7233ac6e5ef4b21041e7": "fe05e574a2b25ba378393b89541c4dfc",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/0e8ec8de7bb7257d1a8c90eb9468032091df20": "0ca4b7f3b2c63fa6299ee55629d02b4c",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e5/38c60a5e3bffe03e0a2594b26e449f628ee8af": "1dc2f62e4948231bca3be0a8999cdb15",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/af392fd5137f368bee615714f30592db99033b": "953cf38116d9fa8d0ee1de08bf841208",
".git/objects/f5/22b19cc7f76501cd3ef7b2707dacf948921440": "dea6ce3042f3bc907e7106be44b5b1de",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/fc/ee511d4694159f469681c679a5bebc2b2244ae": "1bf35ca2a6459d2567a5facc7c838657",
".git/objects/fe/108022b9843067aef555cd560ca146bfa10c11": "0f2a845bb7f038c1bbc998b6b28a547c",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/refs/heads/main": "51738c504b8d8df10c46ba428585e33c",
".git/refs/remotes/origin/main": "51738c504b8d8df10c46ba428585e33c",
"assets/AssetManifest.bin": "2a7dc4ebdab65b2dc52f7db1ddee9296",
"assets/AssetManifest.bin.json": "4818e37ac766e4e6c0015b71549a0354",
"assets/AssetManifest.json": "0b0c105cc8d0364e39a93c28a186e7b6",
"assets/assets/github.svg": "7efa1a5bd6748534414145d9ecc43ca8",
"assets/assets/images/logoo.png": "1e9e793c3ba0f9d57c0810b544ea05a4",
"assets/assets/images/menu/almond_croissant.png": "6ed114d3839a74adc0ebcad2c4939e2d",
"assets/assets/images/menu/biscoff_affogato.png": "f35947bc6cb293c545d4ea4388e5e6ce",
"assets/assets/images/menu/caramel_macchiato.png": "072ad0f714eb0611fa008498990fa206",
"assets/assets/images/menu/cheesecake.png": "5708dc109537e2fbd3b22c79609c99c5",
"assets/assets/images/menu/cheese_danish.png": "561e8b7e9cdcb2cd5a8bee1a63d054ba",
"assets/assets/images/menu/chocolate_lava_cake.png": "9709a43ea0fbf6b8ff17c4cf34719333",
"assets/assets/images/menu/cromboloni.png": "66d7aefe5d5c6cd40b917f4813211cb9",
"assets/assets/images/menu/garlic_bread.png": "a18cb8f1c6b6e734d1e0851001c8e592",
"assets/assets/images/menu/hazelnut_latte.png": "8558fcb6b69a48c477b890b47620bbe1",
"assets/assets/images/menu/kopguren.png": "5476c6a8f26154ed98aafe5151b9d781",
"assets/assets/images/menu/matcha_latte.png": "e9b6c6857d341e35e5db5428ca7a4f4b",
"assets/assets/images/menu/red_velvet_cheesecake.png": "3e97b1f85cb42b33531a0bf675168dbb",
"assets/assets/images/menu/red_velvet_latte.png": "3631426fa84451e0679443ade1386f1e",
"assets/assets/images/menu/strawbery_danish.png": "0c647e0b167e4238e3667cf200a7e880",
"assets/assets/images/menu/tarcha_latte.png": "7cc4e3e621cfb473787f9850aa63a2cf",
"assets/assets/images/menu/taro_latte.png": "eb909d606e8a147f87d21fd547bd2f32",
"assets/assets/images/menu/tiramisu.png": "c0e0fa7fce84bd90cef31c6cbed80668",
"assets/assets/logo.svg": "0da35f81f79bd3b6ba195a755daf3921",
"assets/assets/playstore.svg": "636006c15a74900d16454c9e50773a98",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "c757033dd73d325cf8c33c4e3ba51fd8",
"assets/NOTICES": "f201cef1e3e354d78d499fe8c1b075d7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/getwidget/icons/dribble.png": "1e36936e4411f32b0e28fd8335495647",
"assets/packages/getwidget/icons/facebook.png": "293dc099a89c74ae34a028b1ecd2c1f0",
"assets/packages/getwidget/icons/google.png": "596c5544c21e9d6cb02b0768f60f589a",
"assets/packages/getwidget/icons/line.png": "da8d1b531d8189396d68dfcd8cb37a79",
"assets/packages/getwidget/icons/linkedin.png": "822742104a63a720313f6a14d3134f61",
"assets/packages/getwidget/icons/pinterest.png": "d52ccb1e2a8277e4c37b27b234c9f931",
"assets/packages/getwidget/icons/slack.png": "19155b848beeb39c1ffcf743608e2fde",
"assets/packages/getwidget/icons/twitter.png": "caee56343a870ebd76a090642d838139",
"assets/packages/getwidget/icons/wechat.png": "ba10e8b2421bde565e50dfabc202feb7",
"assets/packages/getwidget/icons/whatsapp.png": "30632e569686a4b84cc68169fb9ce2e1",
"assets/packages/getwidget/icons/youtube.png": "1bfda73ab724ad40eb8601f1e7dbc1b9",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "f6d7057481c688888f25c2deca244f37",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ccc1340a9a431e30b931827809834fd0",
"/": "ccc1340a9a431e30b931827809834fd0",
"main.dart.js": "e8a9f7767a48ae784358d8f4f678bd52",
"manifest.json": "a4051ccbebd1bbbff64cada9bc3d9749",
"version.json": "b317444e5d1e9d844da3b71ac2f0dd8c"};
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
