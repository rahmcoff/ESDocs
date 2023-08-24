---

---

# Roulette

![Roulette Selector](./img/Roulette-Selector.png)
The main purpose of the Roulette logic prop is to add randomness to your custom room.
It is a prop you can target with a button, animation, slot and other. When the Roulette prop is triggered one of the items from the [Targets](#targets) list is chosen at random and triggered.

:::note
In Versus mode all Roulette random selections are synced, so all players are playing the same version to keep it fair.
:::

## Properties

### :small_orange_diamond:Remove Target On Trigger

<div className="highlight-div">
	Determines whether each target can be triggered multiple times.
</div>

When this checkmark is _checked_, each time you trigger this Roulette prop the random target selected will be triggered and then removed from the possible list of targets. So the next time this same Roulette prop is triggered the target triggered previously will not be triggered again.
This ensures each target can only be triggered once. If you trigger this Roulette prop more times than there are targets in the list all the targets will be triggered once and all subsequent triggers will be ignored.

When this checkmark is _not checked_, every target can be triggered multiple times. It is also possible that the same target will be triggered multiple times in a row.

### :small_orange_diamond:Targets

<div className="highlight-div">
	A list of targets that the roulette will choose from randomly.
</div>

Press the '+' button to add new targets from the scene, e.g. an animation behaviour. 

:::tip
Locks cannot be targeted but you can target an Empty logic prop with an Animation behaviour that is connected to a lock.
:::

### :small_orange_diamond:Testing Target

<div className="highlight-div">
	Determines which one of the targets you want the Roulette prop to always trigger. Used only for testing purposes.
</div>

This property is only shown if you have at least one item in the [Targets](#targets) list.

:::note
Testing target is only active while in the Room Editor.
:::
