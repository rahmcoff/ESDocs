---
title:  70's room
authors: [pine]
tags: [update]
---


## Peace out! ✌️

![Room](./room.png)

We hope you like lava lamps and disco balls, because it's time to go back to the 70's. That's right, we're releasing a brand-new room for Escape Simulator **today**! In order to escape from this incredibly cozy looking room, you'll need to know your way around some 'ancient' technology, such as cassette decks and a very retro game console. So vintage!

<!--truncate-->

That's not all, though! The **70's room** is part of our latest update, which also contains a whole bunch of additional features for the room editor. We hope you're excited to start using these features, builders! Additionally, this update contains the following tweaks:

- Different internal level packing, the game should be smaller on disk. It's about 5GB smaller than before!
- New hint system that tracks what puzzle you are playing and gives relevant hints
- Localization fixes
- Separated settings and save files. Only save is uploaded to cloud save, meaning settings is local to the machine.
- Faster performance mode for custom rooms
- Disable shadows option has 2x increased FPS in built-in rooms
- Chat key is can be rebound to different key
- Changed how zooms are calculated, some items are now bigger for better clarity
- Better controller support
- Better support for breaking hanging objects (plants, mirrors, ...)
- Its easier to use slots with controller with new Controller-Slot interaction UX

More patch notes can be found right here!

## More rooms to check out! 👀

We really hope you'll enjoy this free update and that you'll continue to look forward to even more rooms in the future! We're working really hard to bring a bunch of additional rooms to the game and of course we're always trying to further improve upon the room editor as well. For all things Escape Simulator, please consider joining our dedicated [Discord community](https://discord.gg/pinestudio) or come talk to us over on [Reddit](https://www.reddit.com/r/PlayEscapeSimulator/).

# Patch Notes

<details><summary><h4>Game</h4></summary>

- Different internal level packing, the game should be smaller on disk. It's about 5GB smaller than before!
- New hint system that tracks what puzzle you are playing and gives relevant hints
- Localization fixes
- Separated settings and save files. Only save is uploaded to cloud save, meaning settings is local to the machine.
- Faster performance mode for custom rooms
- Disable shadows option has 2x increased FPS in built-in rooms
- Chat key is can be rebound to different key
- Changed how zooms are calculated, some items are now bigger for better clarity
- Better controller support
- Better support for breaking hanging objects (plants, mirrors, ...)
- Its easier to use slots with controller with new Controller-Slot interaction UX
- Brand oldie-but-goldie room: 70's Room 

</details>

<details><summary><h4>Room Editor Features</h4></summary>

- Added Cats In Time room props
- Added 2 transparency props (the reign of the sticker is over)
- Added number, letter and symbol props
- Added the Display logic prop
- Added a functional keypad prop
- Added a button for exporting default prop textures
- The 'Finish' logic prop can now be used to load other custom rooms, you can continue your stories through other rooms
- Added options on the 'Finish' logic prop for setting the final camera position
- Hide props while editing the room with 'H' or 'Shift + H'
- Right click on a collection of props and select one by name
- Added a 'Use Rigidbody' checkmark to Animations/Buttons to help with physics prop interactions
- Added a button for fixing custom texture sizes for better compression
- New room option added: 'Require post processing'
- Lua activator API added
- Teleport, Sound, Fog, Post Processing and Skybox can now be triggered by any value except for zero (enabled by resetting the connection)
- Community room lighting option added
- Locks now have a reset pin ("R"), target it with any value but zero to reset the lock values to zero (for lua, just target the index with -400)
- Locks also now have a master unlock pin ("U"), target it with any value but zero to unlock the lock (for lua, just target the index with -500)
- Right click on a prop to show a list of all selectable props under the cursor, change prop names to easily differentiate between props when selecting this way
- Logic props that are based on locks (Sound, Fog, etc.) can now be triggered by any number except zero
- Added a transparency order offset setting for transparent objects, change this if you want some transparent objects to render in front/back of other transparent objects

</details>

<details><summary><h4>Room Editor Fixes</h4></summary>

- Smoother animations in zooms
- Visibility Activator delay removed to help with desync
- Fixed an issue where Visibility Activators didn't disable all colliders on some props
- Fixed issue with importing props from other rooms, references to non copied props are removed
- Pickable animations can now be set as slot keys
- Animations and buttons can no longer be picked up in zoom without using the pickable checkmark
- Fixed a hole in a halloween wall
- Fixed ambience sounds not stopping when starting other music sounds
- Transitioning to post processing with a disabled color filter now correctly transitions to no color filter
- Fixed removing prop links from slots when changing prop behaviour and undo
- Fixed reflection change on further away floors and props
- Fixed activator triggering for each player on start
- Exit zoom is no longer blocked by buttons and animations
- Fixed embedded gltf falsely reporting missing models
- Slot keys can now have triggers as children
- Fixed issue with slot keys disappearing when ejected while in zoom
- Fixed Visibility Activator enabling collider renderers on some props
-Zoomables can no longer have the pin button
- Click and drag selection now targets all props, use alt + click and drag to target only the root parent object
- Clone onChange updates now correctly update when animations are completed and not at the start
- UI text fixes, some translations and hints added
- Rect selection now selects all objects instead of only parents, use ALT + click and drag to only select parents
- Fixed pivots for certain props (to see the change replace the old prop with the new version of it)

</details>

# 70's Room Hotfix #1

<details><summary><h4>Game</h4></summary>

- Added missing textures for translations

</details>

# 70's Room Hotfix #2

<details><summary><h4>Game</h4></summary>

- 70's Room visual bug fixes
- 70's Room translation fixes
- Translation fixes on some levels in Steampunk DLC
- More solid monitor selector option
- Fixed transparency clipping issue for custom rooms
- Better right click movement in the room editor

</details>
