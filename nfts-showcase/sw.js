if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise((async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},r=(r,s)=>{Promise.all(r.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(r)};self.define=(r,i,c)=>{s[r]||(s[r]=Promise.resolve().then((()=>{let s={};const o={uri:location.origin+r.slice(1)};return Promise.all(i.map((r=>{switch(r){case"exports":return s;case"module":return o;default:return e(r)}}))).then((e=>{const r=c(...e);return s.default||(s.default=r),s}))})))}}define("./sw.js",["./workbox-78503f86"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/app-bootstrap.5b324342.css",revision:"a5eff6ac9747149a2a47874c4d17c8d4"},{url:"assets/app-bootstrap.ea814ce4.js",revision:"2a47eb5a88b6462b53ead01b33ddc543"},{url:"assets/index.5e8d8f87.js",revision:"ab1effd00d47f8d9caa7f29631967877"},{url:"assets/polyfills.26f7b7e5.js",revision:"6cc153f79abc4cdfbb6ca7958fa0cd4c"},{url:"index.html",revision:"6eb38c46c33403650bdf48ff40ca1129"},{url:"favicon.png",revision:"ddc7574953929ad7d634cff3303ba0e3"},{url:"robots.txt",revision:"f77c87f977e0fcce05a6df46c885a129"},{url:"apple-touch-icon.png",revision:"78dafd7f571c791fce6e6d465c936f21"},{url:"android-chrome-192x192.png",revision:"7544febbd35ebecee9ad709ac9d166d8"},{url:"android-chrome-512x512.png",revision:"6d627213d96bfde91c649fd1274e6baf"},{url:"manifest.webmanifest",revision:"c640271b764acd487330c87e5fa8a044"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));