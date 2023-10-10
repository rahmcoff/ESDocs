# Collider

An invisible barrier that will stop items and clicks from going through an area, but not the player. You can rotate, rescale and the position the prop in any way to block clicks or to change the physics properties of items.

![Collider Selector](./img/Collider-Selector.png)

### Common uses for a collider prop
1. Can be used to create a new "hit box" for something that has had its collider disabled (with the Visibility Activator). Just make the Collider a child of the prop you want to change the collision box of. This is especially useful for custom models.

2. Can be used for blocking the player from clicking to pick up an item, or interact with a button or a slot, but if the player gets too close they can move into the collider and bypass the Collider. To make sure the player can't get too close you can use the Obstacle logic prop on the ground.
