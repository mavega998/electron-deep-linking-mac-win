(function(e){function t(t){for(var r,o,u=t[0],l=t[1],i=t[2],s=0,f=[];s<u.length;s++)o=u[s],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);d&&d(t);while(f.length)f.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(c.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},o={app:0},a={app:0},c=[];function u(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-2d207757":"e514bfb7","chunk-707a4942":"88a046da","chunk-1c9f2fc8":"c0d2fbe0","chunk-ba2cce36":"c11eab18"}[e]+".js"}function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={"chunk-1c9f2fc8":1,"chunk-ba2cce36":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d207757":"31d6cfe0","chunk-707a4942":"31d6cfe0","chunk-1c9f2fc8":"3d319531","chunk-ba2cce36":"08742d02"}[e]+".css",a=l.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var i=c[u],s=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(s===r||s===a))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){i=f[u],s=i.getAttribute("data-href");if(s===r||s===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],d.parentNode.removeChild(d),n(c)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=c);var i,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=u(e);var f=new Error;i=function(t){s.onerror=s.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[e]=void 0}};var d=setTimeout((function(){i({type:"timeout",target:s})}),12e4);s.onerror=s.onload=i,document.head.appendChild(s)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var f=0;f<i.length;f++)t(i[f]);var d=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-view")},a=[],c=(n("034f"),n("2877")),u={},l=Object(c["a"])(u,o,a,!1,null,null,null),i=l.exports,s=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f"));r["default"].use(s["a"]);var f=new s["a"]({mode:"hash",base:"",routes:[{path:"/",name:"meeting",component:function(){return Promise.all([n.e("chunk-707a4942"),n.e("chunk-1c9f2fc8")]).then(n.bind(null,"d13f"))}},{path:"/controls",name:"controls",component:function(){return Promise.all([n.e("chunk-707a4942"),n.e("chunk-ba2cce36")]).then(n.bind(null,"ce01"))}},{path:"/close",name:"close",component:function(){return n.e("chunk-2d207757").then(n.bind(null,"a12c"))}}]}),d=n("2f62");r["default"].use(d["a"]),r["default"].config.devtools=!0;var p=new d["a"].Store({state:{idMeet:null,mic:JSON.parse(localStorage.getItem("mic")),cam:JSON.parse(localStorage.getItem("cam")),leave:JSON.parse(localStorage.getItem("leave")),isHost:JSON.parse(localStorage.getItem("isHost"))},mutations:{changeIdMeet:function(e,t){e.idMeet=t},setMic:function(e,t){e.mic=t,localStorage.setItem("mic",t)},setCam:function(e,t){e.cam=t,localStorage.setItem("cam",t)},setLeave:function(e,t){e.leave=t,localStorage.setItem("leave",t)},setIsHost:function(e,t){e.isHost=t,localStorage.setItem("isHost",t)}},getters:{getMic:function(e){return e.mic=JSON.parse(localStorage.getItem("mic")),e.mic},getCam:function(e){return e.cam=JSON.parse(localStorage.getItem("cam")),e.cam},getLeave:function(e){return e.leave=JSON.parse(localStorage.getItem("leave")),e.leave},getIsHost:function(e){return e.isHost=JSON.parse(localStorage.getItem("isHost")),e.isHost}}}),m=n("ce5b"),h=n.n(m);r["default"].use(h.a);var g={},v=new h.a(g);r["default"].config.productionTip=!1,r["default"].prototype.ZoomMtg=window.ZoomMtg,new r["default"]({store:p,router:f,vuetify:v,render:function(e){return e(i)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.15ade641.js.map