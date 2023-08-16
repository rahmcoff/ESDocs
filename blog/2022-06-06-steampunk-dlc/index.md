---
title: Steampunk DLC
authors: [pine]
tags: [dlc, update]
---
<iframe width="100%" height="500" src="https://www.youtube.com/embed/UbVeACVMOMY" title="Escape Simulator: Steampunk DLC - Release Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Four brand new rooms for you to escape from in style!
Get ready to solve a lot more puzzles, because the brand new **Steampunk DLC** is out now! Featuring four additional rooms that are filled to the brim with all kinds of curious machinery, this DLC is sure to get your gears grinding! To celebrate the arrival of this new content, both Escape Simulator and the Steampunk DLC are currently on sale! Additionally, you can now get all available content directly through the newly available Escape Simulator: Collector's Edition. This bundle is also available if you already own Escape Simulator and will add the content that you don't own yet to your Steam wallet. If you can't wait to board the Valor, then you can get the Steampunk DLC right [here](https://store.steampowered.com/app/1942100/Escape_Simulator_Steampunk_DLC/)!

Each room in this DLC represents a different area of the steampunk airship ‘Valor’. Your journey through the Valor begins at The Crew Quarters, where you are awoken by a sudden explosion. You’ll have to make your way topside by putting out fires in The Engine Room and by taking care of the plants in The Greenhouse. Will you be able to make it to The Helm Room on time and regain control of the airship?

## Bring your community rooms to the next level!
In addition to all of the newly available Steampunk content, we are also releasing the free ‘**Room Editor 2.0**’ update today! This update will greatly expand the amount of possibilities for builders to make awesome community rooms! Additionally, builders will also get access to all of the Steampunk DLC assets, regardless of whether they bought the DLC or not. 

To start things off, the latest version of the Room Editor now allows room builders to add all types of **lighting** to their rooms! With this feature, you’ll be able to really crank up the atmosphere in your creations. Additionally, we are adding post-processing options and a brand new model importer! With this model importer, builders are now able to add their own assets to their rooms, which will open up a world of opportunities!

![light](./roomLight.gif)

Finally, the new Room Editor also adds a function which allows builders to make use of **LUA scripting**. Through scripting, builders will be able to modify the properties of their rooms to their own will. Like with the other added functions, we believe this will allow builders to further create rooms that are beyond our imagination!

For more information on the contents of the Room Editor 2.0 update, see the patch notes below!

## So what’s next for Escape Simulator?
We’ve been working hard to continue improving the Escape Simulator experience and there’s still a lot more awesome stuff coming up! That said, we are well aware that we couldn’t have done any of this without all of your support. We are truly glad to have such a great community and we hope you’ll continue to enjoy all of the upcoming updates. Currently we are still working on two free additional rooms that will be revealed at a later point, so be sure to keep an eye on our channels for more information! Finally, you can also join our official [Discord channel](https://discord.gg/pinestudio) to talk about all things Escape Simulator. See you there?


<details><summary><h4>Room Editor</h4></summary>

- New Light prop, now you can add custom lighting and it comes with better performance!
- New post-processing prop, allowing you to change the ambience of your rooms.
- New zoomable behavior, no more zooming to locks 🔒🔍
- New scripting custom rooms using Lua
- More flexible than current setup, but Lua programming knowledge is required.
- New Custom Drag behavior specifically for scripting. It gives you more control over object interactions.
- New loading custom models as props, you can create musical instruments using primitive objects or import one from .gltf file!
- UX tweak: Changed from behavior buttons to a dropdown (Button, Animation, Turnable,...)
- Menu UI scale fix for smaller screens
- New Discord Rich Presence, show others which awesome rooms you are playing 🙂

</details>

# Steampunk hotfix #1

<details><summary><h4>Game</h4></summary>

- Fixed search in the in-game workshop not working
- Fixed community rooms issue with teleport.

</details>

# Steampunk hotfix #2 & Stempunk props
Hello explorers! 
We've listened to your feedback and fixed all critical bugs and issues reported in the last few days. Also, we've added **all Steampunk assets** to the room editor for everyone to use! 
The update is now live, and here's a changelog of fixes that we can remember we did

<details><summary><h4>Game</h4></summary>

- Added new Steampunk props for Room Editor 
- Loading custom model without images fixed
- Fixed cannon bug in Steampunk 1 (S1)
- Fixed Omega DDR3/PC bug
- Fix not seeing Steampunk image as a client if the DLC is not installed
- Fixed puzzle box bug in S1
- Added reset button sound in S1
- Added better spawn points
- The botanists should be happy with new updated plant names in S3
- Multiple texture fixes in all rooms
- Yellow crystals don't stack with bolts and screws anymore
- Fixed box clipping in S1
- The butterfly in the greenhouse now has a much better path
- The propellers are now ok in the helm room
- The radar doesn't have that one bright button anymore
- The labyrinth in the engine room should work every time! 
- The seed shouldn't disappear from anyone! 
- Multiple optimizations 
- Added more bugs to fix later

</details>

# Steampunk hotfix #3
Here's one more hotfix patch for the base game, Steampunk DLC and the Room Editor. We did a bunch of smaller fixes but here are the most important ones in 1.0.22752r version.

<details><summary><h4>General changelog</h4></summary>

- Added an option to remove timers
- Fixed host can start a custom room before all players have installed it

</details>

<details><summary><h4>Steampunk DLC fixes</h4></summary>

- Fixed some hint/key item tags and item names
- Removed the trunk fruit from the tree
- S1 lighters can no longer be picked up before solving the puzzle

</details>

<details><summary><h4>Room editor</h4></summary>

- Teleport - "change rotation on teleport" checkmark is no longer inverted
- Room title issue with some characters (like %) fixed
- Fixed loading steampunk walls when creating a new room
- Victorian key prop no longer has the unlocking audio when placed on the floor
- Steampunk props - fixed some pivot and collider issues

</details>

# Steampunk hotfix #4

<details><summary><h4>The Crew Quarters</h4></summary>

-  Fixed cannonballs
-  Added water sounds

</details>

<details><summary><h4>The Greenhouse</h4></summary>

-  Fixed sign and flower faces

</details>

<details><summary><h4>The Helm Room</h4></summary>

-  Fixed textures
-  Fixed handles

</details>

<details><summary><h4>Room editor</h4></summary>

-  When changing behavior on a prop (button/animation) the prop no longer gets removed from the activator targets
-  Dial value counts can no longer be set to 0
-  Importing props fixes:
-  Custom models are now copied when imported (but they need some time to load in and the prop isn't refreshed when they load in)
-  Importing audio, scripts and custom model files is blocked if the room is not saved
-  Fixed some models not loading paint-overs properly for custom models
-  Fixed steampunk walls on new room
-  Added a dropdown for the impostorClone update type: Never/OnChange/Always

</details>

<details><summary><h4>Other fixes</h4></summary>

-  Fixed unable to unsubscribe from custom room when the files are deleted locally
-  Male/Female character model colliders are now the same size
-  Scrollbar snaps to the top when entering workshop rooms menu and when searching
-  Fixed activator component desyncs in coop play

</details>