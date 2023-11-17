# Dial (WIP)
A `Dial` is a behaviour that can be placed on a prop that is meant to be used for interactions with props where you want the player to rotate the mouse across the screen. For instance, if you have a 'Valve' prop and it is pointing at the screen, you will most likely want to use a `Dial` behaviour and not the `Turnable` because turnables only rotate by moving the mouse in two direction (e.g. right - left). This is most useful when you can limit the player's viewing angle, e.g. by using it in a `Zoomable` where the player can not change the view. If used from strange views it can appear buggy, so test your room to determine if you need a `Dial` or a `Turnable`.

## Properties

### :small_orange_diamond:World Axis
<div className="highlight-div">
Determines along which axis the prop will rotate.
</div>

This determines along which axis your `Dial` will spin when moved and in which direction the next value is. You can use the axis example image below to determine which axis will best fit your needs.

![Axis](./img/turnable/turnable_axis.png)

There is no player axis, because the player is supposed to grab a part of the dial and spin it manually in the needed direction. 

:::note
Don't forget to set the axis view to 'local' so you are viewing the correct axis angles!
:::

:::tip
You can also use the rule of the __left thumb__ to easily determine the axis needed and the direction. Check it out at the bottom of this page!
:::

### :small_orange_diamond:Value Count
<div className="highlight-div">
Determines the amount of dial steps. Shouldn't be larger than Value Output Range (gives zero).
Usually you need to set it to the same number as the Output Value Range. Make it double the Output Value Range to only get even numbers.
</div>

The number of section the dial is split into. 

:::note
Do not enter a 0 here, else the game will try to divide by 0, which leads to errors that will clutter your playerlog.
:::

### :small_orange_diamond:Value Output Range
<div className="highlight-div">
</div>
- Specifies which range of numbers are assigned to each section. It's almost always best to keep these the same (i.e. both would be 12 for a clock face)
- If you have a dial with the VALUE COUNT 4, it has 4 sections to which you can turn your wheels. The OUTPUT those sections give depends on the **Value Output Range**. This is going to be a bit weird, so do not be alarmed if you feel confused at first. Let's take our 4-section turn-able wheel. The top section output (with me applying a forward spin axis) is 0. The following section outputs will be determined by what you enter as "Range". If you have 4 sections from your VALUE COUNT of 4 and then enter 8 as the OUTPUT RANGE, the output of the sectors will look like this:

![image](https://user-images.githubusercontent.com/2043673/194778150-4a5b6870-48e3-4283-b26a-42b4b1252d79.png)

Having a Value Output Range of 12 will give outputs 0, 3, 6, 9.
If you choose numbers that are not equally divertible between the sectors, they will be ignored and the next lower number assumed that works. So e.g. having a Value Output Range of 13 for our 4-sector Dial will still result in the same output as the Value Output Range 12 one. Only Value Output Range 16 will start changing the output values again.
This is really weird stuff, so if you want to use dials, just enter the same numbers for both Value Count and Value Output Range. This should work for nearly all things you plan to do with dials.

### :small_orange_diamond:SNAP TO POSITION
<div className="highlight-div">
</div>
Seems to be bugged at the moment, but is supposed to work similar as with the turnables.

### :small_orange_diamond:LOCKS
<div className="highlight-div">
</div>
The lock(s) this dial connects to.

Dials will only output when they are stopped and let go off.

Whenever you can avoid dials, use Turnables instead.

## Helpful Tips
<div className="highlight-div">
    Dials will only output when they are stopped and let go off.
</div>

<div className="highlight-div">
    Whenever you can avoid dials, use Turnables instead.
</div>


## Left Thumb Rule
You can use the Left Thumb rule to determine the axis and direction of the `Dial`. Point your left thumb in the same direction the axis you want to turn the `Dial` around. To determine the click direction of the `Dial` form a "thumbs up" pose with your left hand and look at your fingers, they will point in the direction the turnable will rotate.


The image below shows the names of the axis. Firstly, you must change the purple marked button that says 'LOCAL' in the image to the icon in the image. That will affect the way the arrows point. This sets the coordinate axis along the prop's local rotation, while the other 'Global' setting sets the axis according to the world.

![Axis](./img/turnable/turnable_axis.png)

E.g. if you're pointing your left thumb towards yourself, the `Dial` will turn clockwise when you click it, and the rotation direction will depend on the mouse movement.

:::tip
Since this can be difficult to memorize and prone to make mistakes happen, remember you can use Ctrl + "Enter Play Mode" button to start a test run at the camera location, which makes it easy to test your settings very quickly.
:::