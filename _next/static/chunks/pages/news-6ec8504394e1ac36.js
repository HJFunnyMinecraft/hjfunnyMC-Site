(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[134],{6886:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/news",function(){return n(7328)}])},7328:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w}});var r=n(2676),a=n(5271),o=n(2484),i=n(4779),s=(0,i.tv)({slots:{base:["group","relative","overflow-hidden","bg-content3 dark:bg-content2","pointer-events-none","before:opacity-100","before:absolute","before:inset-0","before:-translate-x-full","before:animate-[shimmer_2s_infinite]","before:border-t","before:border-content4/30","before:bg-gradient-to-r","before:from-transparent","before:via-content4","dark:before:via-default-700/10","before:to-transparent","after:opacity-100","after:absolute","after:inset-0","after:-z-10","after:bg-content3","dark:after:bg-content2","data-[loaded=true]:pointer-events-auto","data-[loaded=true]:overflow-visible","data-[loaded=true]:!bg-transparent","data-[loaded=true]:before:opacity-0 data-[loaded=true]:before:animate-none","data-[loaded=true]:after:opacity-0"],content:["opacity-0","group-data-[loaded=true]:opacity-100"]},variants:{disableAnimation:{true:{base:"before:animate-none before:transition-none after:transition-none",content:"transition-none"},false:{base:"transition-background !duration-300 before:transition-opacity before:!duration-300",content:"transition-opacity motion-reduce:transition-none !duration-300"}}},defaultVariants:{}}),l=n(248),d=n(7851),c=n(6513),u=n(8625),f=(0,o.Gp)((e,t)=>{let{Component:n,children:i,getSkeletonProps:f,getContentProps:p}=function(e){var t,n;let r=(0,u.w)(),[i,f]=(0,o.oe)(e,s.variantKeys),{as:p,children:b,isLoaded:v=!1,className:m,classNames:h,...x}=i,j=null!=(n=null!=(t=e.disableAnimation)?t:null==r?void 0:r.disableAnimation)&&n,y=(0,a.useMemo)(()=>s({...f,disableAnimation:j}),[(0,l.Xx)(f),j,b]),N=(0,d.W)(null==h?void 0:h.base,m);return{Component:p||"div",children:b,slots:y,classNames:h,getSkeletonProps:(e={})=>({"data-loaded":(0,c.PB)(v),className:y.base({class:(0,d.W)(N,null==e?void 0:e.className)}),...x}),getContentProps:(e={})=>({className:y.content({class:(0,d.W)(null==h?void 0:h.content,null==e?void 0:e.className)})})}}({...e});return(0,r.jsx)(n,{ref:t,...f(),children:(0,r.jsx)("div",{...p(),children:i})})});f.displayName="NextUI.Skeleton";var p=n(8654),b=n(7292),v=n(1150),m=n(7212),h=n(7723),x=n(3898),j=(0,o.Gp)((e,t)=>{var n;let{as:a,className:o,children:i,...s}=e,l=(0,x.gy)(t),{slots:c,classNames:u}=(0,h.R)(),f=(0,d.W)(null==u?void 0:u.footer,o);return(0,r.jsx)(a||"div",{ref:l,className:null==(n=c.footer)?void 0:n.call(c,{class:f}),...s,children:i})});j.displayName="NextUI.CardFooter";var y=n(2259),N=(0,i.tv)({base:"shrink-0 bg-divider border-none",variants:{orientation:{horizontal:"w-full h-divider",vertical:"h-full w-divider"}},defaultVariants:{orientation:"horizontal"}}),g=(0,o.Gp)((e,t)=>{let{Component:n,getDividerProps:o}=function(e){var t;let n,r;let{as:o,className:i,orientation:s,...l}=e,d=o||"hr";"hr"===d&&"vertical"===s&&(d="div");let{separatorProps:c}=(t={elementType:"string"==typeof d?d:"hr",orientation:s},r=(0,y.z)(t,{enabled:"string"==typeof t.elementType}),("vertical"===t.orientation&&(n="vertical"),"hr"!==t.elementType)?{separatorProps:{...r,role:"separator","aria-orientation":n}}:{separatorProps:r}),u=(0,a.useMemo)(()=>N({orientation:s,className:i}),[s,i]);return{Component:d,getDividerProps:(0,a.useCallback)((e={})=>({className:u,role:"separator","data-orientation":s,...c,...l,...e}),[u,s,c,l])}}({...e});return(0,r.jsx)(n,{ref:t,...o()})});g.displayName="NextUI.Divider";var _=n(5842);function k(e){let t=e.publishtime.replace("T"," ").replace("Z","");return(0,r.jsxs)(p.w,{className:"mt-5 p-1",children:[(0,r.jsx)(v.u,{children:(0,r.jsx)(_.O,{href:e.url,children:(0,r.jsx)("h2",{dangerouslySetInnerHTML:{__html:e.title},className:"font-bold"})})}),(0,r.jsx)(m.G,{children:(0,r.jsx)("p",{dangerouslySetInnerHTML:{__html:e.description}})}),(0,r.jsx)(g,{}),(0,r.jsx)(j,{children:(0,r.jsx)("p",{children:t})})]})}function w(){let[e,t]=(0,a.useState)([]),[n,o]=(0,a.useState)(!0);return(0,a.useEffect)(()=>{fetch("https://mc.hjfunny.site/wp-json/wp/v2/posts?per_page=20").then(e=>e.json()).then(e=>{t(e),o(!1)})},[]),(0,r.jsx)(b.Z,{children:(0,r.jsxs)("section",{className:"max-w-6xl mx-auto px-10 py-5 my-8",children:[(0,r.jsx)("h1",{className:"text-lg font-bold",children:"最近新闻"}),n?(0,r.jsxs)(p.w,{className:"mt-5 p-8",children:[(0,r.jsx)(f,{className:"rounded-lg mb-2",children:(0,r.jsx)("h2",{children:"Skeleton"})}),(0,r.jsx)(f,{className:"rounded-lg",children:(0,r.jsxs)("h2",{children:["Skeleton",(0,r.jsx)("br",{}),"Skeleton",(0,r.jsx)("br",{}),"Skeleton",(0,r.jsx)("br",{}),"Skeleton"]})})]}):e.map(e=>(0,r.jsx)(k,{description:e.excerpt.rendered,publishtime:e.date,title:e.title.rendered,url:"/post/".concat(e.slug)},e.id))]})})}},7212:function(e,t,n){"use strict";n.d(t,{G:function(){return d}});var r=n(7723),a=n(2484),o=n(3898),i=n(7851),s=n(2676),l=(0,a.Gp)((e,t)=>{var n;let{as:a,className:l,children:d,...c}=e,u=(0,o.gy)(t),{slots:f,classNames:p}=(0,r.R)(),b=(0,i.W)(null==p?void 0:p.body,l);return(0,s.jsx)(a||"div",{ref:u,className:null==(n=f.body)?void 0:n.call(f,{class:b}),...c,children:d})});l.displayName="NextUI.CardBody";var d=l},1150:function(e,t,n){"use strict";n.d(t,{u:function(){return d}});var r=n(7723),a=n(2484),o=n(3898),i=n(7851),s=n(2676),l=(0,a.Gp)((e,t)=>{var n;let{as:a,className:l,children:d,...c}=e,u=(0,o.gy)(t),{slots:f,classNames:p}=(0,r.R)(),b=(0,i.W)(null==p?void 0:p.header,l);return(0,s.jsx)(a||"div",{ref:u,className:null==(n=f.header)?void 0:n.call(f,{class:b}),...c,children:d})});l.displayName="NextUI.CardHeader";var d=l}},function(e){e.O(0,[335,292,888,774,179],function(){return e(e.s=6886)}),_N_E=e.O()}]);