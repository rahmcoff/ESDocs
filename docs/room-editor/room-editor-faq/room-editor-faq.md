---
sidebar_position: 5
title: "Room Editor FAQ"
---

Find the answers to some of the most common room editor questions and problems here.


## Working with folders

<details><summary> <h4>Accessing the custom room UGC folder</h4></summary> 

All custom rooms are located in their own folders in the UGC folder. There is a button in the Room Editor menu that opens the correct room folder for you.
![UGC Button](./img/UGCButton.png)

Mac users cannot open it this way because the folder is within the hidden "library" folder that you will need to make visible/accessible.

UGC folder path:
```
Windows: %USERPROFILE%\AppData\LocalLow\Pine Studio\Escape Simulator\UGC
Mac: user/Library/Application Support/Pine Studio/Escape Simulator
```

📓 **Note:** The UGC folder contains your custom created rooms and rooms copied from other creators. Rooms you subscribed to are located in another folder.

</details>

<details><summary><h4>How to load a backup of a room</h4></summary> 

1. Open the room UGC folder where the 'Room.room' file is located
2. Rename the 'Room.room' file
3. Open the 'Backups' folder
4. Choose a backup file you want to revert to (probably the one created most recently)
5. Copy and paste the chosen backup file to the place where the 'Room.room' file was
6. Backup files have a different extension, e.g. 'Room.roombk1auto', rename the new backup file to 'Room.room'

Now you can restart the game and load the room in the Room Editor. If the room doesn't appear in the list 'Your Rooms' check the new file extension name again.

⚠️ **Important**: To load the room the file needs to be called exactly 'Room.room'

⚠️ **Important**: Be careful when deleting files, you could lose your room if you delete the wrong files.

</details>

<details><summary><h4>I made changes to my room that I'm not happy with - how do I revert to the published version?</h4></summary> 

Thanks Robin for these tips:

1. Subscribe to the previous version of your room on Steam
2. Make a copy for yourself from the ES menu (Workshop - Community Rooms - Copy)
3. Work with that copy in ES editor
4. When you want to update on Steam, make sure that you update the ID in the upload window to match the Steam ID (in the URL) so it overwrites that room and doesn't create a new workshop entry.

</details>

<details><summary><h4>I renamed a file or a folder and the room won't load</h4></summary> 

All folders in the **base UGC** folder need to be named 'Room_*number*'. If you renamed the room folder just rename it back to that format, e.g. 'Room_1' or 'Room_22'.

The **room UGC** folder needs to contain these files:
 - 'Room.room'
 - 'Preview.jpg'
 - 'Id.bin' - if you published the room

If you renamed one of these files rename them back to these names and restart the game.

</details>


<details><summary><h4>My 'Backups' folder is huge, can I delete room backup files?</h4></summary> 

A backup file is created every time you press the play button to test the room while in the Room Editor, which can create a lot of files. You can delete any file from the 'Backups' folder you don't need. 

⚠️ **Important**: Deleting all backup files means you can lose your room if your original 'Room.room' file corrupts.

</details>

<details><summary><h4>What is the 'Id.bin' file?</h4></summary> 

The 'Id.bin' file is created when first publishing the room to the Steam workshop and it contains the ID of the Steam workshop item you published the room to. This file is not uploaded to the Steam workshop when publishing the room and only the publisher of the room should have access to it.

⚠️ **Important**: Deleting this file means you won't be able to update the workshop room.

</details>

## Publishing a room

<details><summary> <h4>Room fails to publish</h4></summary> 

1. Make sure you're logged into Steam
2. Make sure Steam servers are up and running
3. Make sure you're on an account that owns the game. Steam blocks uploads to the workshop from accounts that have the game Family shared.
4. Check if there is a 'tempPublish\_Room\_*number*' (e.g. 'tempPublish_Room_3') folder in the folder path below
```
Windows: %USERPROFILE%\AppData\LocalLow\Pine Studio\Escape Simulator\
Mac: user/Library/Application Support/Pine Studio/Escape Simulator/
```
If there is delete it and try uploading the room again.

⚠️ **Important**: Make sure you only delete the folder that starts with 'tempPublish_'.

</details>

## FAQs from the Discord channel

<details><summary> <h4>I want to reset my puzzle/room/animation - how can I do this?</h4></summary> 

There are different ways to approach this, depending on what logic objects you want to use and what you want to achieve. Thanks to Thoroniul and Franch for these answers!

**Reset an animation (e.g. a puzzle based on pressing a series of numbers) once an incorrect combination has been entered:**

_Option 1 - using locks_

1. Set a lock to continuous XOR with a password 1-1, and link to the animation you want
2. Sending a 1 will always move the animation to the 1 state…
3. …and if it’s already in the 1 state it does nothing
4. Sending a 0 will always move the animation to the 0 state…
5. …if it is already in the 0 state it does nothing
   
So you can have a reset empty broadcast 0 to all the animation controlling xor locks you need, and it sets all the animations back to the beginning.

Here is a short MP4 that demonstrates the above: https://cdn.discordapp.com/attachments/898938872740859935/1165583233958826025/stone_pushin.mp4?ex=6559d5fa&is=654760fa&hm=0a4bf718ff474b2571e41616ebb44582696f038fd0210dd46ce0425dd46e255a&

_Option 2 - using triggers_

For any animation, you can keep track of their position and reset any of them that have been activated without any lock logic:
1. For each animation, set up a trigger parented to an empty animation. When the in-room animation triggers, also trigger this other animation which should drag the trigger somewhere.
Do this for every animation in the room and arrange all the triggers in a long line
2. When you want to reset the room animations, drag an object through all the triggers that were animated into a separate position
3. Each of those triggers will reset an animation in the room, ignoring any animations that don't need to be reset
   
Note that you can also do this for objects set to pickable animation...triggering them will put them back in their original position.

**Reset a pickable - i.e. send it back to its starting position:**

You can reset pickables by first expelling them from the user's inventory with activators, then sending the reset signal to the pickable and it will move it back to the starting location. Or as noted in option 2, above, you can also use triggers.

**Reset a draggable animation:**

To make a draggable animation that can be reset to its starting position, do either of the following:

_Option 1 - using a draggable object:_

1. Place a Draggable object, and change it to an animation. Do NOT set this to be a simple pickable or it won't work
2. Connect the animated object to whatever you want to trigger the reset. Save/close your room
3. Go into the Room.room file, find the object, and change "isKinematic" from True to False, and save the file
   
**CAVEAT:** editing the Room.room file is not technically supported, and this new method may have unintended consequences that are not yet discovered.

_Option 2 - using a pickable or static object:_

1. Place a pickable plus use physics, and change it to an animation. Do NOT set this to be a simple pickable or it won't work.
2. Connect the animated object to whatever you want to trigger the reset. Save/close your room.

**For those with a technical bent, here is more detail on how Franch discovered how to reset draggable animations:**

1. It has been known for a while that Pickable animations can be reset to their starting point when you make them an animation and then trigger it, and I remembered that @Robin 🐸 was playing around with mass in Room.room to change objects from Pickables to Draggables a while back. So I wondered if it would be possible to combine the two...

2. I started with a Pickable object, made it an animation, and then set it back to Pickable using the checkbox. Then, I went into the Room.room file and tried changing its mass from 1.0 to 10.0 (I did some earlier testing which confirmed this is the default mass for this object, if you set it to Pickable vs. Draggable). However, this didn't have any apparent in-game effect.
   
4. Next, I observed what changes in the Room.room properties when you change a Pickable object to an animation. You get a bunch of extra animation (switch) properties, but the isKinematic value also changes from False to True (it is set to False for non-animated Pickables and Draggables). So I decided to see what would happen if you change this back to False, but still with the rest of the animation properties set, and with Mass = 10.0.
5. ...and to my surprise, it actually worked! (see video).
   
https://cdn.discordapp.com/attachments/898938872740859935/974875328243724429/2022-05-13_19-39-24.mp4?ex=65582ee6&is=6545b9e6&hm=e501bd413ee4cc8799663a4f9f6038453a263118e7db0bb32fcb9dd2895bb5d8&

**Reset an entire room:**

You should be able to do this using a combination of the above processes. If you still have trouble, ask the experts in the Discord channel!

</details>
