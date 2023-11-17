"use strict";(self.webpackChunkes_docs=self.webpackChunkes_docs||[]).push([[7086],{4137:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>f});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function p(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),s=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):p(p({},t),e)),o},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=s(o),m=n,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return o?r.createElement(f,p(p({ref:t},c),{},{components:o})):r.createElement(f,p({ref:t},c))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,p=new Array(i);p[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:n,p[1]=a;for(var s=2;s<i;s++)p[s]=o[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},1154:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>s});var r=o(7462),n=(o(7294),o(4137));const i={},p="Spawn Point",a={unversionedId:"room-editor/logic_props/spawn_point",id:"room-editor/logic_props/spawn_point",title:"Spawn Point",description:"Spawn Point Selector",source:"@site/docs/room-editor/logic_props/spawn_point.md",sourceDirName:"room-editor/logic_props",slug:"/room-editor/logic_props/spawn_point",permalink:"/docs/room-editor/logic_props/spawn_point",draft:!1,editUrl:"https://github.com/SuperJura/ESDocs/blob/main/docs/room-editor/logic_props/spawn_point.md",tags:[],version:"current",frontMatter:{},sidebar:"roomEditorSidebar",previous:{title:"Sound",permalink:"/docs/room-editor/logic_props/sound"},next:{title:"Teleport",permalink:"/docs/room-editor/logic_props/teleport"}},l={},s=[],c={toc:s},u="wrapper";function d(e){let{components:t,...i}=e;return(0,n.kt)(u,(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"spawn-point"},"Spawn Point"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Spawn Point Selector",src:o(1539).Z,width:"1914",height:"1073"})),(0,n.kt)("p",null,"A logic prop that determines the starting position and rotation of all players. Multiple Spawn Points can be added so that people playing in multiplayer do not spawn in the same position when starting the room. "),(0,n.kt)("p",null,"You can also separate players into 2 or more groups by placing 2 or more Spawn Points. Groups of players playing in multiplayer will spawn evenly across all available Spawn Points."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"If no spawn points exist in the room the players will spawn on position 0, 0, 0.")))}d.isMDXComponent=!0},1539:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/Spawn_Point-Selector-ecab5b9f70aa340c633da717b84df59f.png"}}]);