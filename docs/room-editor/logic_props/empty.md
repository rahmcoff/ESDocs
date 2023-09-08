---

---

# Empty
An item that can be used to link items together via parent/children relationships. Empties can be animated, can be parents, and can give outputs as animations. Empties do not have physical properties of their own.

![Empty Selector](./img/Empty-Selector.png)


## Example

### Common uses for an empty
1. Used as a parent for other objects to allow you to:
    - Move all the children at once
    - Organize items into groups
    - Act as an in-between to prevent scaling issues (if the empty keeps its original 1:1:1 uniform scale)
1. It can be animated to:
    - Be used as a timer
    - Move child objects
    - Send numeric output and trigger other logic items
    - Stack animations since objects can only store one animation

### Want to color your empty?
Thanks Robin for this tip - Add a parent, like a cube. Paint the cube, and the empty will be painted as well.
Then you can unparent and delete the cube.