"use strict";(self.webpackChunkdocusaurus_starter=self.webpackChunkdocusaurus_starter||[]).push([[671],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9881:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:1},i="Tutorial Intro",s={unversionedId:"intro",id:"intro",title:"Tutorial Intro",description:"Let's discover Docusaurus in less than 5 minutes.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Create a Page",permalink:"/docs/tutorial-basics/create-a-page"}},u={},l=[{value:"Getting Started",id:"getting-started",level:2},{value:"Generate a new site",id:"generate-a-new-site",level:2},{value:"Start your site",id:"start-your-site",level:2}],c={toc:l};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tutorial-intro"},"Tutorial Intro"),(0,a.kt)("p",null,"Let's discover ",(0,a.kt)("strong",{parentName:"p"},"Docusaurus in less than 5 minutes"),"."),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,"Get started by ",(0,a.kt)("strong",{parentName:"p"},"creating a new site"),"."),(0,a.kt)("p",null,"Or ",(0,a.kt)("strong",{parentName:"p"},"try Docusaurus immediately")," with ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://new.docusaurus.io"},"new.docusaurus.io")),"."),(0,a.kt)("h2",{id:"generate-a-new-site"},"Generate a new site"),(0,a.kt)("p",null,"Generate a new Docusaurus site using the ",(0,a.kt)("strong",{parentName:"p"},"classic template"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npx @docusaurus/init@latest init my-website classic\n")),(0,a.kt)("h2",{id:"start-your-site"},"Start your site"),(0,a.kt)("p",null,"Run the development server:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cd my-website\n\nnpx docusaurus start\n")),(0,a.kt)("p",null,"Your site starts at ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:3000"),"."),(0,a.kt)("p",null,"Open ",(0,a.kt)("inlineCode",{parentName:"p"},"docs/intro.md")," and edit some lines: the site ",(0,a.kt)("strong",{parentName:"p"},"reloads automatically")," and display your changes."))}p.isMDXComponent=!0}}]);