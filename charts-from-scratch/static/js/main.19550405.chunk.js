(this["webpackJsonpmathspace-test-task"]=this["webpackJsonpmathspace-test-task"]||[]).push([[0],{22:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var o,r,i=n(1),a=n.n(i),c=n(13),l=n.n(c),d=n(4),s=n(3),u=n(6),v=n(2),x=(n(21),n(22),n(5)),b=n(0),h=function(e){var t=e.direction,n=e.diagram,o=e.barWidthPx,r=e.notableStepSize,i=e.hideLevelLine,a=e.captionFontSizePx,c=e.hideNoNotableCaptions,l=e.color,d=e.levelLineColor,s=e.textColor,u="x"===t?n.x:n.y,v="x"===t?n.totalStepsX:n.totalStepsY,x=Array.from(Array(v).keys()),h="x"===t?n.stepX:n.stepY,f="x"===t?function(e){var t=(e+1)*n.stepX,r=n.getX(t);return{bar:{x1:r,x2:r,y1:n.getY(0),y2:n.getY(0)+o},levelLine:{x1:r,x2:r,y1:n.getY(n.y),y2:n.getY(0)},text:{x:r,y:n.getY(0)+o+a,anchor:"middle"}}}:function(e){var t=(e+1)*n.stepY,r=n.getY(t);return{bar:{x1:n.getX(0)-o,x2:n.getX(0),y1:r,y2:r},levelLine:{x1:n.getX(0),x2:n.getX(n.x),y1:r,y2:r},text:{x:n.getX(0)-o-4,y:n.getY(t,a/3),anchor:"end"}}},j=x.map((function(e,n){var o=f(n),v=h*(n+1)*(u/Math.abs(u)),x=v%r===0;return Object(b.jsxs)("g",{children:[Object(b.jsx)("line",{x1:o.bar.x1,x2:o.bar.x2,y1:o.bar.y1,y2:o.bar.y2,stroke:l}),x&&!i&&Object(b.jsx)("line",{x1:o.levelLine.x1,x2:o.levelLine.x2,y1:o.levelLine.y1,y2:o.levelLine.y2,stroke:d}),(x||!c)&&Object(b.jsx)("text",{x:o.text.x,y:o.text.y,textAnchor:o.text.anchor,fill:s,style:{fontSize:"".concat(a,"px")},children:v})]},"".concat(t,"-step-element__").concat(n))}));return Object(b.jsx)(b.Fragment,{children:j})};var f,j=x.a.svg(o||(o=Object(d.a)(["\n  user-select: none;\n  ","\n"])),(function(e){var t=e.widthPx,n=e.heightPx;return"\n    width: ".concat(t,"px;\n    height: ").concat(n,"px;\n  ")})),g=x.a.g(r||(r=Object(d.a)(["\n  stroke-dasharray: 0;\n\n  ","\n"])),(function(e){var t=e.color,n=e.thickness;return"\n    stroke: ".concat(t,";\n    stroke-width: ").concat(n,";\n  ")})),O=function(e){var t=e.widthPx,n=e.heightPx,o=e.render,r=e.x,i=void 0===r?10:r,a=e.y,c=void 0===a?10:a,l=e.hideXNotation,d=void 0!==l&&l,s=e.hideYNotation,u=void 0!==s&&s,x=e.stepX,f=void 0===x?1:x,O=e.stepY,p=void 0===O?1:O,y=e.notableXStepSize,k=void 0===y?1:y,C=e.notableYStepSize,L=void 0===C?1:C,m=e.levelLineXColor,P=void 0===m?"#cccccc":m,S=e.levelLineYColor,B=void 0===S?"#cccccc":S,Y=e.hideXLevelLine,X=void 0!==Y&&Y,w=e.hideYLevelLine,N=void 0!==w&&w,z=e.xNotationOffsetPx,M=void 0===z?36:z,D=e.yNotationOffsetPx,F=void 0===D?36:D,T=e.xNotationBarWidthPx,E=void 0===T?12:T,A=e.yNotationBarWidthPx,W=void 0===A?12:A,V=e.captionFontSizePx,I=void 0===V?12:V,R=e.hideNoNotableCaptions,_=void 0!==R&&R,J=e.thickness,U=void 0===J?"2px":J,G=e.axisColor,q=void 0===G?"#000000":G,H=e.captionColor,K=void 0===H?"#000000":H,Q=M<8||d?8:M,Z=F<8||u?8:F,$=function(e){var t=e.widthPx,n=e.heightPx,o=e.x,r=e.y,i=e.stepX,a=e.stepY,c=e.xOffset,l=e.yOffset,d=i?Math.abs(Math.floor(o/i)):1,s=a?Math.abs(Math.floor(r/a)):1,u=function e(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return n/=i,Math.abs(n)>o?e(o,r):(t-2*l)/d*Math.abs(n)+l-r},x=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;e/=a;var o=n-c,i=c,l=(o-i)/s;return Math.abs(e)>r?i:o-l*Math.abs(e)+t};return{getX:u,getY:x,getXY:function(e){var t=Object(v.a)(e,2),n=t[0],o=t[1],r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return[u(n,r),x(o,r)]},widthPx:t,heightPx:n,xOffset:c,yOffset:l,stepX:i,stepY:a,totalStepsX:d,totalStepsY:s,x:o,y:r}}({widthPx:t,heightPx:n,x:i,y:c,stepX:f,stepY:p,xOffset:Q,yOffset:Z});return Object(b.jsxs)(j,{widthPx:t,heightPx:n,children:[Object(b.jsx)(g,{color:q,thickness:U,children:Object(b.jsx)("line",{x1:Z,x2:t-Z,y1:n-Q,y2:n-Q})}),Object(b.jsx)(g,{color:q,thickness:U,children:Object(b.jsx)("line",{x1:Z,x2:Z,y1:Q,y2:n-Q+1})}),!d&&Object(b.jsx)(h,{direction:"x",diagram:$,barWidthPx:E,notableStepSize:k,hideLevelLine:X,captionFontSizePx:I,hideNoNotableCaptions:_,color:q,levelLineColor:P,textColor:K}),!u&&Object(b.jsx)(h,{direction:"y",diagram:$,barWidthPx:W,notableStepSize:L,hideLevelLine:N,captionFontSizePx:I,hideNoNotableCaptions:_,color:q,levelLineColor:B,textColor:K}),o&&o($)]})};function p(e){var t=Object(i.useRef)(e);return Object(i.useEffect)((function(){t.current=e})),t.current}function y(e){var t=e.barsProp,n=e.internalBars,o=e.setInternalBars,r=e.generateBars,a=e.onBarValueChanged,c=p(t),l=p(n);Object(i.useEffect)((function(){"number"===typeof c&&"number"===typeof t?function(){var e=r(n,t),i=t-c,a=[];i>0&&(a=r(i).map((function(t,n){return Object(s.a)(Object(s.a)({},t),{},{key:String(e.length+n)})})));o([].concat(Object(u.a)(e),Object(u.a)(a)))}():o(r(t))}),[t,c]),Object(i.useEffect)((function(){!function(){var e={};l.forEach((function(t){e[t.key]=t.value})),n.forEach((function(t){var n=e[t.key],o=t.value;n!==o&&a(t.key,o)}))}()}),[n,l])}var k,C,L=x.a.rect(f||(f=Object(d.a)(["\n  cursor: pointer;\n"]))),m=function(e){var t=e.diagram,n=e.bars,o=e.xMax,r=e.gapPercentage,a=e.markerSizePx,c=e.markerColor,l=e.markerBorderColor,d=e.markerBorderThickness,s=e.allowDrag,u=void 0===s||s,x=e.showDragLevelLine,h=void 0===x||x,f=e.dragLevelLineColor,j=void 0===f?"#000000":f,g=e.dragLevelLineFontSizePx,O=void 0===g?12:g,p=e.dragLevelLineCaptionColor,y=void 0===p?"#000000":p,k=e.dragLevelLineCaptionOffsetPx,C=void 0===k?6:k,m=e.dragDistanceStepPercentage,P=void 0===m?.85:m,S=e.onDragDown,B=void 0===S?function(){}:S,Y=e.onDragUp,X=void 0===Y?function(){}:Y,w=o/n.length,N=w*r,z=w-N-N/n.length,M=Object(i.useState)(null),D=Object(v.a)(M,2),F=D[0],T=D[1],E=Object(i.useState)([0,0]),A=Object(v.a)(E,2),W=A[0],V=A[1],I=function(){var e=Object(i.useState)(!1),t=Object(v.a)(e,2),n=t[0],o=t[1];return Object(i.useEffect)((function(){function e(){o(!0)}function t(){o(!1)}return document.body.addEventListener("mousedown",e),document.body.addEventListener("mouseup",t),function(){document.body.removeEventListener("mousedown",e),document.body.removeEventListener("mouseup",t)}}),[]),n}();Object(i.useEffect)((function(){I||(T(null),V([0,0]))}),[I]);var R=n.map((function(e,n){var o=t.getX(function(e,t){return(t+1)*N+t*z}(0,n)),r=t.getY(e.value),i=t.getX(z)-t.getX(0),s=t.getY(0)-t.getY(e.value),x=o+i/2-a/2,h=r-a/2;return Object(b.jsxs)("g",{children:[Object(b.jsx)("rect",{x:o,y:r,width:i,height:s,fill:e.color,stroke:e.borderColor,strokeWidth:e.borderThickness}),Object(b.jsx)("rect",{x:o,y:0,width:i,height:t.heightPx,fill:"transparent",onMouseMove:function(n){return function(e,n){if(F&&F.key===n.key&&I){var o=Object(v.a)(W,2)[1],r=e.clientY,i=(t.getY(0)-t.getY(t.stepY))*P,a=o-r>=i,c=r-o>=i;(a||c)&&V([e.clientX,e.clientY]),a&&u&&X(n),c&&u&&B(n)}}(n,e)}}),u&&Object(b.jsx)(L,{x:x,y:h,width:a,height:a,fill:c,stroke:l,strokeWidth:d,onMouseDown:function(t){return function(e,t){T(t),V([e.clientX,e.clientY])}(t,e)}})]},"bar__".concat(e.key))})),_=n.find((function(e){return e.key===(null===F||void 0===F?void 0:F.key)}));return Object(b.jsxs)("g",{children:[R,h&&_&&F&&Object(b.jsxs)("g",{children:[Object(b.jsx)("line",{x1:t.getX(0),x2:t.getX(t.x),y1:t.getY(_.value),y2:t.getY(_.value),stroke:j,strokeDasharray:"4"}),Object(b.jsx)("text",{x:t.getX(t.x)+C,y:t.getY(_.value)+O/3,fill:y,style:{fontSize:"".concat(O,"px")},children:_.value})]})]})},P=function(e){var t=e.bars,n=e.defaultBarValue,o=void 0===n?0:n,r=e.defaultBarColor,a=void 0===r?"#3498DB":r,c=e.defaultBarBorderColor,l=void 0===c?"#000000":c,d=e.defaultBarBorderThickness,x=void 0===d?"1px":d,h=e.barGapPercentage,f=void 0===h?.2:h,j=e.widthPx,g=void 0===j?500:j,p=e.heightPx,k=void 0===p?500:p,C=e.readOnly,L=void 0!==C&&C,P=e.hideDragLevelLine,S=void 0!==P&&P,B=e.dragLevelLineColor,Y=void 0===B?"#000000":B,X=e.dragLevelLineFontSizePx,w=void 0===X?12:X,N=e.dragLevelLineCaptionColor,z=void 0===N?"#000000":N,M=e.dragLevelLineCaptionOffsetPx,D=void 0===M?6:M,F=e.max,T=void 0===F?10:F,E=e.step,A=void 0===E?1:E,W=e.notableStep,V=void 0===W?1:W,I=e.showNoNotableCaptions,R=void 0!==I&&I,_=e.levelLineColor,J=void 0===_?"#cccccc":_,U=e.notationOffsetPx,G=void 0===U?32:U,q=e.notationBarWidthPx,H=void 0===q?12:q,K=e.captionFontSizePx,Q=void 0===K?12:K,Z=e.thickness,$=void 0===Z?"2px":Z,ee=e.axisColor,te=void 0===ee?"#000000":ee,ne=e.captionColor,oe=void 0===ne?"#000000":ne,re=e.markerSizePx,ie=void 0===re?12:re,ae=e.markerColor,ce=void 0===ae?"#ffffff":ae,le=e.markerBorderColor,de=void 0===le?"#000000":le,se=e.markerBorderThickness,ue=void 0===se?"1px":se,ve=e.onBarValueChanged,xe=void 0===ve?function(){}:ve,be=function(e){var t=e.defaultBarValue,n=e.defaultBarColor,o=e.defaultBarBorderColor,r=e.defaultBarBorderThickness;return function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1/0;return(Array.isArray(e)?e:Array.from(Array(e).keys())).map((function(e,i){var a="object"===typeof e?e:{};return Object(s.a)({key:String(i),value:t,color:n,borderColor:o,borderThickness:r},a)})).filter((function(e,t){return t<i}))}}({defaultBarValue:o,defaultBarColor:a,defaultBarBorderColor:l,defaultBarBorderThickness:x}),he=Object(i.useState)(be(t)),fe=Object(v.a)(he,2),je=fe[0],ge=fe[1];function Oe(e,t){var n=Object(u.a)(je),o=n.findIndex((function(t){return t.key===e}));if(-1!==o){var r=n[o];n.splice(o,1,Object(s.a)(Object(s.a)({},r),{},{value:t})),ge(n)}}function pe(e){e.value<T&&Oe(e.key,e.value+A)}function ye(e){if(e.value>0){var t=e.value-A;e.value>T&&(t=T-A),Oe(e.key,t)}}return y({barsProp:t,internalBars:je,setInternalBars:ge,generateBars:be,onBarValueChanged:xe}),Object(b.jsx)(O,{widthPx:g,heightPx:k,x:100,y:T,stepY:A,notableYStepSize:V,hideXNotation:!0,hideNoNotableCaptions:!R,levelLineYColor:J,yNotationOffsetPx:G,yNotationBarWidthPx:H,captionFontSizePx:Q,thickness:$,axisColor:te,captionColor:oe,render:function(e){return Object(b.jsx)(m,{diagram:e,allowDrag:!L,bars:je,xMax:100,gapPercentage:f,showDragLevelLine:!S,dragLevelLineColor:Y,dragLevelLineFontSizePx:w,dragLevelLineCaptionColor:z,dragLevelLineCaptionOffsetPx:D,markerSizePx:ie,markerColor:ce,markerBorderColor:de,markerBorderThickness:ue,onDragUp:pe,onDragDown:ye})}})},S=x.a.div(k||(k=Object(d.a)(["\n  align-items: center;\n  justify-content: space-around;\n  min-height: 100vh;\n"]))),B=x.a.div(C||(C=Object(d.a)(["\n  font-weight: bold;\n  margin-bottom: 24px;\n"]))),Y=function(){var e=Object(i.useState)(15),t=Object(v.a)(e,2),n=t[0],o=t[1],r=Object(i.useState)(15),a=Object(v.a)(r,2),c=a[0],l=a[1],d=Object(i.useState)(!1),x=Object(v.a)(d,2),h=x[0],f=x[1],j=Object(i.useState)(!1),g=Object(v.a)(j,2),O=g[0],p=g[1],y=Object(i.useState)(4),k=Object(v.a)(y,2),C=k[0],L=k[1],m=Object(i.useState)([{key:"a",value:3,color:"#f542c2"},{key:"b",value:6,color:"#42f56c",borderThickness:"3px",borderColor:"#289e49"},{key:"d",value:4},{key:"e",value:8,color:"#bf264c",borderThickness:"0"}]),Y=Object(v.a)(m,2),X=Y[0],w=Y[1];return Object(b.jsxs)(S,{children:[Object(b.jsxs)("div",{children:[Object(b.jsxs)(B,{children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:"Y-Axis Maximum: "}),Object(b.jsx)("input",{type:"number",value:n,onChange:function(e){var t=e.target.value;t<1&&(t=1),o(t)}})]}),Object(b.jsxs)("div",{style:{marginTop:"4px"},children:[Object(b.jsx)("button",{onClick:function(){return L(C+1)},children:"Add bar"}),Object(b.jsx)("button",{onClick:function(){return C?L(C-1):{}},children:"Remove bar"}),Object(b.jsx)("button",{onClick:function(){return f(!h)},children:"Read Only"})]})]}),Object(b.jsx)("div",{children:Object(b.jsx)(P,{bars:C,max:n,notableStep:5,readOnly:h,defaultBarValue:2})})]}),Object(b.jsxs)("div",{children:[Object(b.jsxs)(B,{children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:"Y-Axis Maximum: "}),Object(b.jsx)("input",{type:"number",value:c,onChange:function(e){var t=e.target.value;t<1&&(t=1),l(t)}})]}),Object(b.jsx)("div",{style:{marginTop:"4px"},children:Object(b.jsx)("button",{onClick:function(){return p(!O)},children:"Read Only"})})]}),Object(b.jsx)("div",{children:Object(b.jsx)(P,{bars:X,max:c,notableStep:5,readOnly:O,onBarValueChanged:function(e,t){var n=Object(u.a)(X),o=n.findIndex((function(t){return t.key===e}));if(-1!==o){var r=n[o];n.splice(o,1,Object(s.a)(Object(s.a)({},r),{},{value:t})),w(n)}}})})]})]})},X=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,27)).then((function(t){var n=t.getCLS,o=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),o(e),r(e),i(e),a(e)}))};l.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(Y,{})}),document.getElementById("root")),X()}},[[26,1,2]]]);
//# sourceMappingURL=main.19550405.chunk.js.map