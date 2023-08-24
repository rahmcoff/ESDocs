---

---

# Trigger

Triggers are highly useful Logic Items that check if a certain trigger object is within their boundaries or not. This trigger item can also be players! Triggers are also used for many creative workarounds.

![Trigger Selector](./img/Trigger-Selector.png)


## Properties

### :small_orange_diamond:Is Sticky
<div className="highlight-div">
	When checked, the trigger is disabled after it is triggered once and can no longer be triggered.
</div>

This means the trigger will no longer activate anymore once it was triggered for the first time.

### :small_orange_diamond:Output Value
<div className="highlight-div">
	Number that will be sent to the targeted props on correct completion.
</div>

Numerical value that gets sent to a lock when the trigger field gets activated.

### :small_orange_diamond:Triggers By Player
<div className="highlight-div">
	Determines whether the Trigger should respond to players.
</div>

When checked, players that enter the trigger area can trigger it.
When not checked, the trigger ignores players entering the trigger area.

This will cause the Trigger to cause actions when a player enters or leaves the trigger area. Good for timed animations, for traps or for selective teleport!

### :small_orange_diamond:Triggers By All Players
<div className="highlight-div">
	Determines whether this trigger should only respond when all players are present/not present.
</div>

When checked, the trigger will activate once all the players are in the trigger area.
When not checked, the trigger will activate when only one player enters the trigger area.

If this is checked Exit Actions will trigger when one of the players exits the trigger.

:::note
This property is visible only if the Triggers By Players is checked
:::

### :small_orange_diamond:Triggers By
<div className="highlight-div">
	A list of props which will cause the trigger to activate.
</div>


### :small_orange_diamond:Enter Actions
<div className="highlight-div">
	Prop actions that are triggered when the triggering objects or players ENTER the 'Trigger' collision box.
</div>

Things that get activated when a Trigger prop or player enters the trigger area. This can also be linked to a lock, to create "pressure plates" on the floor!

If you want a trigger to be active only as long as the trigger item is inside, add the desired effect (e.g. a lock) here. The trigger will then send the value written in the `Output Value` (default is 1) when the object enters and a 0 if it leaves. Do not add the lock to "on leave" then! else it always gets a 1 and never a 0.

### :small_orange_diamond:Exit Actions
<div className="highlight-div">
	Prop actions that are triggered when the triggering objects or players EXIT the 'Trigger' collision box.
</div>

Things that get activated when a Trigger Item leaves the trigger area. Here the value written in the `Output Value` (default is 1) is sent when the trigger object or player leaves the trigger zone.

If `Triggers By All Players` is checked, the Exit Actions will be triggered when one of the players leaves the trigger.

:::note
Triggers that target a lock will ignore the lock's password check delay.
:::
