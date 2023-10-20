# Slidable
Allows you to slide a prop between 2 points.

![Slidable](./img/slidable_selector.png)

## Properties

### :small_orange_diamond:Edit End Node

<div className="highlight-div">
Position of the slidable node with the last index.
</div>


Clicking the button will open the special Slidable settings screen where you can set the final position of the Slidable.

![Slidable - Edit End Node](./img/slidable_settings.png)

Here you can move the camera as you move it in the Room Editor (holding right click and using the WASDQE keys for movement) and move the position of the Slidable prop. Rotation and scale changes will not be regarded for the Slidable.

:::note
Only the props that are set as children to the prop with the Slidable behaviour will be used for sliding.
:::

### :small_orange_diamond:Snap Mode

<div className="highlight-div">
No Snapping - No snapping will be performed on release.
Closest - Snap to the closest snap point on release.
Starting - Snap to the starting point on release.
</div>

Snap mode determines what the Slidable should do after the player lets go of the Slidable. That affects the position of the Slidable and when the connected Locks will be notified of the player stopping the interaction. The output values are determined by closeness. The snap point closest to the slidable will determine the output value.

The examples below demonstrates each mode, with the output value being shown above the Slidable. 

- `No Snapping`

The Slidable will stay at the position it was let go at and the output value will immediately be sent to the locks.

![Snap mode - No snapping](./img/slidable_noSnapping.gif)

- `Closest`

The Slidable will animate to the closest snap position when let go. The output value will be sent to the connected locks as soon as the Slidable is done animating to the closest snap position.

![Snap mode - Closest](./img/slidable_closest.gif)

- `Starting`

The Slidable will animate to the Starting Node when let go. The output value will be sent to the connected locks as soon as the player stops the interaction. The Starting Node can be set by another setting.

![Snap mode - Starting](./img/slidable_starting.gif)

### :small_orange_diamond:Additional Snap Points

<div className="highlight-div">
Number of additional snap points between nodes. If zero, snap is performed between start and end nodes.
</div>

Here you can add additional snap points on the line. e.g. if you want a total of 5 snap points, you'll write 3 here, because the start and end points are not counted.

![Snap points](./img/slidable_snapPoints.png)

### :small_orange_diamond:Locks

<div className="highlight-div">
Target locks will receive the node index of the closest node, starting from 0 to the number of nodes - 1. For the snap to 'Closest' mode the 'On Change' triggers when snapping is completed, for other modes it is triggered on release.
</div>

This is where you will select which Locks (and their value position) you want the Slidable to send it's current position to. 

### :small_orange_diamond:Starting Node

<div className="highlight-div">
Set the index of the position you want the 'Slidable' to start at.
</div>

This will be the starting position when starting the room and the return point if the snap mode `Starting` was chosen. The indexing of the nodes does not change and they will return the same values as with the default 0 starting node.

### :small_orange_diamond:Snap Animation Duration

<div className="highlight-div">
Snap animation duration in seconds. If zero, snapping will not be animated. Default is 0.3.
</div>

This duration in seconds show the amount of time it will take the Slidable to traverse the distance from one node to the other.

e.g. If the snapping mode `Closest` is selected and the player releases the Slidable right in the middle of two nodes, the time it takes the slidable to snap to the closest node will be half the Snap Animation Duration.

e.g. If the snapping mode `Starting` is selected and the player releases the Slidable three nodes away from the Starting node, it will take the Slidable 3 times the Snap Animation Duration.

## Common uses
- Add to drawers that can be opened via sliding.