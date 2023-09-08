---

---

# Display

A display shows an image or grid of images from a configured sprite sheet. The display shows a particular image when fed an input from a lock.

![Display Selector](./img/Display-Selector.png)

## Properties


### :small_orange_diamond:Target Lock

<div className="highlight-div">
	The lock that will define what images to be shown. As the values sent to the lock changes the display changes to images based on the numbers on the lock. If 0 is sent to the lock, it will display the first image in the sprite sheet. The "password" on the lock will show a preview on the display in the room editor.
</div>


### :small_orange_diamond:Columns

<div className="highlight-div">
	The number of columns of images to be shown on the display.
</div>

### :small_orange_diamond:Rows

<div className="highlight-div">
	The number of rows of images to be shown on the display.
</div>

### :small_orange_diamond:Padding

<div className="highlight-div">
	The amount of horizontal and vertical padding between the shown images.
</div>

### :small_orange_diamond:Sprite Sheet Columns

<div className="highlight-div">
	The number of columns in the linked sprite sheet. The display will slice the images evenly from the sprite sheet based on this number.
</div>

### :small_orange_diamond:Sprite Sheet Rows

<div className="highlight-div">
	The number of rows in the linked sprite sheet. The display will slice the images evenly from the sprite sheet based on this number.
</div>

### :small_orange_diamond:Sprite Sheet

<div className="highlight-div">
	An image containing rows / columns of images to be shown.
</div>

<!---
## Example


## 💡Tips
--->