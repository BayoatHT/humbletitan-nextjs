if(!self.define){let e,s={};const t=(t,a)=>(t=new URL(t+".js",a).href,s[t]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=s,document.head.appendChild(e)}else e=t,importScripts(t),s()})).then((()=>{let e=s[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(a,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let r={};const c=e=>t(e,n),o={module:{uri:n},exports:r,require:c};s[n]=Promise.all(a.map((e=>o[e]||c(e)))).then((e=>(i(...e),r)))}}define(["./workbox-1846d813"],(function(e){"use strict";importScripts("fallback-aeVb-rt3eTRMw5kjWNfOM.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next//static/media/1.8da77376.png",revision:"aeVb-rt3eTRMw5kjWNfOM"},{url:"/_next//static/media/HT-Standard-Logo.a1b61d7b.png",revision:"aeVb-rt3eTRMw5kjWNfOM"},{url:"/_next//static/media/PLACE-HOLDER-600x348.3522b748.jpg",revision:"aeVb-rt3eTRMw5kjWNfOM"},{url:"/_next//static/media/arrow.79aa16a5.png",revision:"aeVb-rt3eTRMw5kjWNfOM"},{url:"/_next//static/media/authority-tram-menu.8d3e1517.jpg",revision:"aeVb-rt3eTRMw5kjWNfOM"},{url:"/_next//static/media/blog-insights.ee315e3b.png",revision:"aeVb-rt3eTRMw5kjWNfOM"},{url:"/_next//static/media/content-marketing-menu-225x300.979c2e01.jpg",revision:"aeVb-rt3eTRMw5kjWNfOM"},{url:"/_next//static/media/dd-business-mag.d2ab4771.jpg",revision:"aeVb-rt3eTRMw5kjWNfOM"},{url:"/_next//static/media/dd-courses.0b9c5ff6.jpg",revision:"aeVb-rt3eTRMw5kjWNfOM"},{url:"/_next//static/media/dd-glossary.446d6e76.jpg",revision:"aeVb-rt3eTRMw5kjWNfOM"},{url:"/_next//static/media/dd-more-due-diligence.ebdbb79f.jpg",revision:"aeVb-rt3eTRMw5kjWNfOM"},{url:"/_next//static/media/dd-our-services.8cddbddd.jpg",revision:"aeVb-rt3eTRMw5kjWNfOM"},{url:"/_next//static/media/dd-politics.c9dfec8b.jpg",revision:"aeVb-rt3eTRMw5kjWNfOM"},{url:"/_next//static/media/dd-services.cec4c808.jpg",revision:"aeVb-rt3eTRMw5kjWNfOM"},{url:"/_next//static/media/management-service-menu-225x300.f28fad33.jpg",revision:"aeVb-rt3eTRMw5kjWNfOM"},{url:"/_next//static/media/monitoring-tram-menu.c5c44ee4.jpg",revision:"aeVb-rt3eTRMw5kjWNfOM"},{url:"/_next//static/media/relevance-tram-menu.35aaee20.jpg",revision:"aeVb-rt3eTRMw5kjWNfOM"},{url:"/_next//static/media/seo-menu-225x300.01e01e3d.jpg",revision:"aeVb-rt3eTRMw5kjWNfOM"},{url:"/_next//static/media/technical-tram-menu.bcc570bc.jpg",revision:"aeVb-rt3eTRMw5kjWNfOM"},{url:"/_next//static/media/tram-banner-1.9aaa62d7.png",revision:"aeVb-rt3eTRMw5kjWNfOM"},{url:"/_next//static/media/we-deliver-expertise.9974e179.jpg",revision:"aeVb-rt3eTRMw5kjWNfOM"},{url:"/_next//static/media/web-design-menu-225x300.d952f3a2.jpg",revision:"aeVb-rt3eTRMw5kjWNfOM"},{url:"/_next/static/aeVb-rt3eTRMw5kjWNfOM/_buildManifest.js",revision:"aeVb-rt3eTRMw5kjWNfOM"},{url:"/_next/static/aeVb-rt3eTRMw5kjWNfOM/_middlewareManifest.js",revision:"aeVb-rt3eTRMw5kjWNfOM"},{url:"/_next/static/aeVb-rt3eTRMw5kjWNfOM/_ssgManifest.js",revision:"aeVb-rt3eTRMw5kjWNfOM"},{url:"/_next/static/chunks/0c428ae2-7f14a4a81493ea0c.js",revision:"aeVb-rt3eTRMw5kjWNfOM"},{url:"/_next/static/chunks/140-5cb1df3c4037957f.js",revision:"aeVb-rt3eTRMw5kjWNfOM"},{url:"/_next/static/chunks/1a48c3c1-9eb35272e0c99536.js",revision:"aeVb-rt3eTRMw5kjWNfOM"},{url:"/_next/static/chunks/1bfc9850-1fe2db5eb966cff5.js",revision:"aeVb-rt3eTRMw5kjWNfOM"},{url:"/_next/static/chunks/215-623890efd58899ab.js",revision:"aeVb-rt3eTRMw5kjWNfOM"},{url:"/_next/static/chunks/252f366e-5def4095606343be.js",revision:"aeVb-rt3eTRMw5kjWNfOM"},{url:"/_next/static/chunks/393-e070d5f3fd6a474c.js",revision:"aeVb-rt3eTRMw5kjWNfOM"},{url:"/_next/static/chunks/634-8cabdb9ce9ae7673.js",revision:"aeVb-rt3eTRMw5kjWNfOM"},{url:"/_next/static/chunks/669-026f02c7347d659a.js",revision:"aeVb-rt3eTRMw5kjWNfOM"},{url:"/_next/static/chunks/842-dff9fd5139d6009b.js",revision:"aeVb-rt3eTRMw5kjWNfOM"},{url:"/_next/static/chunks/865-fe54819c14cfde87.js",revision:"aeVb-rt3eTRMw5kjWNfOM"},{url:"/_next/static/chunks/d64684d8-85c5e67b2dfa470e.js",revision:"aeVb-rt3eTRMw5kjWNfOM"},{url:"/_next/static/chunks/d7eeaac4-0185ba94fb745d71.js",revision:"aeVb-rt3eTRMw5kjWNfOM"},{url:"/_next/static/chunks/de71a805-cfbf325d3f5848f7.js",revision:"aeVb-rt3eTRMw5kjWNfOM"},{url:"/_next/static/chunks/framework-91d7f78b5b4003c8.js",revision:"aeVb-rt3eTRMw5kjWNfOM"},{url:"/_next/static/chunks/main-227e205eee84911a.js",revision:"aeVb-rt3eTRMw5kjWNfOM"},{url:"/_next/static/chunks/pages/_app-d8df1e4f059b1851.js",revision:"aeVb-rt3eTRMw5kjWNfOM"},{url:"/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"aeVb-rt3eTRMw5kjWNfOM"},{url:"/_next/static/chunks/pages/_offline-260e9770d65d72f8.js",revision:"aeVb-rt3eTRMw5kjWNfOM"},{url:"/_next/static/chunks/pages/companydetail-585e84aaae602273.js",revision:"aeVb-rt3eTRMw5kjWNfOM"},{url:"/_next/static/chunks/pages/elected-officials/%5Bindex%5D-a4763e0eaa3b743d.js",revision:"aeVb-rt3eTRMw5kjWNfOM"},{url:"/_next/static/chunks/pages/election-center/%5Bindex%5D-7dfe51271b71af7f.js",revision:"aeVb-rt3eTRMw5kjWNfOM"},{url:"/_next/static/chunks/pages/filtered-data-4e77ff04c939c7e6.js",revision:"aeVb-rt3eTRMw5kjWNfOM"},{url:"/_next/static/chunks/pages/humble-voter-61c07a94b8adf6b6.js",revision:"aeVb-rt3eTRMw5kjWNfOM"},{url:"/_next/static/chunks/pages/index-261b6832a6b353f1.js",revision:"aeVb-rt3eTRMw5kjWNfOM"},{url:"/_next/static/chunks/pages/state/%5Bindex%5D-9e27cd18474b480b.js",revision:"aeVb-rt3eTRMw5kjWNfOM"},{url:"/_next/static/chunks/pages/topactive-caaa0b87730187ad.js",revision:"aeVb-rt3eTRMw5kjWNfOM"},{url:"/_next/static/chunks/pages/topgainers-0b8fbc2b2aaab802.js",revision:"aeVb-rt3eTRMw5kjWNfOM"},{url:"/_next/static/chunks/pages/toplosers-22177b25cfac608c.js",revision:"aeVb-rt3eTRMw5kjWNfOM"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"aeVb-rt3eTRMw5kjWNfOM"},{url:"/_next/static/chunks/webpack-36285b590d9125bd.js",revision:"aeVb-rt3eTRMw5kjWNfOM"},{url:"/_next/static/css/09053c197304348b.css",revision:"aeVb-rt3eTRMw5kjWNfOM"},{url:"/_next/static/css/5674832e1468d24d.css",revision:"aeVb-rt3eTRMw5kjWNfOM"},{url:"/_next/static/css/ed71b2a9b700a4a7.css",revision:"aeVb-rt3eTRMw5kjWNfOM"},{url:"/_next/static/media/ajax-loader.0b80f665.gif",revision:"aeVb-rt3eTRMw5kjWNfOM"},{url:"/_next/static/media/slick.25572f22.eot",revision:"aeVb-rt3eTRMw5kjWNfOM"},{url:"/_next/static/media/slick.653a4cbb.woff",revision:"aeVb-rt3eTRMw5kjWNfOM"},{url:"/_next/static/media/slick.6aa1ee46.ttf",revision:"aeVb-rt3eTRMw5kjWNfOM"},{url:"/_next/static/media/slick.f895cfdf.svg",revision:"aeVb-rt3eTRMw5kjWNfOM"},{url:"/_offline",revision:"aeVb-rt3eTRMw5kjWNfOM"},{url:"/favicon.png",revision:"bf4252c9aa39afa35179be05e28c7c40"},{url:"/icons/apple-touch-icon.png",revision:"e61c3e40fdcf8fd19a1b92d6c978af4f"},{url:"/icons/icon-144x144.png",revision:"90b24908d7fed93a761f09e51bd4b2e7"},{url:"/icons/icon-192x192.png",revision:"9952d9882da3a6d9852a6e53642b473d"},{url:"/icons/icon-36x36.png",revision:"ca3c4b7be55dbc5854a319ba8fb3b56d"},{url:"/icons/icon-48x48.png",revision:"ee305b2fe7b1194ffaccefbb61c75ade"},{url:"/icons/icon-512x512.png",revision:"21cbbf056f7322f4d16db0bfbcd49dbc"},{url:"/icons/icon-72x72.png",revision:"6b6cba0f4602f0ba9f5e87d3950e5fa0"},{url:"/icons/icon-96x96.png",revision:"751cff093b45d0944daba8cd299ed65e"},{url:"/icons/maskable.png",revision:"9952d9882da3a6d9852a6e53642b473d"},{url:"/manifest.json",revision:"789594551d0377863bc1b7eb82a5a76d"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:t,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));
