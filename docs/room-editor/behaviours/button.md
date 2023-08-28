# Button
The button property is used to make an object into a clickable button. In game the cursor turns into a cogwheel when hovering over it, indicating that it is interactable.

### Properties

### :small_orange_diamond:EDIT WAYPOINT
This determines the endpoint of the movement of the button when gets pressed. It can flip like a switch or be pushed down or spin or be pulled out. That and much more is up to you.

### :small_orange_diamond:IS STICKY
The button can only be pressed once, then is deactivated and no longer pressable.

### :small_orange_diamond:DURATION
This determines how slowly or fast the button animation will happen. Again "0 seconds" means the position change will happen instantly. Keep in mind: The button activation signal will be sent at the END of the animation!

### :small_orange_diamond:OUTPUT VALUE
Numerical value that gets send to a lock when the button is activated. Deactivating it will send a 0. When it is set to bounce it will only send the set value on press.
This can be used to create password keypads that require buttons to be pressed in order. Use "continous" locks for that purpose.

### :small_orange_diamond:INTERPOLATION
Let's you choose between SMOOTH and LINEAR. This effects the way the press animation is handled. Linear will keep the same speed throughout the movement, Smooth changes speed at the beginning and end to give the animation a more natural look.

### :small_orange_diamond:BOUNCE
This will have the animation "bounce" back to its starting position. If this is unchecked, the button will stay in the same location it was at the end of the animation. Bounce leads to the button sending an activation signal every time it is pressed. If bounce is not activated, a button has an on/off position and output.

### :small_orange_diamond:LOOP
If checked, the animation AND the activation signal it sends out at the end will be looped forever. The button keeps pushing itself.

### :small_orange_diamond:AUTOPLAY
Will active the button on its own once when the game starts.

### :small_orange_diamond:DELAY
The delay determines how long it takes for the animation to happen at first. The delay does NOT apply if a player presses the button! It only applies for the Auto-play. It also does not apply to loops, just to the first instance the button is automatically pressed.

### :small_orange_diamond:ON PRESS
Determines which items get the activation signal (aka 1) when the button is pressed and the press animation ended.

## Helpful Tips

<div className="highlight-div">
    You can make your "clutter" objects be buttons instead of pickups or draggable.
    That way your room still offers interaction with items without cluttering the player inventory or messing with your decoration. 
    E.g. a button book can easily be lifted with a click to look under it. Another click puts it back down.
</div>

<div className="highlight-div">
    You can make a door a Button that will cause the door to animate into an open position when pressed.
    The Button can be prevented from being pressed before you unlock the door by using an Activator logic object.
</div>

<div className="highlight-div">
    Buttons can not be activated by Animations, other Buttons or any other logical object, only by Autoplay or players.
</div>