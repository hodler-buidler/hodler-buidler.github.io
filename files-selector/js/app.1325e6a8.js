(function(e){function t(t){for(var i,l,s=t[0],a=t[1],o=t[2],d=0,f=[];d<s.length;d++)l=s[d],Object.prototype.hasOwnProperty.call(c,l)&&c[l]&&f.push(c[l][0]),c[l]=0;for(i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i]);u&&u(t);while(f.length)f.shift()();return r.push.apply(r,o||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],i=!0,s=1;s<n.length;s++){var a=n[s];0!==c[a]&&(i=!1)}i&&(r.splice(t--,1),e=l(l.s=n[0]))}return e}var i={},c={app:0},r=[];function l(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=i,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)l.d(n,i,function(t){return e[t]}.bind(null,i));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/files-selector/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],a=s.push.bind(s);s.push=t,s=s.slice();for(var o=0;o<s.length;o++)t(s[o]);var u=a;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0b2f":function(e,t,n){},3771:function(e,t,n){"use strict";n("5d2c")},3920:function(e,t,n){},4678:function(e,t,n){var i={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function c(e){var t=r(e);return n(t)}function r(e){if(!n.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}c.keys=function(){return Object.keys(i)},c.resolve=r,e.exports=c,c.id="4678"},4719:function(e,t,n){},"49d4":function(e,t,n){},"5d2c":function(e,t,n){},"678b":function(e,t,n){"use strict";n("9ca9")},"6bff":function(e,t,n){"use strict";n("78e5")},7890:function(e,t,n){},"78e5":function(e,t,n){},"81f9":function(e,t,n){"use strict";n("3920")},"9ca9":function(e,t,n){},"9dd9":function(e,t,n){"use strict";n("7890")},b734:function(e,t,n){"use strict";n("4719")},c860:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);var i={};n.r(i),n.d(i,"fetchFilesStructure",(function(){return Ye}));n("e260"),n("e6cf"),n("cca6"),n("a79d");var c="__APPLICATION_STATE__",r="en",l="en",s={loading:"loading","select-files":"select {amount} files","files-selected":"files selected","files-structure":"files structure","empty-folder-message":"This folder is empty","files-fetch-error-title":"Network error. Could't fetch files structure.","suggest-page-reload":"Please try reload the page.",root:"root"},a={en:s},o=n("47e2"),u=Object(o["a"])({locale:r,fallbackLocale:l,messages:a}),d=u.global.t,f=n("5efb"),b=n("ed3b"),j=n("8592"),p={install:function(e){e.use(f["a"]),e.use(b["a"]),e.use(j["a"])}},m=p,v=n("7a23"),O=["tabindex"];function h(e,t,n,i,c,r){return Object(v["D"])(),Object(v["l"])("div",{ref:"root",class:Object(v["x"])(["btn",[e.modeClassName,e.themeClassName,e.size,{disabled:e.disabled}]]),style:Object(v["y"])(e.styleVariables),tabindex:e.disabled?-1:0,onClick:t[0]||(t[0]=function(){return e.onClick&&e.onClick.apply(e,arguments)}),onKeyup:t[1]||(t[1]=Object(v["U"])((function(){return e.onClick&&e.onClick.apply(e,arguments)}),["enter"]))},[Object(v["L"])(e.$slots,"default",{},void 0,!0)],46,O)}var y,g,S,k=n("5530");n("d3b7"),n("159b"),n("b64b");(function(e){e["Default"]="default"})(y||(y={})),function(e){e["Default"]="default"}(g||(g={})),function(e){e["Small"]="small",e["Medium"]="medium",e["Large"]="large"}(S||(S={}));var F=Object(v["p"])({name:"UiButton",props:{mode:{type:String,default:y.Default},theme:{type:String,default:g.Default},size:{type:String,default:S.Medium},customization:{type:Object,default:function(){return{}}},disabled:{type:Boolean,default:!1}},emits:["click"],setup:function(e,t){var n=t.emit,i=Object(v["I"])(null),c=Object(v["h"])((function(){var t={};return Object.keys(e.customization).forEach((function(n){t["--btn-".concat(n)]=e.customization[n]})),Object(k["a"])({},t)})),r=Object(v["h"])((function(){return"mode-".concat(e.mode,"-btn")})),l=Object(v["h"])((function(){return"theme-".concat(e.theme)}));function s(){var t=i.value;t.blur(),e.disabled||n("click")}return{root:i,styleVariables:c,modeClassName:r,themeClassName:l,onClick:s}}}),I=(n("6bff"),n("6b0d")),C=n.n(I);const M=C()(F,[["render",h],["__scopeId","data-v-7040b150"]]);var w=M,_={class:"empty-folder-content"};function z(e,t,n,i,c,r){var l=Object(v["M"])("UiItem");return Object(v["D"])(),Object(v["l"])("div",{ref:"root",class:Object(v["x"])(["files-structure",[e.modeClassName,e.themeClassName,e.size]]),style:Object(v["y"])(e.styleVariables)},[e.isEmpty?Object(v["L"])(e.$slots,"emptyFolderContent",{key:0},(function(){return[Object(v["m"])("div",_,Object(v["N"])(e.$t("empty-folder-message")),1)]}),!0):(Object(v["D"])(!0),Object(v["l"])(v["b"],{key:1},Object(v["K"])(e.filesStructureItems,(function(t){return Object(v["D"])(),Object(v["j"])(l,{key:t.id,item:t,size:e.size,mode:e.mode,theme:e.theme,disabled:e.isItemDisabled(t),inactive:e.isItemInactive(t),followable:e.isItemFollowable(t),selected:e.isItemSelected(t),class:"files-structure__item js-item",onClick:function(){return e.onItemClick(t)},onFocus:e.onFocus,onBlur:e.onBlur},null,8,["item","size","mode","theme","disabled","inactive","followable","selected","onClick","onFocus","onBlur"])})),128))],6)}var x,D,B,N=n("2909");n("99af"),n("4de4"),n("caad"),n("2532"),n("a630"),n("3ca3"),n("7db0");function L(e,t){if(!e.folders.length&&!e.files.length)return null;var n=e.files.find((function(e){return e.id===t}))||null;if(n)return Object(k["a"])({},n);for(var i=0;i<e.folders.length;i++)if(n=L(e.folders[i],t),n)return n;return null}function A(e,t){if("id"in e&&e.id===t)return Object(k["a"])({},e);if(!e.folders.length)return null;var n=e.folders.find((function(e){return e.id===t}))||null;if(n)return Object(k["a"])({},n);for(var i=0;i<e.folders.length;i++)if(n=A(e.folders[i],t),n)return n;return null}function U(e){return!("files"in e)}function E(e){return"files"in e&&"parentFolderId"in e}function R(e,t){var n="".concat(t,"ElementSibling"),i=e[n];return i?"0"===i.getAttribute("tabindex")?i:R(i,t):null}(function(e){e["Default"]="default"})(x||(x={})),function(e){e["Default"]="default"}(D||(D={})),function(e){e["Small"]="small",e["Medium"]="medium",e["Large"]="large"}(B||(B={}));n("b0c0");var P=["tabindex"],H={class:"visual-presentation"},T={class:"visual-presentation__icon"},V={class:"item-name"},$={class:"controls"},q={key:0,class:"controls__item"},W={class:"selected-icon"},Q={key:1,class:"follow-icon controls__item"};function K(e,t,n,i,c,r){var l=Object(v["M"])("UiItemIcon"),s=Object(v["M"])("CheckOutlined"),a=Object(v["M"])("RightOutlined");return Object(v["D"])(),Object(v["l"])("div",{ref:"root",tabindex:e.isInteractive?0:-1,class:Object(v["x"])(["item",[{active:e.active,disabled:e.disabled,inactive:e.inactive},e.modeClassName,e.themeClassName,e.size]]),onClick:t[0]||(t[0]=function(){return e.onClick&&e.onClick.apply(e,arguments)}),onKeyup:[t[1]||(t[1]=Object(v["U"])((function(){return e.onClick&&e.onClick.apply(e,arguments)}),["enter"])),t[2]||(t[2]=Object(v["U"])((function(){return e.onClick&&e.onClick.apply(e,arguments)}),["space"])),t[3]||(t[3]=function(){return e.onRightArrowClick&&e.onRightArrowClick.apply(e,arguments)})]},[Object(v["m"])("div",H,[Object(v["m"])("div",T,[Object(v["o"])(l,{item:e.item,size:"small",mode:e.mode,theme:e.theme},null,8,["item","mode","theme"])]),Object(v["m"])("div",V,Object(v["N"])(e.filters.shortenFileName(e.item.name)),1)]),Object(v["m"])("div",$,[e.selected?(Object(v["D"])(),Object(v["l"])("div",q,[Object(v["m"])("div",W,[Object(v["o"])(s)])])):Object(v["k"])("",!0),e.followable&&e.isInteractive?(Object(v["D"])(),Object(v["l"])("div",Q,[Object(v["o"])(a)])):Object(v["k"])("",!0)])],42,P)}var Y=n("31d7"),G=n("434d");n("dca8"),n("d81d"),n("ac1f"),n("1276"),n("a15b"),n("fb6a");function J(e){return e.charAt(0).toUpperCase()+e.slice(1)}var X=J;function Z(e){var t=e.split(" ").map(X);return t.join(" ")}var ee=Z;function te(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"...";if(e.length<=t+n)return e;var c=e.slice(0,t),r=e.slice(-n);return"".concat(c).concat(i).concat(r)}var ne=te;function ie(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:20,c=e.split("."),r=c.pop()||"",l=c.join(".");if(e.length<i)return e;var s=ne(l,t,n),a=ne(r,2,3);return"".concat(s,".").concat(a)}var ce=ie,re=Object.freeze({shortenStr:ne,shortenFileName:ce,capitalizeFirst:X,capitalize:ee}),le=re;function se(e,t,n,i,c,r){var l=Object(v["M"])("FileImageOutlined"),s=Object(v["M"])("FileOutlined"),a=Object(v["M"])("FolderOutlined");return Object(v["D"])(),Object(v["l"])("div",{class:Object(v["x"])(["icon",[e.modeClassName,e.themeClassName,e.size]])},[e.isFile(e.item)?(Object(v["D"])(),Object(v["l"])(v["b"],{key:0},[e.DISPLAYABLE_IMAGES_MIME_TYPES.includes(e.item.mimeType)?(Object(v["D"])(),Object(v["l"])(v["b"],{key:0},[Object(v["o"])(l),Object(v["m"])("div",{class:"file-image",style:Object(v["y"])({background:"url(".concat(e.item.url,")"),backgroundSize:"cover"})},null,4)],64)):(Object(v["D"])(),Object(v["j"])(s,{key:1}))],64)):Object(v["k"])("",!0),e.isFolder(e.item)?(Object(v["D"])(),Object(v["j"])(a,{key:1})):Object(v["k"])("",!0)],2)}var ae=n("1a7f"),oe=n("8f0d"),ue=n("5633"),de=["image/png","image/jpeg"],fe=["image/png","image/jpeg","application/pdf"],be=Object(v["p"])({name:"UiItemIcon",components:{FileOutlined:ae["a"],FileImageOutlined:oe["a"],FolderOutlined:ue["a"]},props:{item:{type:Object,required:!0},mode:{type:String,default:x.Default},theme:{type:String,default:D.Default},size:{type:String,default:B.Medium}},setup:function(e){var t=Object(v["h"])((function(){return"mode-".concat(e.mode)})),n=Object(v["h"])((function(){return"theme-".concat(e.theme)}));return{DISPLAYABLE_IMAGES_MIME_TYPES:de,modeClassName:t,themeClassName:n,isFile:U,isFolder:E}}});n("678b");const je=C()(be,[["render",se],["__scopeId","data-v-5f5fe124"]]);var pe=je,me=Object(v["p"])({name:"UiItem",components:{UiItemIcon:pe,RightOutlined:Y["a"],CheckOutlined:G["a"]},props:{item:{type:Object,required:!0},mode:{type:String,default:x.Default},theme:{type:String,default:D.Default},size:{type:String,default:B.Medium},active:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},inactive:{type:Boolean,default:!1},followable:{type:Boolean,default:!1},selected:{type:Boolean,default:!1}},emits:["click"],setup:function(e,t){var n=t.emit,i=Object(v["I"])(null),c=Object(v["h"])((function(){return"mode-".concat(e.mode)})),r=Object(v["h"])((function(){return"theme-".concat(e.theme)})),l=Object(v["h"])((function(){return!(e.disabled||e.inactive)}));function s(){l.value&&n("click")}function a(t){"ArrowRight"===t.key&&e.followable&&s()}return{root:i,filters:le,modeClassName:c,themeClassName:r,isInteractive:l,onClick:s,onRightArrowClick:a}}});n("81f9");const ve=C()(me,[["render",K],["__scopeId","data-v-07e66934"]]);var Oe=ve,he=Object(v["p"])({name:"UiFilesStructure",components:{UiItem:Oe},props:{filesStructure:{type:Object,required:!0},currentFolderId:{type:String,default:""},selectedItemsIds:{type:Array,default:function(){return[]}},mode:{type:String,default:x.Default},theme:{type:String,default:D.Default},size:{type:String,default:B.Medium},allowOpenEmptyFolder:{type:Boolean,default:!1},sortItems:{type:Function,default:function(e){return e}},shouldHideFolder:{type:Function,default:function(){return!1}},shouldHideFile:{type:Function,default:function(){return!1}},canInteractWithItem:{type:Function,default:function(){return!1}},itemsMargin:{type:String,default:"0px"}},emits:["update:currentFolderId","click-folder","click-file"],setup:function(e,t){var n=t.emit,i=Object(v["I"])(null),c=Object(v["I"])(e.currentFolderId);Object(v["Q"])((function(){return e.currentFolderId}),(function(){c.value!==e.currentFolderId&&(c.value=e.currentFolderId)})),Object(v["R"])((function(){n("update:currentFolderId",c.value)}));var r=Object(v["h"])((function(){if(c.value){var t=A(e.filesStructure,c.value);if(t)return t}return e.filesStructure})),l=Object(v["h"])((function(){return e.sortItems([].concat(Object(N["a"])(r.value.folders.filter((function(t){return!e.shouldHideFolder(t)}))),Object(N["a"])(r.value.files.filter((function(t){return!e.shouldHideFile(t)})))))})),s=Object(v["h"])((function(){return a(r.value)})),a=function(t){var n=t.files.filter((function(t){return!e.shouldHideFile(t)}));return!t.folders.length&&!n.length};function o(e){return U(e)?u(e):d(e)}var u=function(){return!1},d=function(t){return!e.canInteractWithItem(t)&&!O(t)};function f(e){return U(e)?b(e):j(e)}var b=function(t){return!e.canInteractWithItem(t)},j=function(){return!1};function p(e){return U(e)?m(e):O(e)}var m=function(){return!1},O=function(t){return e.allowOpenEmptyFolder||!a(t)};function h(t){return e.selectedItemsIds.includes(t.id)}function y(e){U(e)?g(e):S(e)}var g=function(e){n("click-file",e)},S=function(e){O(e)&&(c.value=e.id),n("click-folder",e)},k=Object(v["h"])((function(){return"mode-".concat(e.mode)})),F=Object(v["h"])((function(){return"theme-".concat(e.theme)})),I=Object(v["h"])((function(){return{"--items-margin":e.itemsMargin}})),C=Object(v["I"])(null);function M(){var e=i.value,t=Array.from(e.querySelectorAll('.js-item[tabindex="0"]'));t[0]&&t[0].focus()}function w(e){if(C.value){var t=R(C.value,e);t?t.focus():M()}else M()}function _(e){var t=e.target;t&&t.classList.contains("js-item")&&(C.value=t)}function z(e){var t=e.target;t&&t===C.value&&(C.value=null)}function x(e){"ArrowUp"===e.key&&w("previous"),"ArrowDown"===e.key&&w("next")}return Object(v["A"])((function(){M()})),Object(v["A"])((function(){document.addEventListener("keydown",x)})),Object(v["B"])((function(){document.removeEventListener("keydown",x)})),Object(v["Q"])((function(){return c.value}),(function(){Object(v["w"])((function(){return M()}))})),{root:i,onFocus:_,onBlur:z,modeClassName:k,themeClassName:F,filesStructureItems:l,isEmpty:s,styleVariables:I,isItemDisabled:o,isItemInactive:f,isItemFollowable:p,isItemSelected:h,onItemClick:y}}});n("3771");const ye=C()(he,[["render",z],["__scopeId","data-v-de7fd07c"]]);var ge=ye,Se=function(e){return Object(v["G"])("data-v-b2d65e0a"),e=e(),Object(v["E"])(),e},ke=Se((function(){return Object(v["m"])("div",null,null,-1)})),Fe={class:"ui-modal-content"};function Ie(e,t,n,i,c,r){var l=Object(v["M"])("CloseOutlined"),s=Object(v["M"])("UiButton"),a=Object(v["M"])("perfect-scrollbar"),o=Object(v["M"])("a-spin"),u=Object(v["M"])("a-modal");return Object(v["D"])(),Object(v["j"])(u,{visible:e.isVisible,"onUpdate:visible":t[1]||(t[1]=function(t){return e.isVisible=t}),centered:e.centered,mask:e.mask,"destroy-on-close":e.destroyOnClose,"body-style":{padding:"".concat(e.verticalOffset," ").concat(e.horizontalOffset),height:e.bodyHeight},class:"ui-modal",style:Object(v["y"])(e.styleVariables)},{closeIcon:Object(v["S"])((function(){return[Object(v["o"])(s,{onClick:t[0]||(t[0]=function(t){return e.$emit("close-icon-click")})},{default:Object(v["S"])((function(){return[Object(v["o"])(l)]})),_:1})]})),title:Object(v["S"])((function(){return[Object(v["L"])(e.$slots,"header",{closeModal:e.closeModal},(function(){return[ke]}),!0)]})),footer:Object(v["S"])((function(){return[Object(v["L"])(e.$slots,"footer",{closeModal:e.closeModal},void 0,!0)]})),default:Object(v["S"])((function(){return[Object(v["m"])("div",Fe,[Object(v["o"])(o,{spinning:e.loading,size:"large",tip:e.loadingText},{default:Object(v["S"])((function(){return[Object(v["o"])(a,{class:"scroll-container"},{default:Object(v["S"])((function(){return[Object(v["L"])(e.$slots,"default",{closeModal:e.closeModal},void 0,!0)]})),_:3})]})),_:3},8,["spinning","tip"])])]})),_:3},8,["visible","centered","mask","destroy-on-close","body-style","style"])}var Ce=n("a878"),Me=Object(v["p"])({name:"UiModal",components:{CloseOutlined:Ce["a"]},props:{visible:{type:Boolean,required:!0},centered:{type:Boolean,default:!0},loading:{type:Boolean,default:!1},loadingText:{type:String,default:"".concat(le.capitalize(d("loading")),"...")},mask:{type:Boolean,default:!1},destroyOnClose:{type:Boolean,default:!1},hideDividerHeader:{type:Boolean,default:!1},hideDividerFooter:{type:Boolean,default:!1},width:{type:String,default:"520px"},bodyHeight:{type:String,default:"200px"},borderRadius:{type:String,default:"16px"},verticalOffset:{type:String,default:"8px"},horizontalOffset:{type:String,default:"16px"},headerPadding:{type:String,default:"8px 16px"},footerPadding:{type:String,default:"16px"}},emits:["closed","opened","close-icon-click","update:visible"],setup:function(e,t){var n=t.emit,i=t.slots,c=Object(v["I"])(e.visible);function r(){c.value=!1}Object(v["Q"])((function(){return e.visible}),(function(){c.value!==e.visible&&(c.value=e.visible)})),Object(v["R"])((function(){n("update:visible",c.value),c.value?n("opened"):n("closed")}));var l=Object(v["h"])((function(){return{"--border-radius":e.borderRadius,"--width":e.width,"--header-padding":e.headerPadding,"--footer-padding":e.footerPadding,"--footer-display-mode":i.footer?"block":"none","--divider-header":e.hideDividerHeader?"transparent":"#f0f0f0","--divider-footer":e.hideDividerFooter?"transparent":"#f0f0f0"}}));return{isVisible:c,closeModal:r,styleVariables:l}}});n("9dd9");const we=C()(Me,[["render",Ie],["__scopeId","data-v-b2d65e0a"]]);var _e,ze=we,xe={install:function(e){e.component("UiModal",ze),e.component("UiButton",w),e.component("UiFilesStructure",ge)}},De=xe;n("a434");function Be(e,t){return function(n){var i=e(n);return nt.forEach((function(e){return e(Object(k["a"])(Object(k["a"])({},t),{},{state:t.state||tt}))})),i}}function Ne(e){return function(t){return t?"".concat(e,"/").concat(t):e}}(function(e){e["Success"]="success",e["Info"]="info",e["Warning"]="warning",e["Error"]="error"})(_e||(_e={}));var Le=Object(v["O"])(Object(v["H"])({messages:[],isFilesStructureModalOpened:!1})),Ae=Ne("app"),Ue=Be((function(e){Le.messages.value.push(Object(k["a"])({type:_e.Info,title:"",description:"",placement:"topRight"},e))}),{name:Ae("addMessage")}),Ee=Be((function(){Le.messages.value.length&&Le.messages.value.splice(0,1)}),{name:Ae("popMessagesStack")}),Re=Be((function(e){Ue(Object(k["a"])({type:_e.Error},e))}),{name:Ae("printError")}),Pe=(Be((function(e){Ue(Object(k["a"])({type:_e.Warning},e))}),{name:Ae("printWarning")}),Be((function(e){Ue(Object(k["a"])({type:_e.Success},e))}),{name:Ae("printSuccess")}),Be((function(e){Ue(Object(k["a"])({type:_e.Info},e))}),{name:Ae("printInfo")}),Be((function(e){Le.isFilesStructureModalOpened.value=e}),{name:Ae("setIsFilesStructureModalOpened")})),He=Be((function(){return Pe(!0)}),{name:Ae("openFilesStructureModal")}),Te=Be((function(){return Pe(!1)}),{name:Ae("closeFilesStructureModal")}),Ve=n("1da1"),$e=(n("96cf"),n("bc3a")),qe=n.n($e),We="https://cors.nikitosgolubev.workers.dev/corsproxy/?apiurl=",Qe="".concat(We,"https://api-dev.reo.so/api/");function Ke(){return qe.a.create({baseURL:Qe})}function Ye(){return Ge.apply(this,arguments)}function Ge(){return Ge=Object(Ve["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Ke().get("/folderStructure");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)}))),Ge.apply(this,arguments)}var Je=Object(v["O"])(Object(v["H"])({filesStructure:{folders:[],files:[]},isFilesStructureLoading:!0})),Xe=Ne("filesStructure"),Ze=(Be((function(e){Je.filesStructure.value=Object(k["a"])({},e)}),{name:Xe("setFilesStructure")}),Be((function(e){Je.isFilesStructureLoading.value=e}),{name:Xe("setFilesStructureLoading")})),et=Be(Object(Ve["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,Ze(!0),e.next=4,i.fetchFilesStructure();case 4:Je.filesStructure.value=e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),Re({title:d("files-fetch-error-title"),description:d("suggest-page-reload")});case 10:return e.prev=10,Ze(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])}))),{name:Xe("loadFilesStructure")}),tt={filesStructure:Je,app:Le},nt=[];function it(){window[c]=tt}function ct(e){return e(tt)}n("202f"),n("a72e");var rt={class:"app"},lt={class:"content"};function st(e,t,n,i,c,r){var l=Object(v["M"])("a-button"),s=Object(v["M"])("SelectedFilesDisplay"),a=Object(v["M"])("perfect-scrollbar"),o=Object(v["M"])("FilesStructureModal");return Object(v["D"])(),Object(v["l"])("div",rt,[Object(v["m"])("div",lt,[Object(v["m"])("div",null,[Object(v["o"])(l,{type:"primary",loading:e.isFilesStructureLoading,onClick:e.openFilesStructureModal},{default:Object(v["S"])((function(){return[Object(v["n"])(Object(v["N"])(e.filters.capitalize(e.$t("select-files"))),1)]})),_:1},8,["loading","onClick"])]),Object(v["o"])(a,{class:"selected-display content__selected-display"},{default:Object(v["S"])((function(){return[e.selectedFilesIds.length?(Object(v["D"])(),Object(v["j"])(s,{key:0,"files-structure":e.filesStructure,"selected-files-ids":e.selectedFilesIds},null,8,["files-structure","selected-files-ids"])):Object(v["k"])("",!0)]})),_:1})]),Object(v["o"])(o,{selectedFilesIds:e.selectedFilesIds,"onUpdate:selectedFilesIds":t[0]||(t[0]=function(t){return e.selectedFilesIds=t}),visible:e.isFilesStructureModalOpened,"files-structure":e.filesStructure,"root-name":e.filters.capitalize(e.$t("files-structure")),loading:e.isFilesStructureLoading,"should-hide-file":e.shouldHideFile,onClosed:e.closeFilesStructureModal},null,8,["selectedFilesIds","visible","files-structure","root-name","loading","should-hide-file","onClosed"])])}var at={class:"wrapper"},ot={class:"title wrapper__title"},ut={class:"files-container"};function dt(e,t,n,i,c,r){return Object(v["D"])(),Object(v["l"])("div",at,[Object(v["m"])("div",ot,Object(v["N"])(e.filters.capitalizeFirst(e.$t("files-selected"))),1),Object(v["m"])("div",ut,[(Object(v["D"])(!0),Object(v["l"])(v["b"],null,Object(v["K"])(e.files,(function(t){return Object(v["D"])(),Object(v["l"])("div",{key:t.id,class:"file-item files-container__item"},Object(v["N"])(e.filters.shortenFileName(t.name)),1)})),128))])])}var ft=Object(v["p"])({name:"SelectedFilesDisplay",props:{filesStructure:{type:Object,required:!0},selectedFilesIds:{type:Array,required:!0}},setup:function(e){var t=Object(v["h"])((function(){return e.selectedFilesIds.map((function(t){return L(e.filesStructure,t)})).filter((function(e){return!!e}))}));return{files:t,filters:le}}});n("b734");const bt=C()(ft,[["render",dt],["__scopeId","data-v-f39b3f32"]]);var jt=bt,pt={class:"header"},mt={class:"header__title"};function vt(e,t,n,i,c,r){var l=Object(v["M"])("ArrowLeftOutlined"),s=Object(v["M"])("UiButton"),a=Object(v["M"])("UiFilesStructure"),o=Object(v["M"])("a-button"),u=Object(v["M"])("UiModal");return Object(v["D"])(),Object(v["j"])(u,Object(v["v"])({visible:e.isVisible,"onUpdate:visible":t[1]||(t[1]=function(t){return e.isVisible=t})},e.$attrs,{width:"480px","body-height":"262px","vertical-offset":"0","horizontal-offset":"8px","header-padding":"8px","footer-padding":"8px 16px 16px 16px","hide-divider-header":"","hide-divider-footer":"",onOpened:t[2]||(t[2]=function(t){return e.$emit("opened")}),onClosed:e.onClosed,onCloseIconClick:e.clearItemsSelection}),{header:Object(v["S"])((function(){return[Object(v["m"])("div",pt,[e.isRoot?Object(v["k"])("",!0):(Object(v["D"])(),Object(v["j"])(s,{key:0,onClick:e.goBack},{default:Object(v["S"])((function(){return[Object(v["o"])(l)]})),_:1},8,["onClick"])),Object(v["m"])("div",mt,Object(v["N"])(e.modalTitle),1)])]})),footer:Object(v["S"])((function(){return[Object(v["o"])(o,{type:"primary",disabled:e.isSelectButtonDisabled,onClick:e.saveSelectedItems},{default:Object(v["S"])((function(){return[Object(v["n"])(Object(v["N"])(e.selectedButtonContent),1)]})),_:1},8,["disabled","onClick"])]})),default:Object(v["S"])((function(){return[Object(v["m"])("div",null,[Object(v["o"])(a,{currentFolderId:e.currentFolderId,"onUpdate:currentFolderId":t[0]||(t[0]=function(t){return e.currentFolderId=t}),"files-structure":e.filesStructure,"selected-items-ids":e.internalSelectedFilesIds,"can-interact-with-item":e.canInteractWithItem,"should-hide-file":e.shouldHideFile,onClickFile:e.onFileClick},null,8,["currentFolderId","files-structure","selected-items-ids","can-interact-with-item","should-hide-file","onClickFile"])])]})),_:1},16,["visible","onClosed","onCloseIconClick"])}var Ot=n("1cd4"),ht=n("63ea"),yt=n.n(ht),gt=Object(v["p"])({name:"FilesStructureModal",components:{ArrowLeftOutlined:Ot["a"]},props:{visible:{type:Boolean,required:!0},filesStructure:{type:Object,required:!0},rootName:{type:String,default:le.capitalizeFirst(d("root"))},selectedFilesIds:{type:Array,default:function(){return[]}},allowFilesSelection:{type:Boolean,default:!0},canSelectFile:{type:Function,default:function(){return!0}},shouldHideFile:{type:Function,default:function(){return!1}}},emits:["closed","opened","update:visible","update:selectedFilesIds"],setup:function(e,t){var n=t.emit,i=Object(v["I"])(""),c=Object(v["h"])((function(){if(i.value){var t=A(e.filesStructure,i.value);if(t)return t}return e.filesStructure})),r=Object(v["h"])((function(){return!i.value})),l=Object(v["h"])((function(){return E(c.value)?c.value.name.length>20?le.shortenStr(c.value.name,5,3):c.value.name:e.rootName}));function s(){E(c.value)&&(i.value=c.value.parentFolderId||"")}var a=Object(v["I"])(Object(N["a"])(e.selectedFilesIds));function o(){n("update:selectedFilesIds",Object(N["a"])(a.value)),S()}function u(){a.value=[],n("update:selectedFilesIds",[])}function f(t){return e.allowFilesSelection&&e.canSelectFile(t)}function b(e){return!!U(e)&&f(e)}function j(e){f(e)&&(p(e)?O(e):m(e))}function p(e){return a.value.includes(e.id)}function m(e){a.value.push(e.id)}function O(e){var t=a.value.indexOf(e.id);t>-1&&a.value.splice(t,1)}Object(v["Q"])((function(){return e.selectedFilesIds}),(function(){a.value.length===e.selectedFilesIds.length&&yt()(a.value,e.selectedFilesIds)||(a.value=Object(N["a"])(e.selectedFilesIds))}),{deep:!0});var h=Object(v["h"])((function(){return!a.value.length})),y=Object(v["h"])((function(){var e=a.value.length||"";return le.capitalize(d("select-files",{amount:e}))})),g=Object(v["I"])(e.visible);function S(){g.value=!1}function k(){a.value=Object(N["a"])(e.selectedFilesIds),n("closed")}function F(e){"ArrowLeft"!==e.key||r.value||s()}return Object(v["Q"])((function(){return e.visible}),(function(){g.value!==e.visible&&(g.value=e.visible)})),Object(v["R"])((function(){return n("update:visible",g.value)})),Object(v["A"])((function(){document.addEventListener("keydown",F)})),Object(v["B"])((function(){document.removeEventListener("keydown",F)})),{isVisible:g,closeModal:S,currentFolderId:i,modalTitle:l,isRoot:r,goBack:s,canInteractWithItem:b,onFileClick:j,internalSelectedFilesIds:a,isSelectButtonDisabled:h,selectedButtonContent:y,clearItemsSelection:u,saveSelectedItems:o,onClosed:k}}});n("d358");const St=C()(gt,[["render",vt],["__scopeId","data-v-102741ee"]]);var kt=St,Ft=(n("a4d3"),n("e01a"),n("56cd"));function It(){var e=ct((function(e){return e.app})),t=e.messages;function n(e){Ft["a"][e.type]({message:e.title,description:e.description,placement:e.placement})}Object(v["Q"])((function(){return t}),(function(e,t){!e.value.length||t&&e.value.length<=t.value.length||(n(e.value[0]),Object(v["w"])((function(){Ee()})))}),{deep:!0,immediate:!0})}var Ct=It,Mt=(n("c860"),Object(v["p"])({name:"App",components:{SelectedFilesDisplay:jt,FilesStructureModal:kt},setup:function(){var e=ct((function(e){return e.filesStructure})),t=e.isFilesStructureLoading,n=e.filesStructure,i=ct((function(e){return e.app})),c=i.isFilesStructureModalOpened,r=Object(v["I"])([]);function l(e){return!fe.includes(e.mimeType)}return et(),Ct(),{isFilesStructureLoading:t,isFilesStructureModalOpened:c,filesStructure:n,openFilesStructureModal:He,closeFilesStructureModal:Te,shouldHideFile:l,selectedFilesIds:r,filters:le}}}));n("e227");const wt=C()(Mt,[["render",st],["__scopeId","data-v-38bac7f1"]]);var _t=wt,zt=n("0192").default,xt=Object(v["i"])(_t);it(),xt.use(u),xt.use(zt),xt.use(m),xt.use(De),xt.mount("#app")},d358:function(e,t,n){"use strict";n("49d4")},e227:function(e,t,n){"use strict";n("0b2f")}});
//# sourceMappingURL=app.1325e6a8.js.map