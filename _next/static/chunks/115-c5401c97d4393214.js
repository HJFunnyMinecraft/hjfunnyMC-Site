(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[115],{853:function(e,t,o){"use strict";var n,r;e.exports=(null==(n=o.g.process)?void 0:n.env)&&"object"==typeof(null==(r=o.g.process)?void 0:r.env)?o.g.process:o(3018)},3018:function(e){!function(){var t={229:function(e){var t,o,n,r=e.exports={};function a(){throw Error("setTimeout has not been defined")}function l(){throw Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===a||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(o){try{return t.call(null,e,0)}catch(o){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:a}catch(e){t=a}try{o="function"==typeof clearTimeout?clearTimeout:l}catch(e){o=l}}();var s=[],c=!1,d=-1;function u(){c&&n&&(c=!1,n.length?s=n.concat(s):d=-1,s.length&&p())}function p(){if(!c){var e=i(u);c=!0;for(var t=s.length;t;){for(n=s,s=[];++d<t;)n&&n[d].run();d=-1,t=s.length}n=null,c=!1,function(e){if(o===clearTimeout)return clearTimeout(e);if((o===l||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(e);try{o(e)}catch(t){try{return o.call(null,e)}catch(t){return o.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function m(){}r.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var o=1;o<arguments.length;o++)t[o-1]=arguments[o];s.push(new f(e,t)),1!==s.length||c||i(p)},f.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=m,r.addListener=m,r.once=m,r.off=m,r.removeListener=m,r.removeAllListeners=m,r.emit=m,r.prependListener=m,r.prependOnceListener=m,r.listeners=function(e){return[]},r.binding=function(e){throw Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw Error("process.chdir is not supported")},r.umask=function(){return 0}}},o={};function n(e){var r=o[e];if(void 0!==r)return r.exports;var a=o[e]={exports:{}},l=!0;try{t[e](a,a.exports,n),l=!1}finally{l&&delete o[e]}return a.exports}n.ab="//";var r=n(229);e.exports=r}()},7115:function(e,t,o){"use strict";o.d(t,{Z:function(){return eE}});var n=o(9277),r=o(4779),a=(0,r.tv)({slots:{base:"inline-flex items-center justify-between h-fit rounded-large gap-2",pre:"bg-transparent text-inherit font-mono font-normal inline-block whitespace-nowrap",content:"flex flex-col",symbol:"select-none",copyButton:["group","relative","z-10","text-large","text-inherit","data-[hover=true]:bg-transparent"],copyIcon:["absolute text-inherit opacity-100 scale-100 group-data-[copied=true]:opacity-0 group-data-[copied=true]:scale-50"],checkIcon:["absolute text-inherit opacity-0 scale-50 group-data-[copied=true]:opacity-100 group-data-[copied=true]:scale-100"]},variants:{variant:{flat:"",solid:"",bordered:"border-medium bg-transparent",shadow:""},color:{default:{},primary:{},secondary:{},success:{},warning:{},danger:{}},size:{sm:{base:"px-1.5 py-0.5 text-tiny rounded-small"},md:{base:"px-3 py-1.5 text-small rounded-medium"},lg:{base:"px-4 py-2 text-medium rounded-large"}},radius:{none:{base:"rounded-none"},sm:{base:"rounded-small"},md:{base:"rounded-medium"},lg:{base:"rounded-large"}},fullWidth:{true:{base:"w-full"}},disableAnimation:{true:{},false:{copyIcon:"transition-transform-opacity",checkIcon:"transition-transform-opacity"}}},defaultVariants:{color:"default",variant:"flat",size:"md",fullWidth:!1},compoundVariants:[{variant:["solid","shadow"],color:"default",class:{copyButton:"data-[focus-visible]:outline-default-foreground"}},{variant:["solid","shadow"],color:"primary",class:{copyButton:"data-[focus-visible]:outline-primary-foreground"}},{variant:["solid","shadow"],color:"secondary",class:{copyButton:"data-[focus-visible]:outline-secondary-foreground"}},{variant:["solid","shadow"],color:"success",class:{copyButton:"data-[focus-visible]:outline-success-foreground"}},{variant:["solid","shadow"],color:"warning",class:{copyButton:"data-[focus-visible]:outline-warning-foreground"}},{variant:["solid","shadow"],color:"danger",class:{copyButton:"data-[focus-visible]:outline-danger-foreground"}},{variant:"flat",color:"default",class:{base:n.J.flat.default}},{variant:"flat",color:"primary",class:{base:n.J.flat.primary}},{variant:"flat",color:"secondary",class:{base:n.J.flat.secondary}},{variant:"flat",color:"success",class:{base:n.J.flat.success}},{variant:"flat",color:"warning",class:{base:n.J.flat.warning}},{variant:"flat",color:"danger",class:{base:n.J.flat.danger}},{variant:"solid",color:"default",class:{base:n.J.solid.default}},{variant:"solid",color:"primary",class:{base:n.J.solid.primary}},{variant:"solid",color:"secondary",class:{base:n.J.solid.secondary}},{variant:"solid",color:"success",class:{base:n.J.solid.success}},{variant:"solid",color:"warning",class:{base:n.J.solid.warning}},{variant:"solid",color:"danger",class:{base:n.J.solid.danger}},{variant:"shadow",color:"default",class:{base:n.J.shadow.default}},{variant:"shadow",color:"primary",class:{base:n.J.shadow.primary}},{variant:"shadow",color:"secondary",class:{base:n.J.shadow.secondary}},{variant:"shadow",color:"success",class:{base:n.J.shadow.success}},{variant:"shadow",color:"warning",class:{base:n.J.shadow.warning}},{variant:"shadow",color:"danger",class:{base:n.J.shadow.danger}},{variant:"bordered",color:"default",class:{base:n.J.bordered.default}},{variant:"bordered",color:"primary",class:{base:n.J.bordered.primary}},{variant:"bordered",color:"secondary",class:{base:n.J.bordered.secondary}},{variant:"bordered",color:"success",class:{base:n.J.bordered.success}},{variant:"bordered",color:"warning",class:{base:n.J.bordered.warning}},{variant:"bordered",color:"danger",class:{base:n.J.bordered.danger}}]}),l=o(8625),i=o(2484),s=o(3898),c=o(2259),d=o(248),u=o(7851),p=o(6513),f=o(5271),m=o(6064),g=o(2518);let b={},h=0,v=!1,y=null,w=null;var x=o(9336),E=o(3913),k=o(1721),T=o(4413),L=o(5934),C=o(2626),O=o(4266);function P(e,t=-1/0,o=1/0){return Math.min(Math.max(e,t),o)}let S={top:"top",bottom:"top",left:"left",right:"left"},j={top:"bottom",bottom:"top",left:"right",right:"left"},z={top:"left",left:"top"},D={top:"height",left:"width"},B={width:"totalWidth",height:"totalHeight"},I={},M="undefined"!=typeof document&&window.visualViewport;function N(e){let t=0,o=0,n=0,r=0,a=0,l=0,i={},s=(null==M?void 0:M.scale)>1;if("BODY"===e.tagName){var c,d;let s=document.documentElement;n=s.clientWidth,r=s.clientHeight,t=null!==(c=null==M?void 0:M.width)&&void 0!==c?c:n,o=null!==(d=null==M?void 0:M.height)&&void 0!==d?d:r,i.top=s.scrollTop||e.scrollTop,i.left=s.scrollLeft||e.scrollLeft,M&&(a=M.offsetTop,l=M.offsetLeft)}else({width:t,height:o,top:a,left:l}=R(e)),i.top=e.scrollTop,i.left=e.scrollLeft,n=t,r=o;return(0,O.Pf)()&&("BODY"===e.tagName||"HTML"===e.tagName)&&s&&(i.top=0,i.left=0,a=M.pageTop,l=M.pageLeft),{width:t,height:o,totalWidth:n,totalHeight:r,scroll:i,top:a,left:l}}function J(e,t,o,n,r,a,l){let i=r.scroll[e],s=n[D[e]],c=n.scroll[S[e]]+a,d=s+n.scroll[S[e]]-a,u=t-i+l[e]-n[S[e]],p=t-i+o+l[e]-n[S[e]];return u<c?c-u:p>d?Math.max(d-p,c-u):0}function _(e){if(I[e])return I[e];let[t,o]=e.split(" "),n=S[t]||"right",r=z[n];S[o]||(o="center");let a=D[n],l=D[r];return I[e]={placement:t,crossPlacement:o,axis:n,crossAxis:r,size:a,crossSize:l},I[e]}function H(e,t,o,n,r,a,l,i,s,c){let{placement:d,crossPlacement:u,axis:p,crossAxis:f,size:m,crossSize:g}=n,b={};b[f]=e[f],"center"===u?b[f]+=(e[g]-o[g])/2:u!==f&&(b[f]+=e[g]-o[g]),b[f]+=a;let h=e[f]-o[g]+s+c,v=e[f]+e[g]-s-c;if(b[f]=P(b[f],h,v),d===p){let o=i?l[m]:t[B[m]];b[j[p]]=Math.floor(o-e[p]+r)}else b[p]=Math.floor(e[p]+e[m]+r);return b}function A(e,t,o,n,r,a){let{placement:l,axis:i,size:s}=a;return l===i?Math.max(0,o[i]-e[i]-e.scroll[i]+t[i]-n[i]-n[j[i]]-r):Math.max(0,e[s]+e[i]+e.scroll[i]-t[i]-o[i]-o[s]-n[i]-n[j[i]]-r)}function R(e){let{top:t,left:o,width:n,height:r}=e.getBoundingClientRect(),{scrollTop:a,scrollLeft:l,clientTop:i,clientLeft:s}=document.documentElement;return{top:t+a-i,left:o+l-s,width:n,height:r}}function W(e,t){let o,n=window.getComputedStyle(e);if("fixed"===n.position){let{top:t,left:n,width:r,height:a}=e.getBoundingClientRect();o={top:t,left:n,width:r,height:a}}else{o=R(e);let n=R(t),r=window.getComputedStyle(t);n.top+=(parseInt(r.borderTopWidth,10)||0)-t.scrollTop,n.left+=(parseInt(r.borderLeftWidth,10)||0)-t.scrollLeft,o.top-=n.top,o.left-=n.left}return o.top-=parseInt(n.marginTop,10)||0,o.left-=parseInt(n.marginLeft,10)||0,o}function X(e){let t=window.getComputedStyle(e);return"none"!==t.transform||/transform|perspective/.test(t.willChange)||"none"!==t.filter||"paint"===t.contain||"backdropFilter"in t&&"none"!==t.backdropFilter||"WebkitBackdropFilter"in t&&"none"!==t.WebkitBackdropFilter}let Y=new WeakMap;var $=o(1178),F=o(5740),V=o(9211);let U="undefined"!=typeof document&&window.visualViewport;var K=o(9041),q=o(1814),G=o(4661);function Z(e,t){if(e.button>0)return!1;if(e.target){let t=e.target.ownerDocument;if(!t||!t.documentElement.contains(e.target)||e.target.closest("[data-react-aria-top-layer]"))return!1}return t.current&&!t.current.contains(e.target)}var Q=o(3070);let ee=[];var et=o(2931),eo=(0,r.tv)({slots:{base:["z-0","relative","bg-transparent","before:content-['']","before:hidden","before:z-[-1]","before:absolute","before:rotate-45","before:w-2.5","before:h-2.5","before:rounded-sm","data-[arrow=true]:before:block","data-[placement=top]:before:-bottom-[calc(theme(spacing.5)/4_-_1.5px)]","data-[placement=top]:before:left-1/2","data-[placement=top]:before:-translate-x-1/2","data-[placement=top-start]:before:-bottom-[calc(theme(spacing.5)/4_-_1.5px)]","data-[placement=top-start]:before:left-3","data-[placement=top-end]:before:-bottom-[calc(theme(spacing.5)/4_-_1.5px)]","data-[placement=top-end]:before:right-3","data-[placement=bottom]:before:-top-[calc(theme(spacing.5)/4_-_1.5px)]","data-[placement=bottom]:before:left-1/2","data-[placement=bottom]:before:-translate-x-1/2","data-[placement=bottom-start]:before:-top-[calc(theme(spacing.5)/4_-_1.5px)]","data-[placement=bottom-start]:before:left-3","data-[placement=bottom-end]:before:-top-[calc(theme(spacing.5)/4_-_1.5px)]","data-[placement=bottom-end]:before:right-3","data-[placement=left]:before:-right-[calc(theme(spacing.5)/4_-_2px)]","data-[placement=left]:before:top-1/2","data-[placement=left]:before:-translate-y-1/2","data-[placement=left-start]:before:-right-[calc(theme(spacing.5)/4_-_3px)]","data-[placement=left-start]:before:top-1/4","data-[placement=left-end]:before:-right-[calc(theme(spacing.5)/4_-_3px)]","data-[placement=left-end]:before:bottom-1/4","data-[placement=right]:before:-left-[calc(theme(spacing.5)/4_-_2px)]","data-[placement=right]:before:top-1/2","data-[placement=right]:before:-translate-y-1/2","data-[placement=right-start]:before:-left-[calc(theme(spacing.5)/4_-_3px)]","data-[placement=right-start]:before:top-1/4","data-[placement=right-end]:before:-left-[calc(theme(spacing.5)/4_-_3px)]","data-[placement=right-end]:before:bottom-1/4",...et.Dh],content:["z-10","px-2.5","py-1","w-full","inline-flex","flex-col","items-center","justify-center","box-border","subpixel-antialiased","outline-none","box-border"],trigger:["z-10"],backdrop:["hidden"],arrow:[]},variants:{size:{sm:{content:"text-tiny"},md:{content:"text-small"},lg:{content:"text-medium"}},color:{default:{base:"before:bg-content1 before:shadow-small",content:"bg-content1"},foreground:{base:"before:bg-foreground",content:n.J.solid.foreground},primary:{base:"before:bg-primary",content:n.J.solid.primary},secondary:{base:"before:bg-secondary",content:n.J.solid.secondary},success:{base:"before:bg-success",content:n.J.solid.success},warning:{base:"before:bg-warning",content:n.J.solid.warning},danger:{base:"before:bg-danger",content:n.J.solid.danger}},radius:{none:{content:"rounded-none"},sm:{content:"rounded-small"},md:{content:"rounded-medium"},lg:{content:"rounded-large"},full:{content:"rounded-full"}},shadow:{sm:{content:"shadow-small"},md:{content:"shadow-medium"},lg:{content:"shadow-large"}},backdrop:{transparent:{},opaque:{backdrop:"bg-overlay/50 backdrop-opacity-disabled"},blur:{backdrop:"backdrop-blur-sm backdrop-saturate-150 bg-overlay/30"}},triggerScaleOnOpen:{true:{trigger:["aria-expanded:scale-[0.97]","aria-expanded:opacity-70","subpixel-antialiased"]},false:{}},disableAnimation:{true:{base:"animate-none"}},isTriggerDisabled:{true:{trigger:"opacity-disabled pointer-events-none"},false:{}}},defaultVariants:{color:"default",radius:"lg",size:"md",shadow:"md",backdrop:"transparent",triggerScaleOnOpen:!0},compoundVariants:[{backdrop:["opaque","blur"],class:{backdrop:"block w-full h-full fixed inset-0 -z-30"}}]}),en=o(5129),er=e=>{let t={top:{originY:1},bottom:{originY:0},left:{originX:1},right:{originX:0},"top-start":{originX:0,originY:1},"top-end":{originX:1,originY:1},"bottom-start":{originX:0,originY:0},"bottom-end":{originX:1,originY:0},"right-start":{originX:0,originY:0},"right-end":{originX:0,originY:1},"left-start":{originX:1,originY:0},"left-end":{originX:1,originY:1}};return(null==t?void 0:t[e])||{}},ea=e=>({top:"top",bottom:"bottom",left:"left",right:"right","top-start":"top start","top-end":"top end","bottom-start":"bottom start","bottom-end":"bottom end","left-start":"left top","left-end":"left bottom","right-start":"right top","right-end":"right bottom"})[e],el=(e,t)=>{if(t.includes("-")){let[,o]=t.split("-");return`${e}-${o}`}return e},ei=o(3527),es=o(4234),ec=o(9566),ed=o(6865),eu=o(4278),ep=o(8695),ef=o(3372),em=o(853),eg={},eb=o(2676),eh=(0,i.Gp)((e,t)=>{let o;let{Component:n,children:r,content:a,isOpen:c,portalContainer:m,placement:O,disableAnimation:S,motionProps:z,getTriggerProps:D,getTooltipProps:I,getTooltipContentProps:M}=function(e){var t,o;let n=(0,l.w)(),[r,a]=(0,i.oe)(e,eo.variantKeys),{ref:c,as:m,isOpen:O,content:S,children:z,defaultOpen:D,onOpenChange:I,isDisabled:M,trigger:et,shouldFlip:er=!0,containerPadding:es=12,placement:ec="top",delay:ed=0,closeDelay:eu=500,showArrow:ep=!1,offset:ef=7,crossOffset:em=0,isDismissable:eg,shouldCloseOnBlur:eb=!0,portalContainer:eh,isKeyboardDismissDisabled:ev=!1,updatePositionDeps:ey=[],shouldCloseOnInteractOutside:ew,className:ex,onClose:eE,motionProps:ek,classNames:eT,...eL}=r,eC=null!=(o=null!=(t=null==e?void 0:e.disableAnimation)?t:null==n?void 0:n.disableAnimation)&&o,eO=function(e={}){let{delay:t=1500,closeDelay:o=500}=e,{isOpen:n,open:r,close:a}=function(e){let[t,o]=(0,g.z)(e.isOpen,e.defaultOpen||!1,e.onOpenChange),n=(0,f.useCallback)(()=>{o(!0)},[o]),r=(0,f.useCallback)(()=>{o(!1)},[o]),a=(0,f.useCallback)(()=>{o(!t)},[o,t]);return{isOpen:t,setOpen:o,open:n,close:r,toggle:a}}(e),l=(0,f.useMemo)(()=>`${++h}`,[]),i=(0,f.useRef)(),s=()=>{b[l]=u},c=()=>{for(let e in b)e!==l&&(b[e](!0),delete b[e])},d=()=>{clearTimeout(i.current),i.current=null,c(),s(),v=!0,r(),y&&(clearTimeout(y),y=null),w&&(clearTimeout(w),w=null)},u=e=>{e||o<=0?(clearTimeout(i.current),i.current=null,a()):i.current||(i.current=setTimeout(()=>{i.current=null,a()},o)),y&&(clearTimeout(y),y=null),v&&(w&&clearTimeout(w),w=setTimeout(()=>{delete b[l],w=null,v=!1},Math.max(500,o)))},p=()=>{c(),s(),n||y||v?n||d():y=setTimeout(()=>{y=null,v=!0,d()},t)};return(0,f.useEffect)(()=>()=>{clearTimeout(i.current),b[l]&&delete b[l]},[l]),{isOpen:n,open:e=>{e||!(t>0)||i.current?d():p()},close:u}}({delay:ed,closeDelay:eu,isDisabled:M,defaultOpen:D,isOpen:O,onOpenChange:e=>{null==I||I(e),e||null==eE||eE()}}),eP=(0,f.useRef)(null),eS=(0,f.useRef)(null),ej=(0,f.useId)(),ez=eO.isOpen&&!M;(0,f.useImperativeHandle)(c,()=>(0,s.fg)(eS));let{triggerProps:eD,tooltipProps:eB}=function(e,t,o){let{isDisabled:n,trigger:r}=e,a=(0,T.Me)(),l=(0,f.useRef)(!1),i=(0,f.useRef)(!1),s=()=>{(l.current||i.current)&&t.open(i.current)},c=e=>{l.current||i.current||t.close(e)};(0,f.useEffect)(()=>{let e=e=>{o&&o.current&&"Escape"===e.key&&(e.stopPropagation(),t.close(!0))};if(t.isOpen)return document.addEventListener("keydown",e,!0),()=>{document.removeEventListener("keydown",e,!0)}},[o,t]);let d=()=>{i.current=!1,l.current=!1,c(!0)},{hoverProps:u}=(0,k.X)({isDisabled:n,onHoverStart:()=>{"focus"!==r&&("pointer"===(0,E.Jz)()?l.current=!0:l.current=!1,s())},onHoverEnd:()=>{"focus"!==r&&(i.current=!1,l.current=!1,c())}}),{focusableProps:p}=(0,L.k)({isDisabled:n,onFocus:()=>{(0,E.E)()&&(i.current=!0,s())},onBlur:()=>{i.current=!1,l.current=!1,c(!0)}},o);return{triggerProps:{"aria-describedby":t.isOpen?a:void 0,...(0,x.d)(p,u,{onPointerDown:d,onKeyDown:d})},tooltipProps:{id:a}}}({isDisabled:M,trigger:et},eO,eP),{tooltipProps:eI}=function(e,t){let o=(0,C.z)(e,{labelable:!0}),{hoverProps:n}=(0,k.X)({onHoverStart:()=>null==t?void 0:t.open(!0),onHoverEnd:()=>null==t?void 0:t.close()});return{tooltipProps:(0,x.d)(o,n,{role:"tooltip"})}}({isOpen:ez,...(0,x.d)(r,eB)},eO),{overlayProps:eM,placement:eN,updatePosition:eJ}=function(e){let{direction:t}=(0,V.j)(),{arrowSize:o=0,targetRef:n,overlayRef:r,scrollRef:a=r,placement:l="bottom",containerPadding:i=12,shouldFlip:s=!0,boundaryElement:c="undefined"!=typeof document?document.body:null,offset:d=0,crossOffset:u=0,shouldUpdatePosition:p=!0,isOpen:m=!0,onClose:g,maxHeight:b,arrowBoundaryOffset:h=0}=e,[v,y]=(0,f.useState)({position:{},arrowOffsetLeft:void 0,arrowOffsetTop:void 0,maxHeight:void 0,placement:void 0}),w=[p,l,r.current,n.current,a.current,i,s,c,d,u,m,t,b,h,o],x=(0,f.useRef)(null==U?void 0:U.scale);(0,f.useEffect)(()=>{m&&(x.current=null==U?void 0:U.scale)},[m]);let E=(0,f.useCallback)(()=>{var e,f;if(!1===p||!m||!r.current||!n.current||!a.current||!c||(null==U?void 0:U.scale)!==x.current)return;let g=r.current;!b&&r.current&&(g.style.top="0px",g.style.bottom="",g.style.maxHeight=(null!==(f=null===(e=window.visualViewport)||void 0===e?void 0:e.height)&&void 0!==f?f:window.innerHeight)+"px");let v=function(e){let t,{placement:o,targetNode:n,overlayNode:r,scrollNode:a,padding:l,shouldFlip:i,boundaryElement:s,offset:c,crossOffset:d,maxHeight:u,arrowSize:p=0,arrowBoundaryOffset:f=0}=e,m=r instanceof HTMLElement?function(e){let t=e.offsetParent;if(t&&t===document.body&&"static"===window.getComputedStyle(t).position&&!X(t)&&(t=document.documentElement),null==t)for(t=e.parentElement;t&&!X(t);)t=t.parentElement;return t||document.documentElement}(r):document.documentElement,g=m===document.documentElement,b=window.getComputedStyle(m).position,h=g?R(n):W(n,m);if(!g){let{marginTop:e,marginLeft:t}=window.getComputedStyle(n);h.top+=parseInt(e,10)||0,h.left+=parseInt(t,10)||0}let v=R(r),y={top:parseInt((t=window.getComputedStyle(r)).marginTop,10)||0,bottom:parseInt(t.marginBottom,10)||0,left:parseInt(t.marginLeft,10)||0,right:parseInt(t.marginRight,10)||0};v.width+=y.left+y.right,v.height+=y.top+y.bottom;let w={top:a.scrollTop,left:a.scrollLeft,width:a.scrollWidth,height:a.scrollHeight},x=N(s),E=N(m),k="BODY"===s.tagName?R(m):W(m,s);return"HTML"===m.tagName&&"BODY"===s.tagName&&(E.scroll.top=0,E.scroll.left=0),function(e,t,o,n,r,a,l,i,s,c,d,u,p,f,m,g){let b=_(e),{size:h,crossAxis:v,crossSize:y,placement:w,crossPlacement:x}=b,E=H(t,i,o,b,d,u,c,p,m,g),k=d,T=A(i,c,t,r,a+d,b);if(l&&n[h]>T){let e=_(`${j[w]} ${x}`),n=H(t,i,o,e,d,u,c,p,m,g);A(i,c,t,r,a+d,e)>T&&(b=e,E=n,k=d)}let L="bottom";"top"===b.axis?"top"===b.placement?L="top":"bottom"===b.placement&&(L="bottom"):"top"===b.crossAxis&&("top"===b.crossPlacement?L="bottom":"bottom"===b.crossPlacement&&(L="top"));let C=J(v,E[v],o[y],i,s,a,c);E[v]+=C;let O=function(e,t,o,n,r,a,l,i){let s=n?o.height:t[B.height],c=null!=e.top?o.top+e.top:o.top+(s-e.bottom-l),d="top"!==i?Math.max(0,t.height+t.top+t.scroll.top-c-(r.top+r.bottom+a)):Math.max(0,c+l-(t.top+t.scroll.top)-(r.top+r.bottom+a));return Math.min(t.height-2*a,d)}(E,i,c,p,r,a,o.height,L);f&&f<O&&(O=f),o.height=Math.min(o.height,O),C=J(v,(E=H(t,i,o,b,k,u,c,p,m,g))[v],o[y],i,s,a,c),E[v]+=C;let S={},z=t[v]+.5*t[y]-E[v],D=m/2+g,I=o[y]-m/2-g,M=P(z,t[v]-E[v]+m/2,t[v]+t[y]-E[v]-m/2);return S[v]=P(M,D,I),{position:E,maxHeight:O,arrowOffsetLeft:S.left,arrowOffsetTop:S.top,placement:b.placement}}(o,h,v,w,y,l,i,x,E,k,c,d,!!b&&"static"!==b,u,p,f)}({placement:"rtl"===t?l.replace("start","right").replace("end","left"):l.replace("start","left").replace("end","right"),overlayNode:r.current,targetNode:n.current,scrollNode:a.current,padding:i,shouldFlip:s,boundaryElement:c,offset:d,crossOffset:u,maxHeight:b,arrowSize:o,arrowBoundaryOffset:h});g.style.top="",g.style.bottom="",Object.keys(v.position).forEach(e=>g.style[e]=v.position[e]+"px"),g.style.maxHeight=null!=v.maxHeight?v.maxHeight+"px":void 0,y(v)},w);(0,$.b)(E,w),(0,$.b)(()=>(window.addEventListener("resize",E,!1),()=>{window.removeEventListener("resize",E,!1)}),[E]),(0,F.y)({ref:r,onResize:E});let k=(0,f.useRef)(!1);(0,$.b)(()=>{let e;let t=()=>{k.current=!0,clearTimeout(e),e=setTimeout(()=>{k.current=!1},500),E()},o=()=>{k.current&&t()};return null==U||U.addEventListener("resize",t),null==U||U.addEventListener("scroll",o),()=>{null==U||U.removeEventListener("resize",t),null==U||U.removeEventListener("scroll",o)}},[E]);let T=(0,f.useCallback)(()=>{k.current||g()},[g,k]);return!function(e){let{triggerRef:t,isOpen:o,onClose:n}=e;(0,f.useEffect)(()=>{if(!o||null===n)return;let e=e=>{let o=e.target;if(!t.current||o instanceof Node&&!o.contains(t.current))return;let r=n||Y.get(t.current);r&&r()};return window.addEventListener("scroll",e,!0),()=>{window.removeEventListener("scroll",e,!0)}},[o,n,t])}({triggerRef:n,isOpen:m,onClose:g&&T}),{overlayProps:{style:{position:"absolute",zIndex:1e5,...v.position,maxHeight:v.maxHeight}},placement:v.placement,arrowProps:{"aria-hidden":"true",role:"presentation",style:{left:v.arrowOffsetLeft,top:v.arrowOffsetTop}},updatePosition:E}}({isOpen:ez,targetRef:eP,placement:ea(ec),overlayRef:eS,offset:ep?ef+3:ef,crossOffset:em,shouldFlip:er,containerPadding:es});(0,ei.G)(()=>{ey.length&&eJ()},ey);let{overlayProps:e_}=function(e,t){let{onClose:o,shouldCloseOnBlur:n,isOpen:r,isDismissable:a=!1,isKeyboardDismissDisabled:l=!1,shouldCloseOnInteractOutside:i}=e;(0,f.useEffect)(()=>(r&&ee.push(t),()=>{let e=ee.indexOf(t);e>=0&&ee.splice(e,1)}),[r,t]);let s=()=>{ee[ee.length-1]===t&&o&&o()};!function(e){let{ref:t,onInteractOutside:o,isDisabled:n,onInteractOutsideStart:r}=e,a=(0,f.useRef)({isPointerDown:!1,ignoreEmulatedMouseEvents:!1}),l=(0,q.i)(e=>{o&&Z(e,t)&&(r&&r(e),a.current.isPointerDown=!0)}),i=(0,q.i)(e=>{o&&o(e)});(0,f.useEffect)(()=>{let e=a.current;if(n)return;let o=t.current,r=(0,G.r)(o);if("undefined"!=typeof PointerEvent){let o=o=>{e.isPointerDown&&Z(o,t)&&i(o),e.isPointerDown=!1};return r.addEventListener("pointerdown",l,!0),r.addEventListener("pointerup",o,!0),()=>{r.removeEventListener("pointerdown",l,!0),r.removeEventListener("pointerup",o,!0)}}{let o=o=>{e.ignoreEmulatedMouseEvents?e.ignoreEmulatedMouseEvents=!1:e.isPointerDown&&Z(o,t)&&i(o),e.isPointerDown=!1},n=o=>{e.ignoreEmulatedMouseEvents=!0,e.isPointerDown&&Z(o,t)&&i(o),e.isPointerDown=!1};return r.addEventListener("mousedown",l,!0),r.addEventListener("mouseup",o,!0),r.addEventListener("touchstart",l,!0),r.addEventListener("touchend",n,!0),()=>{r.removeEventListener("mousedown",l,!0),r.removeEventListener("mouseup",o,!0),r.removeEventListener("touchstart",l,!0),r.removeEventListener("touchend",n,!0)}}},[t,n,l,i])}({ref:t,onInteractOutside:a&&r?e=>{(!i||i(e.target))&&(ee[ee.length-1]===t&&(e.stopPropagation(),e.preventDefault()),s())}:null,onInteractOutsideStart:e=>{(!i||i(e.target))&&ee[ee.length-1]===t&&(e.stopPropagation(),e.preventDefault())}});let{focusWithinProps:c}=(0,Q.L)({isDisabled:!n,onBlurWithin:e=>{!(!e.relatedTarget||(0,K.cW)(e.relatedTarget))&&(!i||i(e.relatedTarget))&&o()}});return{overlayProps:{onKeyDown:e=>{"Escape"!==e.key||l||e.nativeEvent.isComposing||(e.stopPropagation(),e.preventDefault(),s())},...c},underlayProps:{onPointerDown:e=>{e.target===e.currentTarget&&e.preventDefault()}}}}({isOpen:ez,onClose:eO.close,isDismissable:eg,shouldCloseOnBlur:eb,isKeyboardDismissDisabled:ev,shouldCloseOnInteractOutside:ew},eS),eH=(0,f.useMemo)(()=>{var t,o,n;return eo({...a,disableAnimation:eC,radius:null!=(t=null==e?void 0:e.radius)?t:"md",size:null!=(o=null==e?void 0:e.size)?o:"md",shadow:null!=(n=null==e?void 0:e.shadow)?n:"sm"})},[(0,d.Xx)(a),eC,null==e?void 0:e.radius,null==e?void 0:e.size,null==e?void 0:e.shadow]),eA=(0,f.useCallback)((e={},t=null)=>({...(0,x.d)(eD,e),ref:(0,en.l)(t,eP),"aria-describedby":ez?ej:void 0}),[eD,ez,ej,eO]),eR=(0,f.useCallback)(()=>({ref:eS,"data-slot":"base","data-open":(0,p.PB)(ez),"data-arrow":(0,p.PB)(ep),"data-disabled":(0,p.PB)(M),"data-placement":el(eN,ec),...(0,x.d)(eI,e_,eL),style:(0,x.d)(eM.style,eL.style,r.style),className:eH.base({class:null==eT?void 0:eT.base}),id:ej}),[eH,ez,ep,M,eN,ec,eI,e_,eL,eM,r,ej]),eW=(0,f.useCallback)(()=>({"data-slot":"content","data-open":(0,p.PB)(ez),"data-arrow":(0,p.PB)(ep),"data-disabled":(0,p.PB)(M),"data-placement":el(eN,ec),className:eH.content({class:(0,u.W)(null==eT?void 0:eT.content,ex)})}),[eH,ez,ep,M,eN,ec,eT]);return{Component:m||"div",content:S,children:z,isOpen:ez,triggerRef:eP,showArrow:ep,portalContainer:eh,placement:ec,disableAnimation:eC,isDisabled:M,motionProps:ek,getTooltipContentProps:eW,getTriggerProps:eA,getTooltipProps:eR}}({...e,ref:t});try{let e=f.Children.count(r);if(1!==e)throw Error();o=(0,f.isValidElement)(r)?(0,f.cloneElement)(r,D(r.props,r.ref)):(0,eb.jsx)("p",{...D(),children:r})}catch(e){o=(0,eb.jsx)("span",{}),function(e,t,...o){var n;let r=`[Next UI] : ${e}`;"undefined"==typeof console||eg[r]||(eg[r]=!0,(null==(n=null==em?void 0:em.env)?void 0:n.NODE_ENV)==="production")||console.warn(r,o)}("Tooltip must have only one child node. Please, check your code.")}let{ref:et,id:eh,style:ev,...ey}=I(),ew=(0,eb.jsx)("div",{ref:et,id:eh,style:ev,children:(0,eb.jsx)(ec.X,{features:ed.H,children:(0,eb.jsx)(eu.m.div,{animate:"enter",exit:"exit",initial:"exit",variants:ef.y7.scaleSpring,...(0,x.d)(z,ey),style:{...er(O)},children:(0,eb.jsx)(n,{...M(),children:a})})})});return(0,eb.jsxs)(eb.Fragment,{children:[o,S&&c?(0,eb.jsx)(es.Xj,{portalContainer:m,children:(0,eb.jsx)("div",{ref:et,id:eh,style:ev,...ey,children:(0,eb.jsx)(n,{...M(),children:a})})}):(0,eb.jsx)(ep.M,{children:c?(0,eb.jsx)(es.Xj,{portalContainer:m,children:ew}):null})]})});eh.displayName="NextUI.Tooltip";var ev=e=>(0,eb.jsxs)("svg",{"aria-hidden":"true",fill:"none",focusable:"false",height:"1em",role:"presentation",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",viewBox:"0 0 24 24",width:"1em",...e,children:[(0,eb.jsx)("path",{d:"M16 17.1c0 3.5-1.4 4.9-4.9 4.9H6.9C3.4 22 2 20.6 2 17.1v-4.2C2 9.4 3.4 8 6.9 8h4.2c3.5 0 4.9 1.4 4.9 4.9Z"}),(0,eb.jsx)("path",{d:"M8 8V6.9C8 3.4 9.4 2 12.9 2h4.2C20.6 2 22 3.4 22 6.9v4.2c0 3.5-1.4 4.9-4.9 4.9H16"}),(0,eb.jsx)("path",{d:"M16 12.9C16 9.4 14.6 8 11.1 8"})]}),ey=e=>(0,eb.jsx)("svg",{"aria-hidden":"true",fill:"none",focusable:"false",height:"1em",role:"presentation",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,viewBox:"0 0 24 24",width:"1em",...e,children:(0,eb.jsx)("polyline",{points:"20 6 9 17 4 12"})}),ew=o(3373),ex=(0,i.Gp)((e,t)=>{let{Component:o,domRef:n,preRef:r,children:g,slots:b,classNames:h,copied:v,copyIcon:y=(0,eb.jsx)(ev,{}),checkIcon:w=(0,eb.jsx)(ey,{}),symbolBefore:x,disableCopy:E,disableTooltip:k,hideSymbol:T,hideCopyButton:L,tooltipProps:C,isMultiLine:O,onCopy:P,getSnippetProps:S,getCopyButtonProps:j}=function(e){var t,o,n,r;let g=(0,l.w)(),[b,h]=(0,i.oe)(e,a.variantKeys),{ref:v,as:y,children:w,symbol:x="$",classNames:E,timeout:k,copyIcon:T,checkIcon:L,codeString:C,disableCopy:O=!1,disableTooltip:P=!1,hideCopyButton:S=!1,autoFocus:j=!1,hideSymbol:z=!1,onCopy:D,tooltipProps:B={},copyButtonProps:I={},className:M,...N}=b,J=y||"div",_="string"==typeof J,H=null!=(o=null!=(t=null==e?void 0:e.disableAnimation)?t:null==g?void 0:g.disableAnimation)&&o,A={offset:15,delay:1e3,content:"Copy to clipboard",color:null!=(r=null==e?void 0:e.color)?r:null==(n=a.defaultVariants)?void 0:n.color,isDisabled:b.disableCopy,...B},R=(0,s.gy)(v),W=(0,f.useRef)(null),{copy:X,copied:Y}=function({timeout:e=2e3}={}){let[t,o]=(0,f.useState)(null),[n,r]=(0,f.useState)(!1),[a,l]=(0,f.useState)(null),i=()=>{a&&clearTimeout(a)},s=t=>{i(),l(setTimeout(()=>r(!1),e)),r(t)};return{copy:e=>{"clipboard"in navigator?navigator.clipboard.writeText(e).then(()=>s(!0)).catch(e=>o(e)):o(Error("useClipboard: navigator.clipboard is not supported"))},reset:()=>{r(!1),o(null),i()},error:t,copied:n}}({timeout:k}),$=w&&Array.isArray(w),{isFocusVisible:F,isFocused:V,focusProps:U}=(0,m.F)({autoFocus:j}),K=(0,f.useMemo)(()=>a({...h,disableAnimation:H}),[(0,d.Xx)(h),H]),q=(0,f.useMemo)(()=>{if(!x||"string"!=typeof x)return x;let e=x.trim();return e?`${e} `:""},[x]),G=(0,u.W)(null==E?void 0:E.base,M),Z=(0,f.useCallback)(()=>({className:K.base({class:G}),...(0,c.z)(N,{enabled:_})}),[K,G,$,N]),Q=(0,f.useCallback)(()=>{var e;if(O)return;let t="";"string"==typeof w?t=w:Array.isArray(w)&&w.forEach(e=>{var o,n;let r="string"==typeof e?e:null==(n=null==(o=null==e?void 0:e.props)?void 0:o.children)?void 0:n.toString();r&&(t+=r+"\n")});let o=C||t||(null==(e=W.current)?void 0:e.textContent)||"";X(o),null==D||D(o)},[X,C,O,D,w]),ee={"aria-label":"string"==typeof A.content?A.content:"Copy to clipboard",size:"sm",variant:"light",isDisabled:O,onPress:Q,isIconOnly:!0,...I},et=(0,f.useCallback)(()=>({...ee,"data-copied":(0,p.PB)(Y),className:K.copyButton({class:(0,u.W)(null==E?void 0:E.copyButton)})}),[K,F,V,O,null==E?void 0:E.copyButton,ee,U]);return{Component:J,as:y,domRef:R,preRef:W,children:w,slots:K,classNames:E,copied:Y,onCopy:Q,copyIcon:T,checkIcon:L,symbolBefore:q,isMultiLine:$,isFocusVisible:F,hideCopyButton:S,disableCopy:O,disableTooltip:P,hideSymbol:z,tooltipProps:A,getSnippetProps:Z,getCopyButtonProps:et}}({...e,ref:t}),z=(0,f.useCallback)(({children:e})=>(0,eb.jsx)(eh,{...C,isDisabled:v||C.isDisabled,children:e}),[(0,d.Xx)(C)]),D=(0,f.useMemo)(()=>{if(L)return null;let e=w&&(0,f.cloneElement)(w,{className:b.checkIcon()}),t=y&&(0,f.cloneElement)(y,{className:b.copyIcon()}),o=(0,eb.jsxs)(ew.A,{...j(),children:[e,t]});return k?o:(0,eb.jsx)(z,{children:o})},[b,null==h?void 0:h.copyButton,v,w,y,P,z,E,k,L]),B=(0,f.useMemo)(()=>O&&g&&Array.isArray(g)?(0,eb.jsx)("div",{className:b.content({class:null==h?void 0:h.content}),children:g.map((e,t)=>(0,eb.jsxs)("pre",{className:b.pre({class:null==h?void 0:h.pre}),children:[!T&&(0,eb.jsx)("span",{className:b.symbol({class:null==h?void 0:h.symbol}),children:x}),e]},`${t}-${e}`))}):(0,eb.jsxs)("pre",{ref:r,className:b.pre({class:null==h?void 0:h.pre}),children:[!T&&(0,eb.jsx)("span",{className:b.symbol({class:null==h?void 0:h.symbol}),children:x}),g]}),[g,T,O,x,null==h?void 0:h.pre,b]);return(0,eb.jsxs)(o,{ref:n,...S(),children:[B,D]})});ex.displayName="NextUI.Snippet";var eE=ex},9211:function(e,t,o){"use strict";o.d(t,{j:function(){return h}});let n=new Set(["Arab","Syrc","Samr","Mand","Thaa","Mend","Nkoo","Adlm","Rohg","Hebr"]),r=new Set(["ae","ar","arc","bcc","bqi","ckb","dv","fa","glk","he","ku","mzn","nqo","pnb","ps","sd","ug","ur","yi"]);var a=o(5271);let l={prefix:String(Math.round(1e10*Math.random())),current:0},i=(a.createContext(l),a.createContext(!1));function s(){return!1}function c(){return!0}function d(e){return()=>{}}"undefined"!=typeof window&&window.document&&window.document.createElement,new WeakMap,a.useId;let u=Symbol.for("react-aria.i18n.locale");function p(){let e="undefined"!=typeof window&&window[u]||"undefined"!=typeof navigator&&(navigator.language||navigator.userLanguage)||"en-US";try{Intl.DateTimeFormat.supportedLocalesOf([e])}catch(t){e="en-US"}return{locale:e,direction:!function(e){if(Intl.Locale){let t=new Intl.Locale(e).maximize(),o="function"==typeof t.getTextInfo?t.getTextInfo():t.textInfo;if(o)return"rtl"===o.direction;if(t.script)return n.has(t.script)}let t=e.split("-")[0];return r.has(t)}(e)?"ltr":"rtl"}}let f=p(),m=new Set;function g(){for(let e of(f=p(),m))e(f)}let b=a.createContext(null);function h(){let e=function(){let e="function"==typeof a.useSyncExternalStore?a.useSyncExternalStore(d,s,c):(0,a.useContext)(i),[t,o]=(0,a.useState)(f);return((0,a.useEffect)(()=>(0===m.size&&window.addEventListener("languagechange",g),m.add(o),()=>{m.delete(o),0===m.size&&window.removeEventListener("languagechange",g)}),[]),e)?{locale:"en-US",direction:"ltr"}:t}();return(0,a.useContext)(b)||e}},2518:function(e,t,o){"use strict";o.d(t,{z:function(){return r}});var n=o(5271);function r(e,t,o){let[r,a]=(0,n.useState)(e||t),l=(0,n.useRef)(void 0!==e),i=void 0!==e;(0,n.useEffect)(()=>{let e=l.current;e!==i&&console.warn(`WARN: A component changed from ${e?"controlled":"uncontrolled"} to ${i?"controlled":"uncontrolled"}.`),l.current=i},[i]);let s=i?e:r,c=(0,n.useCallback)((e,...t)=>{let n=(e,...t)=>{o&&!Object.is(s,e)&&o(e,...t),i||(s=e)};"function"==typeof e?(console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"),a((o,...r)=>{let a=e(i?s:o,...r);return(n(a,...t),i)?o:a})):(i||a(e),n(e,...t))},[i,s,o]);return[s,c]}}}]);