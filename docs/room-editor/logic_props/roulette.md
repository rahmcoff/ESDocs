---

---

# Roulette

![Roulette Selector](./img/Roulette-Selector.png)
The main purpose of the Roulette logic prop is to add randomness to your custom room.
It is a prop you can target with a button, animation, slot and other. When the Roulette prop is triggered one of the items from the [Targets](#targets) list is chosen at random and triggered.


## Properties


### Remove Target On Trigger
When this checkmark is _checked_, each time you trigger this Roulette prop the random target selected will be triggered and then removed from the possible list of targets. So the next time this same Roulette prop is triggered the target triggered previously will not be triggered again.
This ensures each target can only be triggered once. If you trigger this Roulette prop more times than there are targets in the list all the targets will be triggered once and all subsequent triggers will be ignored.

When this checkmark is _not checked_,

### Targets

Press the '+' button to add new targets from the scene, e.g. an animation behaviour. 

### Testing Target
This property is only shown if you have at least one item in the [Targets](#targets) list.


## Example


## 💡Tips
- 
