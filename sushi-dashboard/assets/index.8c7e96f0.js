var we=Object.defineProperty,De=Object.defineProperties;var Ce=Object.getOwnPropertyDescriptors;var q=Object.getOwnPropertySymbols;var le=Object.prototype.hasOwnProperty,de=Object.prototype.propertyIsEnumerable;var ce=(e,t,r)=>t in e?we(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,M=(e,t)=>{for(var r in t||(t={}))le.call(t,r)&&ce(e,r,t[r]);if(q)for(var r of q(t))de.call(t,r)&&ce(e,r,t[r]);return e},B=(e,t)=>De(e,Ce(t));var ue=(e,t)=>{var r={};for(var n in e)le.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&q)for(var n of q(e))t.indexOf(n)<0&&de.call(e,n)&&(r[n]=e[n]);return r};import{A as Re,I as Fe,g as J,r as l,j as ee,i as te,a as Ie,k as Te,n as h,C as V,b as re,u as P,_ as pe,S as ze,c as Ae,O as Pe,d as oe,e as he,H as fe,R as We,f as ne,N as Le,h as Oe,l as Ee,m as He}from"./vendor.c07eed54.js";const Ue=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function r(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(a){if(a.ep)return;a.ep=!0;const i=r(a);fetch(a.href,i)}};Ue();const je="https://gateway.thegraph.com/api/9ef8806519029f3f631da4ba936f16a1/subgraphs/id/D7azkFFPFT5H8i32ApXLr34UQyBfxDAfKoCEK4M832M6",qe=new Re({uri:je,cache:new Fe}),Be=J`
  query GetLiquidityDaily($pairId: ID!, $amount: Int!) {
    pair(id: $pairId) {
      dayData(orderBy: date, orderDirection: desc, first: $amount) {
        date
        reserveUSD
      }
    }
  }
`,Ve=J`
  query GetPairVitals($pairId: ID!) {
    pair(id: $pairId) {
      token0Price
      token1Price
      reserve0
      reserve1
      token0 {
        symbol
      }
      token1 {
        symbol
      }
      liquidityPositionSnapshots(first: 1) {
        token0PriceUSD
        token1PriceUSD
      }
    }
  }
`,Ne=J`
  query GetLiquidityDaily($pairId: ID!, $amount: Int!) {
    pair(id: $pairId) {
      dayData(orderBy: date, orderDirection: desc, first: $amount) {
        date
        volumeUSD
      }
    }
  }
`,xe=l.exports.createContext({theme:{},setTheme:()=>{}}),W="'DM Sans', sans-serif",Ge={typography:{fontFamily:W,fontSize:"14px",fontWeightRegular:400,fontWeightMedium:500,fontWeightBold:700,lineHeight:"18px",base:{fontFamily:W,fontSize:"14px",fontWeight:400,lineHeight:"18px"},h1:{fontFamily:W,fontSize:"28px",fontWeight:700,lineHeight:1},h3:{fontFamily:W,fontSize:"18px",fontWeight:700,lineHeight:1},h5:{fontFamily:W,fontSize:"14px",fontWeight:500,lineHeight:"18px"}},palette:{primary:{main:"#5294FF"},grey:{100:"#8D97A0"},bg:{default:"#000000"},text:{primary:"#DCDCDC",secondary:"#646464"},border:{main:"#212121"},skeleton:{base:"#373A47",highlight:"#9293A6"}},size:{borderRadius:{main:"12px"}}},Xe=Ge,o=ee.exports.jsx,p=ee.exports.jsxs,_=ee.exports.Fragment,Qe=({children:e})=>{const[t,r]=l.exports.useState(Xe),n=l.exports.useMemo(()=>({theme:t,setTheme:r}),[t]);return o(xe.Provider,{value:n,children:e})};function k(){return l.exports.useContext(xe)}const Ye="en",Ke="en",Ze={en:{translation:{}}};te.use(Ie).init({resources:Ze,lng:Ye,fallbackLng:Ke,interpolation:{escapeValue:!1}});function ge(e=0,t=Number.MAX_SAFE_INTEGER){const r=e+Math.random()*(t+1-e);return Math.floor(r)}function Je(e,t){return e.map((r,n)=>t(r,n))}function F(e,t){return e?t:null}function N(e,t,r){return e?t:r}const me=({paletteColor:e="primary-main",color:t="",size:r="16px",speed:n="1.2s",className:a="",style:i={}})=>o(tt,{paletteColor:e,color:t,size:r,speed:n,className:a,style:M({},i)}),et=Te`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,tt=h.div`
  display: inline-block;

  ${({size:e})=>`
    width: ${e}; 
    height: ${e};  
  `}

  &:after {
    content: ' ';
    display: block;

    ${({size:e})=>`
      width: ${e};
      height: ${e};  
    `}

    border-radius: 50%;
    ${({paletteColor:e,color:t})=>`
      border: 2px solid ${t||`var(--ui-palette-${e})`};
      border-color: ${t||`var(--ui-palette-${e})`} transparent ${t||`var(--ui-palette-${e})`} transparent;
    `}
    animation: ${et} ${({speed:e})=>e} linear infinite;
  }
`,y=({children:e,variant:t="base",paletteColor:r="text-primary",color:n="",align:a,noselect:i=!1,uppercase:d=!1,className:s="",style:c={}})=>o(rt,{variant:t,color:n||`var(--ui-palette-${r})`,align:a,noselect:i,uppercase:d,className:s,style:M({},c),children:e}),rt=h.span`
  ${({variant:e,color:t,align:r,noselect:n,uppercase:a})=>`
    font-family: var(--ui-typography-${e}-fontFamily);
    font-size: var(--ui-typography-${e}-fontSize);
    font-weight: var(--ui-typography-${e}-fontWeight);
    line-height: var(--ui-typography-${e}-lineHeight);
    color: ${t};

    ${r?`
      text-align: ${r};
      display: block;
    `:""}

    ${n?"user-select: none;":""}
    ${a?"text-transform: uppercase;":""}
  `}
`,ye=({active:e,whitelistedRanges:t=[],onChange:r})=>{const{theme:n}=k(),a=l.exports.useMemo(()=>({"1W":{label:"1W",active:e==="1W"},"1M":{label:"1M",active:e==="1M"},all:{label:"All",active:e==="all"}}),[e]),i=l.exports.useMemo(()=>Object.keys(a).filter(s=>!t.length||t.includes(s)).map(s=>B(M({},a[s]),{key:s})),[a,t]);function d(s){a[s].active||r(s)}return o(ot,{itemsAmount:i.length,children:Je(i,(s,c)=>o(nt,{isActive:s.active,theme:n,onClick:()=>d(s.key),children:s.label},`chart-range__${c}`))})},ot=h.div`
  border: 1px solid var(--ui-palette-border-main);
  border-radius: var(--ui-size-borderRadius-main);
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(${({itemsAmount:e})=>e}, minmax(55px, 1fr));
  grid-gap: 6px;
  padding: 4px;
`,nt=h.button`
  font-family: var(--ui-typography-fontFamily);
  font-size: var(--ui-typography-fontSize);
  font-weight: var(--ui-typography-fontWeightRegular);
  color: var(--ui-palette-text-secondary);
  box-sizing: border-box;
  padding: 0 6px;
  height: 32px;
  border-radius: 10px;
  transition: 0.2s all;
  background: transparent;
  outline: none;
  user-select: none;
  cursor: pointer;
  border: none;

  ${({isActive:e,theme:t})=>e&&`
    color: var(--ui-palette-primary-main);
    font-weight: var(--ui-typography-fontWeightMedium);
    background: ${new V(t.palette.primary.main).fade(.8).hexa()};
    pointer-events: none;
  `}

  &:not([disabled]) {
    &:hover, &:focus {
      color: var(--ui-palette-primary-main);
    }

    &:active {
      font-weight: var(--ui-typography-fontWeightMedium);
    }
  }

  &[disabled] {
    color: var(--ui-palette-text-secondary);
    ${({isActive:e,theme:t})=>e&&`${new V(t.palette.primary.main).fade(.85).hexa()};`}
    opacity: 0.7;
    cursor: not-allowed;
  }
`;function be(e,t,r,n){const a=2629743833,i=6048e5;function d(s){const c=n-s;return c<r?r:c}switch(t){case"all":{re.exec(e,"zoomX",new Date(r).getTime(),new Date(n).getTime());break}case"1M":{re.exec(e,"zoomX",new Date(d(a)).getTime(),new Date(n).getTime());break}case"1W":{re.exec(e,"zoomX",new Date(d(i)).getTime(),new Date(n).getTime());break}}}function at({chartId:e,chartColor:t,animated:r,tooltipLabel:n,tooltipValue:a,currentRange:i}){const{theme:d}=k(),{palette:s,typography:c}=d;return l.exports.useMemo(()=>({chart:{id:e,fontFamily:c.fontFamily,parentHeightOffset:0,animations:{enabled:r,speed:500},zoom:{enabled:!1},toolbar:{show:!1}},colors:[t],fill:{colors:[t],opacity:.1,type:"gradient",gradient:{shade:"dark",type:"vertical",shadeIntensity:0,opacityFrom:.4,opacityTo:.15,stops:[0,100]}},stroke:{curve:"smooth",width:1},xaxis:{type:"datetime",floating:!1,labels:{style:{fontSize:`${c.fontSize}px`,fontFamily:c.fontFamily},datetimeFormatter:st(i)},axisBorder:{show:!1},axisTicks:{show:!1},tooltip:{enabled:!1}},yaxis:{show:!1},grid:{show:!1,padding:{left:0,right:0,bottom:0}},dataLabels:{enabled:!1},markers:{radius:4,strokeWidth:10,strokeColors:t,strokeOpacity:.2,hover:{size:3,sizeOffset:0}},tooltip:{marker:{show:!1},style:{fontSize:"10px"},x:{format:it(i)},y:{formatter:a,title:{formatter:()=>n}}}}),[s,c,t,r,n,a,i])}function it(e){let t="dd MMM yyyy";switch(e){case"all":break;case"1M":{t="dd MMM, HH:mm";break}case"1W":{t="dd MMM, HH:mm";break}}return t}function st(e){let t={year:"yyyy",month:"MMM",day:"dd ddd",hour:"HH:mm"};switch(e){case"all":break;case"1M":{t=B(M({},t),{year:"",month:"d MMM",day:"d MMM"});break}case"1W":{t=B(M({},t),{year:"",month:"dd ddd",day:"dd ddd",hour:""});break}}return t}const lt=({data:e=[],children:t,loading:r=!1,loadingContent:n,emptyContent:a,minHeight:i="260px",chartHeight:d="200px",background:s,color:c,rangesMode:x="auto",disableRanges:f=!1,whitelistedRanges:u=[],manualRange:b="all",onRangeChange:m=()=>{},animated:w=!1,tooltipLabel:z=`${te.t("Value")}:`,tooltipValue:g=C=>`${C}`,className:$="",style:D={}})=>{const{theme:{palette:C}}=k(),{t:L}=P(),[A,O]=l.exports.useState(u[0]||"1M"),S=l.exports.useMemo(()=>x==="auto"?A:b,[x,A,b]),E=l.exports.useMemo(()=>`area-chart-${ge()}`,[]),R=s||C.bg.default,H=c||C.primary.main,U=at({chartId:E,chartColor:H,animated:w,tooltipLabel:z,tooltipValue:g,currentRange:S}),Q=l.exports.useMemo(()=>[{data:e}],[e]),Y=!e.length&&!r,K=new V(R).fade(.6).hexa();l.exports.useEffect(()=>{x==="auto"&&e.length&&be(E,S,e[0][0],e[e.length-1][0])},[S,e]);function Z(j){x==="auto"?O(j):m(j)}return p(dt,{background:R,minHeight:i,className:$,style:M({},D),children:[F(r,o(ve,{background:K,style:{backdropFilter:"blur(4px)"},children:N(n,n,o("div",{children:o(me,{size:"64px"})}))})),F(Y,o(ve,{children:N(a,a,p(y,{align:"center",variant:"h3",noselect:!0,paletteColor:"text-secondary",children:[L("This chart is empty"),o("br",{}),L("Data is not available")]}))})),p(ct,{children:[o("div",{children:t}),F(!f,o(ye,{active:S,whitelistedRanges:u,onChange:Z}))]}),o(ut,{children:o(pe,{options:U,series:Q,type:"area",height:d})})]})},dt=h.div`
  --ui-area-chart-border-radius: var(--ui-size-borderRadius-main);
  --ui-area-chart-bg: ${({background:e})=>e};

  background: var(--ui-area-chart-bg);
  border-radius: var(--ui-area-chart-border-radius);
  border: 1px solid var(--ui-palette-border-main);
  padding-bottom: 4px;
  padding-top: 16px;
  box-sizing: border-box;
  position: relative;
  min-height: ${({minHeight:e})=>e};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`,ct=h.div`
  border-top-right-radius: var(--ui-area-chart-border-radius);
  border-top-left-radius: var(--ui-area-chart-border-radius);
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 12px 16px;
  padding-right: 8px;
  z-index: 1;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
`,ut=h.div`
  .apexcharts-xcrosshairs,
  .apexcharts-ycrosshairs {
    display: none;
  }

  .apexcharts-xaxis-label {
    fill: var(--ui-palette-grey-100);
    font-weight: var(--ui-typography-fontWeightRegular);
    font-family: var(--ui-typography-fontFamily);
    opacity: 0.47;
    text-transform: uppercase;
    letter-spacing: -0.02em;
    font-size: 11px;
  }

  .apexcharts-tooltip {
    background: var(--ui-area-chart-bg) !important;
    color: var(--ui-palette-text-primary);
    border: 1px solid var(--ui-palette-grey-100) !important;
  }

  .apexcharts-tooltip-title {
    background: transparent !important;
    margin-bottom: 0;
    padding: 2px 4px;
    text-align: center;
    border-bottom: 1px solid var(--ui-palette-grey-100) !important;
  }

  .apexcharts-tooltip-text {
    font-size: var(--ui-typography-fontSize) !important;
  }

  .apexcharts-tooltip-y-group {
    padding: 0;
  }

  .apexcharts-tooltip-series-group.apexcharts-active,
  .apexcharts-tooltip-series-group:last-child {
    padding-bottom: 0;
  }
`,ve=h.div`
  z-index: 2;
  background: ${({background:e})=>e||"var(--ui-area-chart-bg)"};
  border-radius: var(--ui-area-chart-border-radius);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;function pt({chartId:e,color:t,alternativeColor:r,gradientColor:n,animated:a,onBarMouseEnter:i,onBarMouseLeave:d}){const{theme:s}=k(),{palette:c,typography:x}=s;return l.exports.useMemo(()=>({chart:{id:e,fontFamily:x.fontFamily,parentHeightOffset:0,animations:{enabled:a,speed:500},zoom:{enabled:!1},toolbar:{show:!1},events:{dataPointMouseEnter:(u,b,m)=>{i(m.w.config.series[m.seriesIndex].data[m.dataPointIndex])},dataPointMouseLeave:(u,b,m)=>{d(m.w.config.series[m.seriesIndex].data[m.dataPointIndex])},mouseLeave:()=>{d()}}},fill:{colors:[u=>u.dataPointIndex%2!=0&&r||t],type:"gradient",gradient:{shade:"dark",type:"vertical",gradientToColors:[n||t],shadeIntensity:0,opacityFrom:.9,opacityTo:.3,stops:[0,100]}},states:{active:{filter:{type:"none"}}},xaxis:{type:"numeric",floating:!1,labels:{show:!1},axisBorder:{show:!1},axisTicks:{show:!1},tooltip:{enabled:!1}},yaxis:{show:!1},plotOptions:{bar:{borderRadius:5,columnWidth:"100%",barHeight:"100%"}},grid:{show:!1,padding:{left:0,right:0,bottom:-32}},dataLabels:{enabled:!1},tooltip:{enabled:!1}}),[c,x,t,r,n,a,i,d])}const ht=({data:e=[],children:t,loading:r=!1,loadingContent:n,emptyContent:a,minHeight:i="260px",chartHeight:d="200px",background:s,color:c="",alternativeColor:x="",gradientColor:f="",rangesMode:u="auto",disableRanges:b=!1,whitelistedRanges:m=[],manualRange:w="all",onRangeChange:z=()=>{},onBarMouseEnter:g=()=>{},onBarMouseLeave:$=()=>{},animated:D=!1,className:C="",style:L={}})=>{const{theme:{palette:A}}=k(),{t:O}=P(),[S,E]=l.exports.useState(m[0]||"1M"),R=l.exports.useMemo(()=>u==="auto"?S:w,[u,S,w]),H=l.exports.useMemo(()=>`column-chart-${ge()}`,[]),U=s||A.bg.default,Q=c||A.primary.main,Y=pt({chartId:H,color:Q,alternativeColor:x,gradientColor:f,animated:D,onBarMouseEnter:g,onBarMouseLeave:$}),K=l.exports.useMemo(()=>[{data:e}],[e]),Z=!e.length&&!r,j=new V(U).fade(.6).hexa();l.exports.useEffect(()=>{["auto","combined"].includes(u)&&e.length&&be(H,R,e[0].x,e[e.length-1].x)},[R,e]);function ke(se){u==="auto"?E(se):z(se)}return p(ft,{background:U,minHeight:i,className:C,style:M({},L),children:[F(r,o(Me,{background:j,style:{backdropFilter:"blur(4px)"},children:N(n,n,o("div",{children:o(me,{size:"64px"})}))})),F(Z,o(Me,{children:N(a,a,p(y,{align:"center",variant:"h3",noselect:!0,paletteColor:"text-secondary",children:[O("This chart is empty"),o("br",{}),O("Data is not available")]}))})),p(xt,{children:[o("div",{children:t}),F(!b,o(ye,{active:R,whitelistedRanges:m,onChange:ke}))]}),o(gt,{children:o(pe,{options:Y,series:K,type:"bar",height:d})})]})},ft=h.div`
  --ui-column-chart-border-radius: var(--ui-size-borderRadius-main);
  --ui-column-chart-bg: ${({background:e})=>e};

  background: var(--ui-column-chart-bg);
  border-radius: var(--ui-column-chart-border-radius);
  border: 1px solid var(--ui-palette-border-main);
  padding-top: 16px;
  overflow: hidden;
  box-sizing: border-box;
  position: relative;
  min-height: ${({minHeight:e})=>e};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`,xt=h.div`
  border-top-right-radius: var(--ui-column-chart-border-radius);
  border-top-left-radius: var(--ui-column-chart-border-radius);
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 12px 16px;
  padding-right: 8px;
  z-index: 1;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
`,gt=h.div`
  .apexcharts-xcrosshairs,
  .apexcharts-ycrosshairs {
    display: none;
  }
`,Me=h.div`
  z-index: 2;
  background: ${({background:e})=>e||"var(--ui-column-chart-bg)"};
  border-radius: var(--ui-column-chart-border-radius);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;function mt(e){return typeof e=="object"&&!Array.isArray(e)&&e!==null}function _e(e,t="",r="-"){const n=Object.keys(e),a=t?t+r:"";return n.reduce(([i,d],s)=>{const c=e[s];let x=i||[],f=d||[];if(mt(c)){const[u,b]=_e(c,a+s);b&&(x=x.concat(u),f=[...f,...b])}else x.push(a+s),f.push(c);return[x,f]},[])}const yt=({children:e,className:t="",style:r={}})=>{const{theme:n}=k();return l.exports.useEffect(()=>{bt(n)},[n]),o(vt,{className:t,style:M({},r),children:e})};function bt(e){const t=document.querySelector("html"),[r,n]=_e(e,"--ui");r.forEach((a,i)=>{t.style.setProperty(a,n[i])})}const vt=h.div`
  min-height: 100vh;
`,v=t=>{var e=ue(t,[]);const{theme:r}=k(),n=e.baseColor||r.palette.skeleton.base,a=e.highlightColor||r.palette.skeleton.highlight;return o(ze,{baseColor:n,highlightColor:a,children:o(Ae,M({},e))})},Mt=()=>o(Pe,{}),ae="0xceff51756c56ceffca006cd410b03ffc46dd3a58",I=2;function ie(e,t){const r=String(e);if(r.includes(".")){const n=r.indexOf("."),a=r.substring(0,n),i=r.substring(n,n+t+1);return`${a}${t?i:""}`}return r}function T(e,t=8){const r=ie(e,t),n=r.indexOf("."),a=n===-1?r:r.substring(0,n),i=n===-1?"":r.substring(n,n+t+1);return`${a.replace(/\B(?=(\d{3})+(?!\d))/g,",")}${i}`}const _t=({pairId:e})=>{const{t}=P(),[r,n]=l.exports.useState("1M"),a=l.exports.useMemo(()=>r==="1W"?7:r==="1M"?31:365,[r]),{loading:i,data:d=null}=oe(Be,{variables:{pairId:e,amount:a},fetchPolicy:"cache-first",nextFetchPolicy:"cache-first"}),s=l.exports.useMemo(()=>d?d.pair.dayData.map(f=>[f.date*1e3,Number(ie(f.reserveUSD,I))]).reverse():[],[d]),c=l.exports.useMemo(()=>{var f;return((f=s[s.length-1])==null?void 0:f[1])||0},[s]),x=l.exports.useMemo(()=>{var u;const f=((u=s[s.length-1])==null?void 0:u[0])||Date.now();return he(f).format("MMM DD")},[s]);return o(lt,{data:s,manualRange:r,rangesMode:"manual",onRangeChange:f=>n(f),loading:i,color:"#14A887",tooltipLabel:t("Liquidity"),tooltipValue:f=>`${T(f,I)}$`,children:p($t,{children:[o(St,{children:i?p(_,{children:[o(v,{width:"80px",height:"14px",borderRadius:"4px"}),o(v,{width:"60px",height:"14px",borderRadius:"4px"})]}):p(_,{children:[o(y,{variant:"h5",children:t("Liquidity")}),o(y,{paletteColor:"text-secondary",children:x})]})}),o("div",{children:i?o(v,{width:"145px",height:"18px",borderRadius:"4px"}):p(y,{variant:"h3",children:["$",T(c,I)]})})]})})},$t=h.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,St=h.div`
  display: flex;
  gap: 6px;
`;var kt="./assets/default.d4f7b281.png",wt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:kt}),Dt="./assets/WBTC.1bcd8f37.svg",Ct=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Dt}),Rt="./assets/WETH.30417559.svg",Ft=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Rt}),G={"./default.png":wt,"./WBTC.svg":Ct,"./WETH.svg":Ft};function X(e){return $e(e),G[e]}function $e(e){if(e in G)return G[e];var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}X.keys=function(){return Object.keys(G)};X.resolve=$e;X.id="__require_context_for_vite_function_0";function It(e){const t=X,r=e.toUpperCase();let n;try{return n=t(`./${r}.svg`).default,n}catch{return t("./default.png").default}}const Se=({pair:e,targetToken:t,loading:r=!1,amountDecimals:n=0,priceDecimals:a=1})=>{const i=l.exports.useMemo(()=>{var u;return((u=e==null?void 0:e[`token${t}`])==null?void 0:u.symbol)||"$COIN"},[e,t]),d=l.exports.useMemo(()=>(e==null?void 0:e[`reserve${t}`])||"0",[e,t]),s=l.exports.useMemo(()=>(e==null?void 0:e[`token${t?0:1}Price`])||"0",[e,t]),c=l.exports.useMemo(()=>{var u;return((u=e==null?void 0:e[`token${t?0:1}`])==null?void 0:u.symbol)||"$COIN"},[e,t]),x=l.exports.useMemo(()=>{var u;return((u=e==null?void 0:e.liquidityPositionSnapshots[0])==null?void 0:u[`token${t}PriceUSD`])||"0"},[e,t]),f=l.exports.useMemo(()=>It(i),[i]);return p(Tt,{children:[o(zt,{children:r?p(_,{children:[o(v,{circle:!0,width:"20px",height:"20px"}),o(v,{width:"80px",height:"14px",borderRadius:"4px"}),o(v,{width:"50px",height:"14px",borderRadius:"4px"})]}):p(_,{children:[o(Pt,{children:o(Wt,{src:f,alt:""})}),o(y,{variant:"h3",children:T(d,n)}),o(y,{paletteColor:"text-secondary",children:i})]})}),o(At,{children:r?p(_,{children:[o(v,{width:"140px",height:"14px",borderRadius:"4px"}),o(v,{width:"80px",height:"14px",borderRadius:"4px"})]}):p(_,{children:[p(y,{variant:"h5",children:["1 ",i," = ",T(s,a)," ",c]}),p(y,{paletteColor:"text-secondary",children:["($",T(x,I),")"]})]})})]})},Tt=h.div`
  background: var(--ui-palette-background-default);
  border: 1px solid var(--ui-palette-border-main);
  border-radius: var(--ui-size-borderRadius-main);
  padding: 24px 16px;
  box-sizing: border-box;
  min-height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
`,zt=h.div`
  display: flex;
  gap: 6px;
  align-items: center;
`,At=h.div`
  display: flex;
  align-items: flex-end;
  gap: 6px;
`,Pt=h.div`
  user-select: none;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -2px;
`,Wt=h.img`
  max-height: 100%;
  max-width: 100%;
`,Lt=({pairId:e})=>{const{t}=P(),[r,n]=l.exports.useState("1M"),a=l.exports.useMemo(()=>r==="1W"?14:r==="1M"?40:100,[r]),{loading:i,data:d=null}=oe(Ne,{variables:{pairId:e,amount:a},fetchPolicy:"cache-first",nextFetchPolicy:"cache-first"}),s=l.exports.useMemo(()=>d?d.pair.dayData.map(g=>({x:g.date*1e3,y:Number(ie(g.volumeUSD,I))})).reverse():[],[d]),[c,x]=l.exports.useState(null),f=l.exports.useMemo(()=>{var $;const g=(($=s[s.length-1])==null?void 0:$.y)||0;return c===null?g:c},[c,s]),[u,b]=l.exports.useState(null),m=l.exports.useMemo(()=>{var D;const g=((D=s[s.length-1])==null?void 0:D.x)||Date.now();return he(u===null?g:u).format("MMM DD")},[u,s]);function w(g){x(g.y),b(g.x)}function z(){x(null),b(null)}return o(ht,{data:s,manualRange:r,rangesMode:"combined",onRangeChange:g=>n(g),loading:i,color:"#F643CF",alternativeColor:"rgba(246, 67, 207, 0.6)",gradientColor:"rgba(235, 122, 74, 0.3)",onBarMouseEnter:w,onBarMouseLeave:z,children:p(Ot,{children:[o(Et,{children:i?p(_,{children:[o(v,{width:"80px",height:"14px",borderRadius:"4px"}),o(v,{width:"60px",height:"14px",borderRadius:"4px"})]}):p(_,{children:[o(y,{variant:"h5",children:t("Volume")}),o(y,{paletteColor:"text-secondary",children:m})]})}),o("div",{children:i?o(v,{width:"145px",height:"18px",borderRadius:"4px"}):p(y,{variant:"h3",children:["$",T(f,I)]})})]})})},Ot=h.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,Et=h.div`
  display: flex;
  gap: 6px;
`,Ht=()=>{const{t:e}=P(),{loading:t,data:r}=oe(Ve,{variables:{pairId:ae},fetchPolicy:"network-only",nextFetchPolicy:"cache-first"}),n=(r==null?void 0:r.pair)||null;return p(_,{children:[o(fe,{children:o("title",{children:e("Home")})}),o(Ut,{children:p(jt,{children:[p(qt,{children:[o(y,{variant:"h1",children:e("FE Test exercise")}),p(y,{paletteColor:"text-secondary",children:[e("Good luck")," :)"]})]}),p(Bt,{children:[o(Se,{pair:n,targetToken:0,priceDecimals:1,loading:t}),o(Se,{pair:n,targetToken:1,priceDecimals:5,loading:t}),o(_t,{pairId:ae}),o(Lt,{pairId:ae})]})]})})]})},Ut=h.div`
  min-height: 100vh;
  padding: 80px;
  box-sizing: border-box;
  display: flex;

  @media screen and (max-width: 1024px) {
    padding: 24px;
  }
`,jt=h.div`
  width: 100%;
  max-width: 1120px;
  margin: auto;
`,qt=h.div`
  display: flex;
  gap: 8px;
  align-items: flex-end;
  padding: 0 16px;
  margin-bottom: 24px;
`,Bt=h.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 12px 20px;

  @media screen and (max-width: 915px) {
    grid-template-columns: 1fr;
  }
`,Vt=()=>o(We,{children:p(ne,{path:"/",element:o(Mt,{}),children:[o(ne,{index:!0,element:o(Ht,{})}),o(ne,{path:"*",element:o(Le,{to:"/"})})]})}),Nt=()=>o(yt,{children:o(Vt,{})});const Gt=document.getElementById("root"),Xt=Oe(Gt);Xt.render(o(l.exports.StrictMode,{children:o(Ee,{client:qe,children:o(Qe,{children:p(He,{children:[o(fe,{titleTemplate:`%s - Sushi ${te.t("Dashboard")}`}),o(Nt,{})]})})})}));
