"use strict";(self.webpackChunkes_docs=self.webpackChunkes_docs||[]).push([[4131],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),m=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=m(r),d=a,f=u["".concat(p,".").concat(d)]||u[d]||c[d]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var m=2;m<o;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},27947:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var n=r(87462),a=(r(67294),r(3905));const o={title:"Room Editor 2.0",authors:["pine"],tags:["update","room-editor"]},i=void 0,l={permalink:"/blog/2022/06/06/room-editor-two",editUrl:"https://github.com/SuperJura/ESDocs/blob/main/blog/2022-06-06-room-editor-two/index.md",source:"@site/blog/2022-06-06-room-editor-two/index.md",title:"Room Editor 2.0",description:"PATCH NOTES",date:"2022-06-06T00:00:00.000Z",formattedDate:"June 6, 2022",tags:[{label:"update",permalink:"/blog/tags/update"},{label:"room-editor",permalink:"/blog/tags/room-editor"}],readingTime:1.235,hasTruncateMarker:!1,authors:[{name:"Pine",title:"Pine",url:"https://pinestudio.com",imageURL:"https://imgur.com/U37K2eR.png",key:"pine"}],frontMatter:{title:"Room Editor 2.0",authors:["pine"],tags:["update","room-editor"]},prevItem:{title:"70's room",permalink:"/blog/2022/09/22/seventies-room"},nextItem:{title:"Steampunk DLC",permalink:"/blog/2022/06/06/steampunk-dlc"}},p={authorsImageUrls:[void 0]},m=[{value:"PATCH NOTES",id:"patch-notes",level:2}],s={toc:m},u="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"patch-notes"},"PATCH NOTES"),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h4",null,"Room Editor")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Added Light prop, now you can add custom lightning and it comes with better performance! ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Added post-processing prop, change the ambient of your rooms. ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Added zoomable behavior, no more zooming to locks ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Added scripting custom rooms using Lua")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"More flexible than current setup, but you Lua programming knowledge is required. ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Added Custom Drag behavior specifically for scripting. It gives you more control over object interactions.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Added loading custom models as props, you can create musical instruments using primitive objects or import one from .gltf file! ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"UX tweak: Changed from behavior buttons to a dropdown (Button, Animation, Turnable,...)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Menu UI scale fix for smaller screens ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Added Discord Rich Presence, show others what awesome rooms you are playing")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"scripting props need to be enabled in the room config - only to view them in the menu, doesn't affect loading or saving")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"exposed the Vector3 and Quaternion class for static methods")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"now it's possible to lua functions to chat so players can trigger them")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"access to player IDs + teleport specific players")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"importing a lua object should now copy the lua file as well")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"collider dropdown added - None/Box/ConvexMesh/ConcaveMesh")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"shiny material issue fixed")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"cross platform loading of custom models fixed")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'new event: LuaCallType.ChatCommand when players write "/something"')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Vector/Quaternion exposed")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"new functions for players: getAllPlayers, getLocalPlayer, getClosestPlayer, getMainPlayer")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"new function for teleporting: teleportPlayer")))))}c.isMDXComponent=!0}}]);