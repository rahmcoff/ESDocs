"use strict";(self.webpackChunkes_docs=self.webpackChunkes_docs||[]).push([[8936],{4137:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=u(r),p=o,m=h["".concat(l,".").concat(p)]||h[p]||d[p]||i;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},7179:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=r(7462),o=(r(7294),r(4137));const i={},a="Turnable",s={unversionedId:"room-editor/behaviours/turnable",id:"room-editor/behaviours/turnable",title:"Turnable",description:"Turnables are used as inputs for locks. They can give a range of values as output, starting with 0 and ending with the number of steps you assign -1",source:"@site/docs/room-editor/behaviours/turnable.md",sourceDirName:"room-editor/behaviours",slug:"/room-editor/behaviours/turnable",permalink:"/docs/room-editor/behaviours/turnable",draft:!1,editUrl:"https://github.com/SuperJura/ESDocs/blob/main/docs/room-editor/behaviours/turnable.md",tags:[],version:"current",frontMatter:{},sidebar:"roomEditorSidebar",previous:{title:"Button",permalink:"/docs/room-editor/behaviours/button"},next:{title:"Dial",permalink:"/docs/room-editor/behaviours/dial"}},l={},u=[{value:"Properties",id:"properties",level:2},{value:"\ud83d\udd38WORLD AXIS",id:"world-axis",level:3},{value:"\ud83d\udd38SCREEN AXIS",id:"screen-axis",level:3},{value:"\ud83d\udd38STEPS",id:"steps",level:3},{value:"\ud83d\udd38LOCKS",id:"locks",level:3},{value:"Helpful Tips",id:"helpful-tips",level:2}],c={toc:u},h="wrapper";function d(e){let{components:t,...i}=e;return(0,o.kt)(h,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"turnable"},"Turnable"),(0,o.kt)("p",null,"Turnables are used as inputs for locks. They can give a range of values as output, starting with 0 and ending with the number of steps you assign -1"),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"world-axis"},"\ud83d\udd38WORLD AXIS"),(0,o.kt)("p",null,'This determines along which axis your turnable will turn when moved. Sideways, upwards, etc. and in which direction the next higher "number" is.'),(0,o.kt)("h3",{id:"screen-axis"},"\ud83d\udd38SCREEN AXIS"),(0,o.kt)("p",null,"This determines how the mouse movement affects the turnable. Many people set this wrong for their turnables, which will result in you pulling down a number dial, but instead it will move upwards. Keep an eye on this in your rooms!"),(0,o.kt)("h3",{id:"steps"},"\ud83d\udd38STEPS"),(0,o.kt)("p",null,"This determines how many snap positions the turnable will have and how many different signals it will be able to send. A turnable with 4 steps will send out the values 0, 1, 2, 3. Even if the numbers on it are 1, 2, 3, 4. This is important to know when setting up your lock!"),(0,o.kt)("h3",{id:"locks"},"\ud83d\udd38LOCKS"),(0,o.kt)("p",null,'The lock(s) this turnable gives information to. If it is an "inplace" lock, make sure to assign the turnable to the correct position of password digits!'),(0,o.kt)("h2",{id:"helpful-tips"},"Helpful Tips"),(0,o.kt)("div",{className:"highlight-div"},"There is NO RULE OF THUMB regarding the way the World Axis setting for objects when you spawn them in. The angle they move as a turnable is based on their native orientation that you can see when you have a look at the local coordinates of the object. Here is a small overlook over the most common turnables:",(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:r(3519).Z,width:"2079",height:"1143"})),(0,o.kt)("p",null,"The rules the seemingly erratic behaviors follow are those:"),(0,o.kt)("p",null,"Making sure you have the coordinate display toggled to the Local coordinate axes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Up = Positive Green\n\nDown = Negative Green\n\nRight = Positive Red\n\nLeft = Negative Red\n\nForward = Positive Blue\n\nBackward = Negative Blue\n"))),(0,o.kt)("div",{className:"highlight-div"},'The direction of "positive rotation" is determined by the Left Hand Rule. Form a "thumbs up" pose with your left hand, then point your left thumb in the direction of the selected axis. "Positive rotation" will be the direction the rest of your fingers are curled.'),(0,o.kt)("div",{className:"highlight-div"},"When selecting Screen Axis, dragging the object in the selected direction will rotate the object positively, and dragging the object in the opposite of the selected direction will rotate the object negatively. Thanks to SethBling for this."),(0,o.kt)("div",{className:"highlight-div"},'Since this is difficult to memorize and prone to make mistakes happen, remember you can use Ctrl + "Enter Play Mode" button to start a test run at the camera location, which makes it easy to test your settings very quickly.'),(0,o.kt)("div",{className:"highlight-div"},"Turnables can be everything. A valve, a numbers lock, a stature or even an elephant."),(0,o.kt)("div",{className:"highlight-div"},"Keep in mind you can retexture your Turnables to have custom faces that show numbers, symbols or whatever else you want!"))}d.isMDXComponent=!0},3519:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/turnableRecommended-d7eedde41bd7e6bd2d1ea60517caab6f.png"}}]);