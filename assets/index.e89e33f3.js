const d=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}};d();const a="modulepreload",s={},m="/",l=function(n,i){return!i||i.length===0?n():Promise.all(i.map(o=>{if(o=`${m}${o}`,o in s)return;s[o]=!0;const e=o.endsWith(".css"),t=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${t}`))return;const r=document.createElement("link");if(r.rel=e?"stylesheet":a,e||(r.as="script",r.crossOrigin=""),r.href=o,document.head.appendChild(r),e)return new Promise((u,f)=>{r.addEventListener("load",u),r.addEventListener("error",f)})})).then(()=>n())};window.global=window;l(()=>import("./polyfills.26f7b7e5.js"),[]).then(()=>l(()=>import("./app-bootstrap.ce67d882.js"),["assets/app-bootstrap.ce67d882.js","assets/app-bootstrap.5b324342.css"]));
