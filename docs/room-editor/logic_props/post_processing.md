
# Post Processing

An object to change the way that the player's screen will process light. When given an input it will enable the Post Processing object. You can also change the post processing during gameplay by triggering another Post Processing Prop at a later time. Only one Post Processing Prop can be active at a time. Triggering another Post Processing Prop will hide the previous settings.

![Post Processing Selector](./img/Post_Processing-Selector.png)

:::note
Just like with Fog, you must trigger another Post Processing object to turn off a Post Processing object
:::

## Properties


### :small_orange_diamond:Active On Start
<div className="highlight-div">
When checked, this effect is activated as soon as the player starts the room. Only one effect can be activated on start.
</div>

If checked, the Post Processing prop will be triggered as soon as the game begins.

If not checked, the prop will remain there until triggered by e.g. an animation or a button.


### :small_orange_diamond:Transition
<div className="highlight-div">
Time in seconds it takes to transition from one Post Processing setting to this one.
</div>

This value determines how long should this Post Processing be transitioned to when triggered. When this prop is triggered all of the currently active (in the scene) Post Processing settings will start to move towards the values in this Post Processing prop. So you can create a transition from e.g. a bright colorful environment, to a dark and gloomy one. Just set how many seconds should the transition last.

Default is zero.

### :small_orange_diamond:Temperature

<div className="highlight-div">
How "hot" or "cold" you want the visuals to be. The slider ranges from making the scene tinted toward blue to white in the middle all the way up to orange.
</div>

![Post Processing Selector](./img/pp/temperature.gif)

### :small_orange_diamond:Tint

<div className="highlight-div">
The slider ranges from making the scene green all the way up to magenta.
</div>

![Post Processing Selector](./img/pp/tint.gif)

### :small_orange_diamond:Post-exposure

<div className="highlight-div">
How you want light to affect the scene. Acts like in photography having the shutter open for a lesser or longer period of time. At the low end of the slider the scene will appear more dark, and at the high end the scene will appear more bright.
</div>

![Post Processing Selector](./img/pp/exposure.gif)

### :small_orange_diamond:Hue

<div className="highlight-div">
Not much unlike the "tint" slider, this will shift all the color in the scene toward whatever hue you choose on the slider, but it will preserve luminosity and contrast. Features the whole rainbow of colors on the slider, from Blue/Purple/Red/Yellow/Green/Blue.
</div>

![Post Processing Selector](./img/pp/hue-shift.gif)

### :small_orange_diamond:Color Filter

<div className="highlight-div">
An RGB Color wheel with Saturation and Brightness baked in. This will filter all light through this color.
Needs to be enabled via "Use Color Filter"
</div>

![Post Processing Selector](./img/pp/color-filter.gif)

### :small_orange_diamond:Saturation

<div className="highlight-div">
How saturated you want the scene to appear. At the low end no color will exist in the scene, at the high end the color will appear extremely bright. 
</div>

![Post Processing Selector](./img/pp/saturation.gif)

### :small_orange_diamond:Contrast

<div className="highlight-div">
How different do you want the luminance and color to be in the scene. At the low end everything will be grey (no contrast) and at the high end the dark colors will appear very black and lights will appear very light.
</div>

![Post Processing Selector](./img/pp/contrast.gif)
