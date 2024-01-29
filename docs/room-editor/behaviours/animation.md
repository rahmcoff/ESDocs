# Animation

Animations are the heart and soul of every good room. Not only will they make it seem more alive, but they are also used in a multitude of workarounds! So keep on reading, even if you think you know your way around animations already.

![Animation](./img/animation_selector.png)

:::tip
Animations do not obey physics, but will move with their "parent" and act like a static in game. 
This is why they will help you when your key will not stay in the drawer because of physical obstacles. 
Or if you want to plaster a pickable item to a pickable, or to the wall, or to a moving painting, etc.
:::

:::tip
If an animated pickable is triggered while in inventory, nothing happens. If you put it back on the floor, it will be able to run its animation, if activated.
:::

:::note
Targeting the `Animation` on one Prop multiple times before it has completed can cancel the `Animation` and can cause room bugs that are hard to diagnose, and this can be more evident on slower PCs.
:::

## Properties

### :small_orange_diamond:Edit Waypoint

<div className="highlight-div">
Set the endpoint position and rotation of the movement.
</div>

Clicking the button will open the special Animation settings screen where you can set the final position of the Animation.

![Animation - Edit Waypoint](./img/animation_settings.png)

Here you can move the camera as you move it in the Room Editor (holding right click and using the WASDQE keys for movement) and move the position of the Animation prop. Scale changes are ignored for the Animation.

:::note
Only the props that are set as children to the prop with the Animation behaviour will be animated.
:::

### :small_orange_diamond:Duration

<div className="highlight-div">
Defines the duration of the animation and how much time needs to pass before the end actions are executed.
</div>

Shows the seconds which it will take the animation to go from start to end-point. An animation with 0 seconds duration will instantly teleport the object.

:::tip
0 Seconds animations can be used to swap objects seamlessly! This can be useful if you want e.g. a Button to first not work, but later to open something, just swap the non working button for a working one.
:::

:::tip
Animations can be used as timers!
Just place an Empty, make it an animation (no path setting needed) and let the animation take 30 seconds.
You now have a 30 seconds timer for things you set to happen "on completion" of it.
If you set it on loop, you have a timer that gives out an activation signal every 30 seconds.
:::

### :small_orange_diamond:Output Value

<div className="highlight-div">
Number that will be sent to the targeted props on correct completion.
</div>

This number will be sent out to locks that are linked to the animation `On Complete`.

:::tip
Check out the already assembled Keypad prop which takes the output of each numbered `Button` and sends it to a `Lock` prop. This happens via a `Button` behaviour but it is the same principle.
:::

### :small_orange_diamond:Interpolation

<div className="highlight-div">
Smooth - the start and end speed are smoothed out so it doesn't start or end abruptly.
Linear - keeps the same speed during the entire animation.
</div>

`Smooth` gives an animation a more natural look, by changing speed at the beginning and end of the animation. Starts slow but speeds up, when it get's near the end it slows down before reaching a full stop.


![Animation smooth interpolation](./img/animation_smooth.gif)


`Linear` will make the animation move at a constant speed.

![Animation linear interpolation](./img/animation_linear.gif)


### :small_orange_diamond:Bounce

<div className="highlight-div">
When checked, it will animate back to its original position and send out the 'Output Value'.
When not checked, it has an 'On/Off' state and will toggle between the 'Output Value' and zero.
</div>

This will make the animation animate backwards after it completed its path.

The `On Complete` targets are triggered and the `Output Value` is sent when the animation reaches the Waypoint.


### :small_orange_diamond:Pause (sec)

<div className="highlight-div">
Determines the amount of time to wait before bounce.
</div>

When the animation prop reaches the Waypoint the prop will stay there for `Pause` seconds and then return.

:::note
This property is only active if the `Bounce` property is active
:::

### :small_orange_diamond:Loop

<div className="highlight-div">
When checked, the animation and the activation signal it sends out is looped.
</div>

This will keep the animation playing once triggered.

If bounced, it will move back and forth.

![Animation bounced loop](./img/animation_linear.gif)

If not bounced, the item will teleport to its original position and then repeat the animation.

![Animation non bounced loop](./img/animation_loop.gif)

:::note
Do not make looped animated objects be pickables. Once you force an object to be loop animated in inventory it freezes you in examine mode.
:::

### :small_orange_diamond:Autoplay
<div className="highlight-div">
When checked, it is activated as soon as the player starts the room.
</div>

The animation is triggered as soon as the level is started. Most useful in combination with "loop" for ambience animations.

### :small_orange_diamond:Start Delay (sec)

<div className="highlight-div">
Determines the amount of time to wait before starting the animation. Only works once for looped animations.
</div>

It will take so many seconds before the animations starts playing, when the animated object is activated for the first time.

:::note
If the object is activated again, it will not be delayed again!
:::

### :small_orange_diamond:Use Physics

<div className="highlight-div">
If checked the prop will start using physics to interact with the environment and it can no longer be interacted with outside of zoom. If it's parented to another object that is affected by physics (e.g. 'Pickable', 'Draggable') they will constantly interact and push each other away.
</div>

Activates the physics interaction, meaning it will push other props that also have physics interactions, like pickable or draggable props.

### :small_orange_diamond:Pickable

<div className="highlight-div">
When checked, the prop can be picked up by the player. 'Use Physics' is required. Not recommended for long or looped animations.
</div>

This allows you to make an animated item also be a pickable. Often it is needed to make pickable items be animated even when they are not intended to move in any way! 

:::note
This property is only active if the `Use Physics` property is active
:::

:::tip
IMPORTANT: You cannot make animations be keys to a slot.
So make the item pickable, assign it as key, and THEN make it an animation with "pickable" checked.
This way it works, cause the item carries over its key properties.
:::

:::tip
Under some circumstances the item types will carry over to the animation status. 
E.g. if you have a crate and the lid is pickable and then you set it to be an animation, it will cause no issues if the chest is static or draggable.
But it will cause problems in your inventory! Looking at a small chest with an animated lid (even with pickable unchecked) can allow the lid to simply be picked off, since the former "pickable" status carries over.
To fix this issue make the lid not be an animation, set it to "static" and then make it an animation again.
:::

### :small_orange_diamond:On Complete

<div className="highlight-div">
The targeted props will be triggered once the prop reaches the animation waypoint.
</div>

The props that get triggered after the animation reached its endpoint. If connected to a lock the animation will send the `Output Value` on complete and a 0 on complete of the reverse animation.
