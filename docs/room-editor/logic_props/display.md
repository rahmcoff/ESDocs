---

---

# Display

A display shows an image or grid of images from a configured sprite sheet. The display shows a particular image when fed an input from a lock.

![Display Selector](./img/Display-Selector.png)



## Properties


### :small_orange_diamond:Target Lock

<div className="highlight-div">
During play the selected lock's current inputted password will be used for the display. During edit time the display shows the password value.
</div>

The lock that will define what images to be shown. As the values sent to the lock changes the display changes to images based on the numbers on the lock. If 0 is sent to the lock, it will display the first image in the sprite sheet. 

While editing the room the Target lock's password will be used for displaying. When playing the room the Display shows the images from the actual values of the Target lock.

![Display setup](./img/display/display_setup.png)

![Display setup](./img/display/display_lock.gif)

### :small_orange_diamond:Columns

<div className="highlight-div">
Amount of display columns to show.
</div>

The number of columns of images to be shown on the display.

### :small_orange_diamond:Rows

<div className="highlight-div">
Amount of display rows to show.
</div>

The number of rows of images to be shown on the display.

### :small_orange_diamond:Padding

<div className="highlight-div">
Amount of space to leave around a single display quad.
</div>

The amount of horizontal and vertical padding between the shown images.
Default is 0, 0.

### :small_orange_diamond:Sprite Sheet Columns

<div className="highlight-div">
Enter the amount of sprites the selected 'Sprite Sheet' has in one row.
</div>

The number of columns in the linked sprite sheet. The display will slice the images evenly from the sprite sheet based on this number.

### :small_orange_diamond:Sprite Sheet Rows

<div className="highlight-div">
Enter the amount of sprites the selected 'Sprite Sheet' has in one column.
</div>

The number of rows in the linked sprite sheet. The display will slice the images evenly from the sprite sheet based on this number.

### :small_orange_diamond:Sprite Sheet

<div className="highlight-div">
Image that will be segmented and shown. The first segment is the top left one and it represents the number 0.
</div>

An image containing rows / columns of images to be shown. The sprites are indexed from top-left starting at 0, going row by row.

