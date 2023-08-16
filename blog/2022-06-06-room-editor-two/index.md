---
title:  Room Editor 2.0
authors: [pine]
tags: [update, room-editor]
---

## PATCH NOTES

<details><summary><h4>Room Editor</h4></summary>

-  Added Light prop, now you can add custom lightning and it comes with better performance! 
-  Added post-processing prop, change the ambient of your rooms. 
-  Added zoomable behavior, no more zooming to locks 
-  Added scripting custom rooms using Lua
-  More flexible than current setup, but you Lua programming knowledge is required. 
-  Added Custom Drag behavior specifically for scripting. It gives you more control over object interactions.
-  Added loading custom models as props, you can create musical instruments using primitive objects or import one from .gltf file! 
-  UX tweak: Changed from behavior buttons to a dropdown (Button, Animation, Turnable,...)
-  Menu UI scale fix for smaller screens 
-  Added Discord Rich Presence, show others what awesome rooms you are playing

-  scripting props need to be enabled in the room config - only to view them in the menu, doesn't affect loading or saving
-  exposed the Vector3 and Quaternion class for static methods
-  now it's possible to lua functions to chat so players can trigger them
-  access to player IDs + teleport specific players
-  importing a lua object should now copy the lua file as well

-  collider dropdown added - None/Box/ConvexMesh/ConcaveMesh
-  shiny material issue fixed
-  cross platform loading of custom models fixed

-  new event: LuaCallType.ChatCommand when players write "/something"
-  Vector/Quaternion exposed
-  new functions for players: getAllPlayers, getLocalPlayer, getClosestPlayer, getMainPlayer
-  new function for teleporting: teleportPlayer

</details>