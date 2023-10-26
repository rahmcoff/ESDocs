---

---

# Finish
This logic item will show the victory screen when an input is given to it. The camera will rotate around a given location. If no properties are changed, it will rotate at the default spawn (0, 0)

![Finish Selector](./img/Finish-Selector.png)

## Properties

### :small_orange_diamond:Next Room ID
<div className="highlight-div">
Add your Steam workshop room ID here so players can load the linked room when they trigger this 'Finish' prop. You can just copy and paste the workshop page URL of a published room: 'steamcommunity.com/sharedfiles/filedetails/?id=*ROOMID*'. The room loading does not work while running the room editor, it needs to be triggered in a published room.
</div>

If a room ID is supplied, then it will cause a "Download Next Room" button to appear on the finish screen after the player starts the end screen animation by triggering this `Finish` prop.

### :small_orange_diamond:Rotate On Finish
<div className="highlight-div">
When checked the camera will start rotating above the position of the selected 'Finish' prop. Exact position is equal to the 'Finish' position plus 1 on the y axis.
</div>

Causes the camera to rotate at the location of the finish object when the end screen animation and dancing start.

:::tip
If you know where all the players will be when ending the room this is probably the best setting, because you can test make sure that the rotating camera doesn't clip through the walls or other props.
:::

### :small_orange_diamond:Rotate On Player
<div className="highlight-div">
When checked the camera will start rotating next to the position of the player. Exact position is equal to the player position plus 1.5 on the x and y axis.
</div>

Causes the camera to rotate at the location of the player. Each player will have their character as the focus of the camera.

:::note
The camera could clip into walls or other props depending on the final position of the player.
:::
