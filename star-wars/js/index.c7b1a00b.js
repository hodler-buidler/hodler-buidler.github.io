(function(e){function t(t){for(var n,a,s=t[0],i=t[1],u=t[2],l=0,p=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);d&&d(t);while(p.length)p.shift()();return c.push.apply(c,u||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,a=1;a<r.length;a++){var s=r[a];0!==o[s]&&(n=!1)}n&&(c.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={index:0},o={index:0},c=[];function s(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-80b089ae":"0399b3ec"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r={"chunk-80b089ae":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-80b089ae":"0e3a424a"}[e]+".css",o=i.p+n,c=document.getElementsByTagName("link"),s=0;s<c.length;s++){var u=c[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===o))return t()}var p=document.getElementsByTagName("style");for(s=0;s<p.length;s++){u=p[s],l=u.getAttribute("data-href");if(l===n||l===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var n=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=n,delete a[e],d.parentNode.removeChild(d),r(c)},d.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){a[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var c=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(e);var p=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(d);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",p.name="ChunkLoadError",p.type=n,p.request=a,r[1](p)}o[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/star-wars/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var p=0;p<u.length;p++)t(u[p]);var d=l;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("3638")},3638:function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"page",attrs:{id:"app"}},[r("div",{staticClass:"page__content"},[r("router-view")],1),r("ui-scroll-top"),r("the-footer",{staticClass:"page__footer"})],1)},o=[],c=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},s=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"footer"},[r("div",{staticClass:"footer__sign"},[e._v("STAR WARS CHARACTER Encyclopedia, 2019")])])}],i={name:"TheFooter"},u=i,l=(r("966c"),r("2877")),p=Object(l["a"])(u,c,s,!1,null,"51d8c3ce",null),d=p.exports,f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("transition",{attrs:{name:"fadeIn"}},[r("div",{directives:[{name:"show",rawName:"v-show",value:e.showScrollTop,expression:"showScrollTop"}],staticClass:"scroll-top",on:{click:e.scrollTop}},[r("i",{staticClass:"material-icons scroll-top__icon"},[e._v("keyboard_arrow_up")])])])},h=[],m=r("9b86"),v={name:"UiScrollTop",data:function(){return{minScrolledDistanceToAppear:300,distanceToTop:document.documentElement.scrollTop||document.body.scrollTop}},computed:{showScrollTop:function(){return this.distanceToTop>this.minScrolledDistanceToAppear}},created:function(){window.addEventListener("scroll",this.trackDistanceToTop)},beforeDestroy:function(){window.removeEventListener("scroll",this.trackDistanceToTop)},methods:{scrollTop:function(){g()},trackDistanceToTop:Object(m["a"])((function(){this.distanceToTop=window.scrollY}),100)}};function g(){var e=document.documentElement.scrollTop||document.body.scrollTop;if(e>0){window.requestAnimationFrame(g);var t=e/8;window.scrollTo(0,e-t)}}var b=v,w=(r("b31b"),Object(l["a"])(b,f,h,!1,null,"06184a6b",null)),y=w.exports,k={name:"App",components:{TheFooter:d,UiScrollTop:y}},T=k,E=(r("d2de"),Object(l["a"])(T,a,o,!1,null,null,null)),O=E.exports,_=(r("d3b7"),r("8c4f"));n["a"].use(_["a"]);var j=[{path:"/",name:"home",component:function(){return r.e("chunk-80b089ae").then(r.bind(null,"c1bc"))}}],A=new _["a"]({routes:j}),S=A,q=r("2f62"),R=(r("99af"),r("4160"),r("159b"),r("96cf"),r("1da1")),I=r("ade3"),P=r("2909"),x=r("53ca"),C=r("bc3a"),D=r.n(C),L=r("a65d"),U=r.n(L);n["a"].use(U.a);var $="https://cors-anywhere.herokuapp.com/",B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.baseUrl,r=void 0===t?"https://swapi.dev/api/":t,a=D.a.create({baseURL:$+r,headers:{"X-Requested-With":"XMLHttpRequest"}});return a.interceptors.response.use((function(e){return e}),(function(e){return n["a"].toasted.error("Oops.. Seems like network request failed :(, try again/reload the page.",{duration:5e3}),Promise.reject(e)})),a},F=B,M=(r("ac1f"),r("841c"),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.page,r=void 0===t?1:t,n=e.search,a=void 0===n?null:n,o={page:r};return a&&(o.search=a),{method:"get",url:"/people",params:o}}),N=M,H={getMany:N},J=H,W=function(e){var t=e.id;return{method:"get",url:"/species/".concat(t)}},X=W,Y={getOne:X},K=Y,z=function(e){var t=e.id;return{method:"get",url:"/films/".concat(t)}},G=z,Q={getOne:G},V=Q,Z=function(e){var t=e.id;return{method:"get",url:"/planets/".concat(t)}},ee=Z,te={getOne:ee},re=te,ne=function(e){var t=e.url;return{method:"get",fullUrl:t}},ae=ne,oe={get:ae},ce=oe,se={people:J,species:K,general:ce,planets:re,films:V},ie=se;r("7db0"),r("466d"),r("1276");function ue(e){var t=document.createElement("a");t.href=e;var r=t.pathname.split("/"),n=r.find((function(e){return e.match(/([0-9])+/)}));return n}var le=ue;r("caad"),r("2532");function pe(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=function(r){var n=e[r],a=t[r];Array.isArray(n)?(e[a]=[],n.forEach((function(t){var r=le(t);e[a].includes(r)||e[a].push(r)}))):"string"==typeof n&&(e[a]=le(n))};for(var n in t)r(n)}var de=pe;function fe(e){de(e,{url:"id",species:"speciesIds",films:"filmsIds",homeworld:"homeworldId"})}var he=fe;function me(e){de(e,{url:"id",people:"peopleIds"})}var ve=me;function ge(e){de(e,{url:"id",characters:"peopleIds"})}var be=ge;function we(e){de(e,{url:"id",residents:"peopleIds"})}var ye=we,ke={getEntityIdFromUrl:le,transformEntityUrlRelationsTowardsIdStyle:de,transformPerson:he,transformSpeciesItem:ve,transformFilm:be,transformPlanet:ye},Te=ke,Ee={sendRequestAsync:_e,makeRequest:je,$core:Te},Oe=Ee;function _e(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2?arguments[2]:void 0;if("string"==typeof e){if(!t||"string"!=typeof t)throw new Error("If you provide request namespace, you must also provide a request name to address to.");e=this.makeRequest(e,t,r)}else if("object"!=Object(x["a"])(e))throw new Error("You can provide either request object or namespace and name which belongs to particular request.");return e.fullUrl?F({baseUrl:e.fullUrl})(e):F()(e)}function je(e,t,r){var n=ie[e][t];if(!n)throw new Error("Can't find request with following credentials namespace: ".concat(e,", name: ").concat(t));return n(r)}function Ae(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.isSuccess="ok"==e,this.isCached="cached"==e,this.isError="error"==e,this.content=t}var Se=Ae,qe=r("3835"),Re=r("63ea"),Ie=r.n(Re);function Pe(){this.requests=[],this.check=xe,this.add=Ce}function xe(e){for(var t=0;t<this.requests.length;t++){var r=Object(qe["a"])(this.requests[t],2),n=r[0],a=r[1];if(Ie()(e,n))return a}return!1}function Ce(e,t){this.requests.push([e,t])}var De=Pe;r("c740"),r("a434");function Le(e,t,r){if(!Array.isArray(t))throw new Error("The entities should be collected in array! ".concat(Object(x["a"])(t)," given."));t.forEach((function(t){r(t);var n=e.findIndex((function(e){return e.id==t.id}));-1!==n?e.splice(n,1,t):e.push(t)}))}var Ue=Le,$e=r("eed6"),Be=r.n($e),Fe="ADD_PEOPLE",Me={namespaced:!0,state:{people:[],cache:new De},getters:{getAll:function(e){return e.people},getAllDependentSpeciesIds:function(e){var t=[];return e.people.forEach((function(e){t=[].concat(Object(P["a"])(t),Object(P["a"])(e.speciesIds))})),Be()(t)}},mutations:Object(I["a"])({},Fe,(function(e,t){Ue(e.people,t,(function(e){Oe.$core.transformPerson(e)}))})),actions:{load:function(e){var t=arguments;return Object(R["a"])(regeneratorRuntime.mark((function r(){var n,a,o,c,s,i,u,l,p;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(n=t.length>1&&void 0!==t[1]?t[1]:{},a=n.requestParams,o=void 0===a?{}:a,c=n.url,s=void 0===c?null:c,i=s?Oe.makeRequest("general","get",{url:s}):Oe.makeRequest("people","getMany",o),u=e.state.cache.check(i),u){r.next=17;break}return r.prev=4,r.next=7,Oe.sendRequestAsync(i);case 7:return l=r.sent,p=l.data.results,e.commit(Fe,p),e.state.cache.add(i,l),r.abrupt("return",new Se("ok",l));case 14:return r.prev=14,r.t0=r["catch"](4),r.abrupt("return",new Se("error",r.t0.response));case 17:return r.abrupt("return",new Se("cached",u));case 18:case"end":return r.stop()}}),r,null,[[4,14]])})))()}}},Ne=Me,He=(r("4de4"),r("d81d"),r("3ca3"),r("ddb0"),"ADD_SPECIES"),Je={namespaced:!0,state:{species:[],cache:new De},getters:{getSpeciesByPersonId:function(e){return function(t){var r=e.species.filter((function(e){return e.peopleIds.includes(t)}));return r}}},mutations:Object(I["a"])({},He,(function(e,t){Ue(e.species,t,(function(e){Oe.$core.transformSpeciesItem(e)}))})),actions:{loadByIds:function(e,t){return Object(R["a"])(regeneratorRuntime.mark((function r(){var n,a,o,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(n=[],t.forEach((function(t){var r=Oe.makeRequest("species","getOne",{id:t}),a=e.state.cache.check(r);a||(n.push(Oe.sendRequestAsync(r)),e.state.cache.add(r,!0))})),!n.length){r.next=16;break}return r.prev=3,r.next=6,Promise.all(n);case 6:return a=r.sent,o=a.map((function(e){return e.data})),e.commit(He,o),r.abrupt("return",new Se("ok",o));case 12:return r.prev=12,r.t0=r["catch"](3),c=r.t0.response,r.abrupt("return",new Se("error",c));case 16:return r.abrupt("return",new Se("cached"));case 17:case"end":return r.stop()}}),r,null,[[3,12]])})))()}}},We=Je,Xe="ADD_FILMS",Ye={namespaced:!0,state:{films:[],cache:new De},getters:{getFilmsByPersonId:function(e){return function(t){var r=e.films.filter((function(e){return e.peopleIds.includes(t)}));return r}}},mutations:Object(I["a"])({},Xe,(function(e,t){Ue(e.films,t,(function(e){Oe.$core.transformFilm(e)}))})),actions:{loadByIds:function(e,t){return Object(R["a"])(regeneratorRuntime.mark((function r(){var n,a,o,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(n=[],t.forEach((function(t){var r=Oe.makeRequest("films","getOne",{id:t}),a=e.state.cache.check(r);a||(n.push(Oe.sendRequestAsync(r)),e.state.cache.add(r,!0))})),!n.length){r.next=16;break}return r.prev=3,r.next=6,Promise.all(n);case 6:return a=r.sent,o=a.map((function(e){return e.data})),e.commit(Xe,o),r.abrupt("return",new Se("ok",o));case 12:return r.prev=12,r.t0=r["catch"](3),c=r.t0.response,r.abrupt("return",new Se("error",c));case 16:return r.abrupt("return",new Se("cached"));case 17:case"end":return r.stop()}}),r,null,[[3,12]])})))()}}},Ke=Ye,ze="ADD_PLANETS",Ge={namespaced:!0,state:{planets:[],cache:new De},getters:{getPlanetByPersonId:function(e){return function(t){var r=e.planets.find((function(e){return e.peopleIds.includes(t)}));return r}}},mutations:Object(I["a"])({},ze,(function(e,t){Ue(e.planets,t,(function(e){Oe.$core.transformPlanet(e)}))})),actions:{loadByIds:function(e,t){return Object(R["a"])(regeneratorRuntime.mark((function r(){var n,a,o,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(n=[],t.forEach((function(t){var r=Oe.makeRequest("planets","getOne",{id:t}),a=e.state.cache.check(r);a||(n.push(Oe.sendRequestAsync(r)),e.state.cache.add(r,!0))})),!n.length){r.next=16;break}return r.prev=3,r.next=6,Promise.all(n);case 6:return a=r.sent,o=a.map((function(e){return e.data})),e.commit(ze,o),r.abrupt("return",new Se("ok",o));case 12:return r.prev=12,r.t0=r["catch"](3),c=r.t0.response,r.abrupt("return",new Se("error",c));case 16:return r.abrupt("return",new Se("cached"));case 17:case"end":return r.stop()}}),r,null,[[3,12]])})))()}}},Qe=Ge;n["a"].use(q["a"]);var Ve=new q["a"].Store({modules:{people:Ne,species:We,films:Ke,planets:Qe}}),Ze=Ve;new n["a"]({router:S,store:Ze,render:function(e){return e(O)}}).$mount("#app")},"712f":function(e,t,r){},9667:function(e,t,r){},"966c":function(e,t,r){"use strict";var n=r("fbe3"),a=r.n(n);a.a},"9b86":function(e,t,r){"use strict";function n(e,t,r){var n;return function(){var a=this,o=arguments,c=function(){n=null,r||e.apply(a,o)},s=r&&!n;clearTimeout(n),n=setTimeout(c,t),s&&e.apply(a,o)}}t["a"]=n},b31b:function(e,t,r){"use strict";var n=r("9667"),a=r.n(n);a.a},d2de:function(e,t,r){"use strict";var n=r("712f"),a=r.n(n);a.a},fbe3:function(e,t,r){}});
//# sourceMappingURL=index.c7b1a00b.js.map