if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let c={};const o=e=>a(e,r),f={module:{uri:r},exports:c,require:o};s[r]=Promise.all(i.map((e=>f[e]||o(e)))).then((e=>(n(...e),c)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/Framework7Icons-Regular-a42aa071.woff2",revision:"4a39aba9fb8a2f831fa437780e1a058a"},{url:"assets/Framework7Icons-Regular-eba1e821.woff",revision:"d03b787b6492fa2b0141c43fb7e56689"},{url:"assets/index-30a51868.css",revision:"c7539eb7e4fce813955f3028f380075b"},{url:"assets/index-f64e4f66.js",revision:"7fb069eda279d3013d8293aa35ce3e54"},{url:"assets/material-icons-8265f647.woff2",revision:"53436aca8627a49f4deaaa44dc9e3c05"},{url:"assets/material-icons-fd84f88b.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"icons/128x128.png",revision:"53eb94b52a7708c204d00b3163613efc"},{url:"icons/144x144.png",revision:"43ab18fa1e3542172893039cf7ed3f1d"},{url:"icons/152x152.png",revision:"87d57a99efe0946c6e4f62568ae9add2"},{url:"icons/192x192.png",revision:"cf8718bfdcedeec8cc4eab573cd94464"},{url:"icons/256x256.png",revision:"c5c3f6ae682af4bd028dbe681a70ef85"},{url:"icons/512x512.png",revision:"9be26618617a819a5aa8667dd6dda896"},{url:"icons/apple-touch-icon.png",revision:"c5c3f6ae682af4bd028dbe681a70ef85"},{url:"icons/favicon.png",revision:"53eb94b52a7708c204d00b3163613efc"},{url:"index.html",revision:"a6f3ea20ca6966012ae1e1e1acc4e8a9"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=service-worker.js.map
