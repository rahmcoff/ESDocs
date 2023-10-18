# Practical example of Roulette logic
Franch, winner of the September 2023 Build-a-Room competition, made extensive use of the Roulette logic and wrote this fantastic tutorial to help others. Thanks, Franch!

A few days ago I mentioned putting together a tutorial on how I'm using the new roulette random logic items to set a dynamic passcode, show the passcode to player, check to see if their input is correct, and then resetting it (this is essentially how "Simon Says!" works in Get Down, Get Down!). This example is very specific to my puzzle, but the principle would work the same for any number of inputs or digits in the passcode. You could also strip out showing the pattern to the player etc. This is also a good way to track and reset any items dynamically (i.e. the player touches 3 of 8 things, but you need to know which 3 and only reset those).

## Part 1/3
### FIGURE 1: THE BASIC SETUP (note this is a top-down view, but orientation doesn't matter)

![Figure 1](./img/Roulette%20Figure%201.png)

Each horizontal row of triggers + empties is a parent chain that moves to the right, so the yellow empty is the master parent, followed by the red empty, etc. All the way to the leftmost blue trigger box. There is one horizontal row for each digit in the passcode.

The central vertical channel ("Where the magic happens") is what will determine the correct passcode, much like an actual lock. The trick here is we are going to use roulette logic to determine which colored triggers get pulled into that "magic" channel, via the colored empty animation chain.

### FIGURE 2: ROULETTE ACTION

![Figure 1](./img/Roulette%20Figure%202.png)

There is a separate roulette wheel for each pin in the passcode. Each roulette wheel randomly targets one of the four colored empties in the chain. The empties are animations that drag all their children a different number of units to the right: yellow drags 0.25 units, red drags 0.5, green drags 0.75, and blue drags 1.0.

Thus, when yellow is triggered, the yellow trigger will move into the "magic" channel. Similarly, each colored empty will drag its corresponding trigger into the "magic" channel, making it the solution that can be detected with other logic. Technically these empties are dragging all of the triggers, but only one ends up in the "magic" channel.

### FIGURE 3: EXAMPLE PASSCODE

![Figure 1](./img/Roulette%20Figure%203.png)

Here you can see the result after the roulette wheels randomly selected (from bottom to top) the passcode Yellow, Green, Red, Blue, Blue, Red. These triggers have been moved into the "magic" channel. Also note because the empty waypoints range from 0.25 to 1.0 (yellow to blue), the end result is that the targeted empties all end up in the same vertical channel at the far right, which is why their colored triggers line up in the "magic" channel.

## Part 2/3:

### FIGURE 4: SOLUTION CHANNEL AND RESET CHANNEL

![Figure 1](./img/Roulette%20Figure%204.png)

I have been referring to the "magic" channel and colored triggers as if they are singular entities, but there are actually two triggers in every color block. The left trigger corresponds to what I call the Solution Channel, and the right trigger corresponds to what I call the Reset Channel.

The Solution Channel is used to display the pattern to the player, and to check player inputs. The Reset Channel clears the channel and puzzle by targeting the empties that currently have their corresponding triggers in the reset channel.
To show the solution to the player, I run an empty animation through the Solution Channel which is detected by any triggers there.
To reset the puzzle, I run an empty animation through the Reset Channel which triggers the same empty animations that were targeted by the roulette logic.

There might be a way to combine these, but that might take more logic since the reset actions (triggering empty animations to move everything out of the "magic" channel) is different from how I'm using the Solution Channel triggers.

### FIGURE 5: PLAYER INPUT

![Figure 1](./img/Roulette%20Figure%205.png)

These tiny colored empties hover above the Solution Channel for each pin. When a player enters the corresponding color on my pressure plates, that colored empty bounces down into the Solution Channel where a colored trigger awaits, then back up again.
If the empty hits the trigger that matches its own color (and only detects that color), that input is captured in a Continuous Lock (Figure 7).
If the empty hits a different color, nothing happens which will mean the Continuous lock never gets the complete passcode, resulting in a fail.

I have separate sets of pressure plate triggers corresponding to each pin, that I animate into position sequentially. These drive the tiny colored empty animations. But, there would be any number of ways to do this. 

## Part 3/3:

### FIGURE 6: RESETTING THE PASSCODE

![Figure 1](./img/Roulette%20Figure%206.png)

The large empty is detected by every colored trigger that could be in the Reset Channel (depending on which colored empty was selected by the roulette wheel for each pin). When then passcode needs to be reset, this empty runs through the channel, hitting all of the colored triggers that are part of the current passcode.

When each reset trigger is hit, the corresponding empty in the chain reverses its animation and returns the chain to the starting position. This is the technique that can be used for any setup where you want to track various player actions and reset those...every action moves a trigger into a channel, while actions that aren't performed leave the corresponding trigger out of the channel. Then, a ball (or empty) runs through the channel resetting the actions where it sees a trigger (note if you use empties for this, you have to check Use Physics and Is Pickable for the triggers to detect them).

### FIGURE 7: DISPLAYS AND LOCK LOGIC

![Figure 1](./img/Roulette%20Figure%207.png)

I use two displays in this setup. The first is the Answer Key and shows the current randomly selected passcode (Yellow = 1, Red = 2, Green = 3, Blue = 4). The way this works is that each colored empty targeted by a roulette wheel sends that digit back to a specific pin in the In Place lock, that drives the answer key display.

Note this lock is not usable by the player or for solution logic - it does not know what the random passcode is (here, I set a passcode of 5-5-5-5-5-5 as a placeholder and to avoid confusion). This is simply for debug - to know what the correct solution is. (Very helpful when you have to play Simon hundreds of times to playtest it without wanting to memorize the pattern each time haha.)

The larger "Player Input" display is where the magic happens. This is a continuous lock, linked to every trigger in the solution channel.

When a tiny colored "player input" empty bounces in/out of its corresponding colored trigger, that sends a 1-0 to this lock.

So, if all six inputs are correctly entered on my colored pressure plates, that will send 1-0-1-0-1-0-1-0-1-0-1-0 to the lock; any incorrect pressure plate presses will send nothing.

After the sixth input (regardless if it is correct or incorrect), I send a 2 to the continuous lock which serves to end the pattern (and also to reset the pattern, since I don't want the lock to count any prior 1-0 inputs towards the next combination after the reset). When the continuous lock sees this exact string of 13 numbers, it unlocks and tells the player they entered a correct solution.
There is a lot of other ancillary logic happening to make Simon Says work, but this is the crux of how I'm using the new roulette logic to dynamically set, check, and reset passcodes on the fly.
