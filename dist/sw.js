if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,s)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let c={};const d=e=>n(e,o),t={module:{uri:o},exports:c,require:d};i[o]=Promise.all(r.map((e=>t[e]||d(e)))).then((e=>(s(...e),c)))}}define(["./workbox-27b29e6f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-84561eee.css",revision:null},{url:"assets/index-d02b2818.js",revision:null},{url:"index.html",revision:"4c36055e76671638c34421444a163ac3"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"favicon.ico",revision:"8ed1fd5a2408018ead982950c5f54d34"},{url:"apple-touch-icon.png",revision:"817c4710f83fb81479a40d399303658d"},{url:"android-chrome-192x192.png",revision:"7b8a41178aeabc7b46fdb2faf58347ef"},{url:"android-chrome-512x512.png",revision:"fcf98fa695e3524906fd10415646a20e"},{url:"maskable_icon.png",revision:"4b8d2145b56ae7d7e42859b8ecf3e945"},{url:"manifest.webmanifest",revision:"0239cf832939947c2a1c8d19f8747321"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
