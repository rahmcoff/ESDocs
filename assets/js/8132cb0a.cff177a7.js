"use strict";(self.webpackChunkes_docs=self.webpackChunkes_docs||[]).push([[9949],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var r=i.createContext({}),d=function(e){var t=i.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return i.createElement(r.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,r=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=d(n),u=o,m=h["".concat(r,".").concat(u)]||h[u]||c[u]||a;return n?i.createElement(m,l(l({ref:t},p),{},{components:n})):i.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=u;var s={};for(var r in t)hasOwnProperty.call(t,r)&&(s[r]=t[r]);s.originalType=e,s[h]="string"==typeof e?e:o,l[1]=s;for(var d=2;d<a;d++)l[d]=n[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},30334:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var i=n(87462),o=(n(67294),n(3905));const a={},l="Slidable",s={unversionedId:"room-editor/behaviours/slidable",id:"room-editor/behaviours/slidable",title:"Slidable",description:"Allows you to slide a prop between 2 points.",source:"@site/docs/room-editor/behaviours/slidable.md",sourceDirName:"room-editor/behaviours",slug:"/room-editor/behaviours/slidable",permalink:"/docs/room-editor/behaviours/slidable",draft:!1,editUrl:"https://github.com/SuperJura/ESDocs/blob/main/docs/room-editor/behaviours/slidable.md",tags:[],version:"current",frontMatter:{},sidebar:"roomEditorSidebar",previous:{title:"Drag Target (WIP)",permalink:"/docs/room-editor/behaviours/drag_target"},next:{title:"Room Editor - Videos",permalink:"/docs/category/room-editor---videos"}},r={},d=[{value:"Properties",id:"properties",level:2},{value:"\ud83d\udd38Edit End Node",id:"edit-end-node",level:3},{value:"\ud83d\udd38Snap Mode",id:"snap-mode",level:3},{value:"\ud83d\udd38Additional Snap Points",id:"additional-snap-points",level:3},{value:"\ud83d\udd38Locks",id:"locks",level:3},{value:"\ud83d\udd38Starting Node",id:"starting-node",level:3},{value:"\ud83d\udd38Snap Animation Duration",id:"snap-animation-duration",level:3},{value:"Common uses",id:"common-uses",level:2}],p={toc:d},h="wrapper";function c(e){let{components:t,...a}=e;return(0,o.kt)(h,(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"slidable"},"Slidable"),(0,o.kt)("p",null,"Allows you to slide a prop between 2 points."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Slidable",src:n(10546).Z,width:"1411",height:"908"})),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"edit-end-node"},"\ud83d\udd38Edit End Node"),(0,o.kt)("div",{className:"highlight-div"},"Position of the slidable node with the last index."),(0,o.kt)("p",null,"Clicking the button will open the special Slidable settings screen where you can set the final position of the Slidable."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Slidable - Edit End Node",src:n(52709).Z,width:"1114",height:"622"})),(0,o.kt)("p",null,"Here you can move the camera as you move it in the Room Editor (holding right click and using the WASDQE keys for movement) and move the position of the Slidable prop. Rotation and scale changes will not be regarded for the Slidable."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Only the props that are set as children to the prop with the Slidable behaviour will be used for sliding.")),(0,o.kt)("h3",{id:"snap-mode"},"\ud83d\udd38Snap Mode"),(0,o.kt)("div",{className:"highlight-div"},"No Snapping - No snapping will be performed on release. Closest - Snap to the closest snap point on release. Starting - Snap to the starting point on release."),(0,o.kt)("p",null,"Snap mode determines what the Slidable should do after the player lets go of the Slidable. That affects the position of the Slidable and when the connected Locks will be notified of the player stopping the interaction. The output values are determined by closeness. The snap point closest to the slidable will determine the output value."),(0,o.kt)("p",null,"The examples below demonstrates each mode, with the output value being shown above the Slidable. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"No Snapping"))),(0,o.kt)("p",null,"The Slidable will stay at the position it was let go at and the output value will immediately be sent to the locks."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Snap mode - No snapping",src:n(44967).Z,width:"1105",height:"299"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Closest"))),(0,o.kt)("p",null,"The Slidable will animate to the closest snap position when let go. The output value will be sent to the connected locks as soon as the Slidable is done animating to the closest snap position."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Snap mode - Closest",src:n(99322).Z,width:"1109",height:"308"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Starting"))),(0,o.kt)("p",null,"The Slidable will animate to the Starting Node when let go. The output value will be sent to the connected locks as soon as the player stops the interaction. The Starting Node can be set by another setting."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Snap mode - Starting",src:n(91424).Z,width:"1103",height:"290"})),(0,o.kt)("h3",{id:"additional-snap-points"},"\ud83d\udd38Additional Snap Points"),(0,o.kt)("div",{className:"highlight-div"},"Number of additional snap points between nodes. If zero, snap is performed between start and end nodes."),(0,o.kt)("p",null,"Here you can add additional snap points on the line. e.g. if you want a total of 5 snap points, you'll write 3 here, because the start and end points are not counted."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Snap points",src:n(72382).Z,width:"1008",height:"218"})),(0,o.kt)("h3",{id:"locks"},"\ud83d\udd38Locks"),(0,o.kt)("div",{className:"highlight-div"},"Target locks will receive the node index of the closest node, starting from 0 to the number of nodes - 1. For the snap to 'Closest' mode the 'On Change' triggers when snapping is completed, for other modes it is triggered on release."),(0,o.kt)("p",null,"This is where you will select which Locks (and their value position) you want the Slidable to send it's current position to. "),(0,o.kt)("h3",{id:"starting-node"},"\ud83d\udd38Starting Node"),(0,o.kt)("div",{className:"highlight-div"},"Set the index of the position you want the 'Slidable' to start at."),(0,o.kt)("p",null,"This will be the starting position when starting the room and the return point if the snap mode ",(0,o.kt)("inlineCode",{parentName:"p"},"Starting")," was chosen. The indexing of the nodes does not change and they will return the same values as with the default 0 starting node."),(0,o.kt)("h3",{id:"snap-animation-duration"},"\ud83d\udd38Snap Animation Duration"),(0,o.kt)("div",{className:"highlight-div"},"Snap animation duration in seconds. If zero, snapping will not be animated. Default is 0.3."),(0,o.kt)("p",null,"This duration in seconds show the amount of time it will take the Slidable to traverse the distance from one node to the other."),(0,o.kt)("p",null,"e.g. If the snapping mode ",(0,o.kt)("inlineCode",{parentName:"p"},"Closest")," is selected and the player releases the Slidable right in the middle of two nodes, the time it takes the slidable to snap to the closest node will be half the Snap Animation Duration."),(0,o.kt)("p",null,"e.g. If the snapping mode ",(0,o.kt)("inlineCode",{parentName:"p"},"Starting")," is selected and the player releases the Slidable three nodes away from the Starting node, it will take the Slidable 3 times the Snap Animation Duration."),(0,o.kt)("h2",{id:"common-uses"},"Common uses"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add to drawers that can be opened via sliding.")))}c.isMDXComponent=!0},99322:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/slidable_closest-3a68eba6d7346b5ac5682b93e7726f37.gif"},44967:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/slidable_noSnapping-ec1f4ca12c17b9b8522b2f1e3986d6d4.gif"},10546:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/slidable_selector-93472fc553a5a1e76089c60918b45743.png"},52709:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/slidable_settings-ef4603ebafd8333b108cd5ceb7512838.png"},72382:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/slidable_snapPoints-47a6660d3905a6aa36e9a8e0bd1abba1.png"},91424:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/slidable_starting-958e2cc04eb611c8a2d8c07e81eb8897.gif"}}]);