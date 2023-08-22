"use strict";(self.webpackChunkes_docs=self.webpackChunkes_docs||[]).push([[2098],{4137:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>d});var r=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function n(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)o=l[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)o=l[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):n(n({},t),e)),o},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(o),h=a,d=m["".concat(s,".").concat(h)]||m[h]||c[h]||l;return o?r.createElement(d,n(n({ref:t},p),{},{components:o})):r.createElement(d,n({ref:t},p))}));function d(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=o.length,n=new Array(l);n[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:a,n[1]=i;for(var u=2;u<l;u++)n[u]=o[u];return r.createElement.apply(null,n)}return r.createElement.apply(null,o)}h.displayName="MDXCreateElement"},3786:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=o(7462),a=(o(7294),o(4137));const l={sidebar_position:5,title:"FAQ"},n="\ud83e\udd3c Multiplayer",i={unversionedId:"faq/faq",id:"faq/faq",title:"FAQ",description:"If you have issues with co-op/multiplayer",source:"@site/docs/faq/faq.md",sourceDirName:"faq",slug:"/faq/",permalink:"/docs/faq/",draft:!1,editUrl:"https://github.com/SuperJura/ESDocs/blob/main/docs/faq/faq.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"FAQ"},sidebar:"tutorialSidebar",previous:{title:"Patch History",permalink:"/docs/patch-history"},next:{title:"Fun Stats",permalink:"/docs/fun-stats"}},s={},u=[{value:"\ud83d\udcc1 Working with folders",id:"-working-with-folders",level:2},{value:"\ud83c\udfac Publishing a room",id:"-publishing-a-room",level:2}],p={toc:u},m="wrapper";function c(e){let{components:t,...l}=e;return(0,a.kt)(m,(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-multiplayer"},"\ud83e\udd3c Multiplayer"),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h4",null,"If you have issues with co-op/multiplayer")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Make sure you are online"),(0,a.kt)("li",{parentName:"ul"},"Make sure you've invited at least one player"),(0,a.kt)("li",{parentName:"ul"},"Try hosting with both normal and legacy hosting mode"),(0,a.kt)("li",{parentName:"ul"},"Disable firewall"),(0,a.kt)("li",{parentName:"ul"},"Make sure all the players have the same game version."),(0,a.kt)("li",{parentName:"ul"},"Make sure that if you are playing a workshop map, all the players have it installed (just click Subscribe in the Workshop)"),(0,a.kt)("li",{parentName:"ul"},"Try restarting your PC"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h4",null,"Steam specific issues")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Make sure you're online and connected to Steam"),(0,a.kt)("li",{parentName:"ul"},"Check if Steam servers are down"),(0,a.kt)("li",{parentName:"ul"},"Verify game files on Steam (right click the game in the Steam library > Properties > Local files > Verify...)"))),(0,a.kt)("h1",{id:"room-editor"},"\ud83d\udd28Room Editor"),(0,a.kt)("h2",{id:"-working-with-folders"},"\ud83d\udcc1 Working with folders"),(0,a.kt)("details",null,(0,a.kt)("summary",null," ",(0,a.kt)("h4",null,"Accessing the custom room UGC folder")),(0,a.kt)("p",null,"All custom rooms are located in their own folders in the UGC folder. There is a button in the Room Editor menu that opens the correct room folder for you.\n",(0,a.kt)("img",{alt:"UGC Button",src:o(4155).Z,width:"762",height:"591"})),(0,a.kt)("p",null,'Mac users cannot open it this way because the folder is within the hidden "library" folder that you will need to make visible/accessible.'),(0,a.kt)("p",null,"UGC folder path:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Windows: %USERPROFILE%\\AppData\\LocalLow\\Pine Studio\\Escape Simulator\\UGC\nMac: user/Library/Application Support/Pine Studio/Escape Simulator\n")),(0,a.kt)("p",null,"\ud83d\udcd3 ",(0,a.kt)("strong",{parentName:"p"},"Note:")," The UGC folder contains your custom created rooms and rooms copied from other creators. Rooms you subscribed to are located in another folder.")),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h4",null,"How to load a backup of a room")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open the room UGC folder where the 'Room.room' file is located"),(0,a.kt)("li",{parentName:"ol"},"Rename the 'Room.room' file"),(0,a.kt)("li",{parentName:"ol"},"Open the 'Backups' folder"),(0,a.kt)("li",{parentName:"ol"},"Choose a backup file you want to revert to (probably the one created most recently)"),(0,a.kt)("li",{parentName:"ol"},"Copy and paste the chosen backup file to the place where the 'Room.room' file was"),(0,a.kt)("li",{parentName:"ol"},"Backup files have a different extension, e.g. 'Room.roombk1auto', rename the new backup file to 'Room.room'")),(0,a.kt)("p",null,"Now you can restart the game and load the room in the Room Editor. If the room doesn't appear in the list 'Your Rooms' check the new file extension name again."),(0,a.kt)("p",null,"\u26a0\ufe0f ",(0,a.kt)("strong",{parentName:"p"},"Important"),": To load the room the file needs to be called exactly 'Room.room'"),(0,a.kt)("p",null,"\u26a0\ufe0f ",(0,a.kt)("strong",{parentName:"p"},"Important"),": Be careful when deleting files, you could lose your room if you delete the wrong files.")),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h4",null,"I renamed a file or a folder and the room won't load")),(0,a.kt)("p",null,"All folders in the ",(0,a.kt)("strong",{parentName:"p"},"base UGC")," folder need to be named 'Room_",(0,a.kt)("em",{parentName:"p"},"number"),"'. If you renamed the room folder just rename it back to that format, e.g. 'Room_1' or 'Room_22'."),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"room UGC")," folder needs to contain these files:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"'Room.room'"),(0,a.kt)("li",{parentName:"ul"},"'Preview.jpg'"),(0,a.kt)("li",{parentName:"ul"},"'Id.bin' - if you published the room")),(0,a.kt)("p",null,"If you renamed one of these files rename them back to these names and restart the game.")),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h4",null,"My 'Backups' folder is huge, can I delete room backup files?")),(0,a.kt)("p",null,"A backup file is created every time you press the play button to test the room while in the Room Editor, which can create a lot of files. You can delete any file from the 'Backups' folder you don't need. "),(0,a.kt)("p",null,"\u26a0\ufe0f ",(0,a.kt)("strong",{parentName:"p"},"Important"),": Deleting all backup files means you can lose your room if your original 'Room.room' file corrupts.")),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h4",null,"What is the 'Id.bin' file?")),(0,a.kt)("p",null,"The 'Id.bin' file is created when first publishing the room to the Steam workshop and it contains the ID of the Steam workshop item you published the room to. This file is not uploaded to the Steam workshop when publishing the room and only the publisher of the room should have access to it."),(0,a.kt)("p",null,"\u26a0\ufe0f ",(0,a.kt)("strong",{parentName:"p"},"Important"),": Deleting this file means you won't be able to update the workshop room.")),(0,a.kt)("h2",{id:"-publishing-a-room"},"\ud83c\udfac Publishing a room"),(0,a.kt)("details",null,(0,a.kt)("summary",null," ",(0,a.kt)("h4",null,"Room fails to publish")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Make sure you're logged into Steam"),(0,a.kt)("li",{parentName:"ol"},"Make sure Steam servers are up and running"),(0,a.kt)("li",{parentName:"ol"},"Make sure you're on an account that owns the game. Steam blocks uploads to the workshop from accounts that have the game Family shared."),(0,a.kt)("li",{parentName:"ol"},"Check if there is a 'tempPublish","_","Room","_",(0,a.kt)("em",{parentName:"li"},"number"),"' (e.g. 'tempPublish_Room_3') folder in the folder path below")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Windows: %USERPROFILE%\\AppData\\LocalLow\\Pine Studio\\Escape Simulator\\\nMac: user/Library/Application Support/Pine Studio/Escape Simulator/\n")),(0,a.kt)("p",null,"If there is delete it and try uploading the room again."),(0,a.kt)("p",null,"\u26a0\ufe0f ",(0,a.kt)("strong",{parentName:"p"},"Important"),": Make sure you only delete the folder that starts with 'tempPublish_'.")))}c.isMDXComponent=!0},4155:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/UGCButton-cd53619a300ac776ee5ab8883cfe5ab2.png"}}]);