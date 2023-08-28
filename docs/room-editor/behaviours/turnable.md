# Turnable
Turnables are used as inputs for locks. They can give a range of values as output, starting with 0 and ending with the number of steps you assign -1

## Properties

### :small_orange_diamond:WORLD AXIS
This determines along which axis your turnable will turn when moved. Sideways, upwards, etc. and in which direction the next higher "number" is.

### :small_orange_diamond:SCREEN AXIS
This determines how the mouse movement affects the turnable. Many people set this wrong for their turnables, which will result in you pulling down a number dial, but instead it will move upwards. Keep an eye on this in your rooms!

### :small_orange_diamond:STEPS
This determines how many snap positions the turnable will have and how many different signals it will be able to send. A turnable with 4 steps will send out the values 0, 1, 2, 3. Even if the numbers on it are 1, 2, 3, 4. This is important to know when setting up your lock!

### :small_orange_diamond:LOCKS
The lock(s) this turnable gives information to. If it is an "inplace" lock, make sure to assign the turnable to the correct position of password digits!

## Helpful Tips
<div className="highlight-div">
    There is NO RULE OF THUMB regarding the way the World Axis setting for objects when you spawn them in. The angle they move as a turnable is based on their native orientation that you can see when you have a look at the local coordinates of the object. Here is a small overlook over the most common turnables:

![image](./img/turnableRecommended.png)

The rules the seemingly erratic behaviors follow are those:

Making sure you have the coordinate display toggled to the Local coordinate axes:

    Up = Positive Green

    Down = Negative Green

    Right = Positive Red

    Left = Negative Red

    Forward = Positive Blue

    Backward = Negative Blue
</div>

<div className="highlight-div">
    The direction of "positive rotation" is determined by the Left Hand Rule.
    Form a "thumbs up" pose with your left hand, then point your left thumb in the direction of the selected axis.
    "Positive rotation" will be the direction the rest of your fingers are curled.
</div>

<div className="highlight-div">
    When selecting Screen Axis, dragging the object in the selected direction will rotate the object positively, and dragging the object in the opposite of the selected direction will rotate the object negatively.
    Thanks to SethBling for this.
</div>

<div className="highlight-div">
    Since this is difficult to memorize and prone to make mistakes happen, remember you can use Ctrl + "Enter Play Mode" button to start a test run at the camera location, which makes it easy to test your settings very quickly.
</div>

<div className="highlight-div">
    Turnables can be everything. A valve, a numbers lock, a stature or even an elephant.
</div>

<div className="highlight-div">
    Keep in mind you can retexture your Turnables to have custom faces that show numbers, symbols or whatever else you want!
</div>