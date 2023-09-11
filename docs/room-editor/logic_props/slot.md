---

---

# Slot

An object that represents a "keyhole". any defined "key" can unlock it. Anything can be a slot.

![Slot Selector](./img/Slot-Selector.png)

Slots get triggered if you place the correct item in them. Every traditional lock with a key will have to have a slot in place. Remember if you make a door "lock", to parent the slot to the door, so that it will move with it when the door opens. Else you end up with floating keys!
It can only be occupied by one item at a time.

## Properties

### :small_orange_diamond:Keys

<div className="highlight-div">
Here you add each item that will be accepted as the correct key for this slot. Everything can be a key, not just actual key shaped items. Just make sure to not accidentally make your keys static.
If you want to have an animated pickable item be a key, you need to assign it as a key BEFORE turning it into an animation. Then it works, even if animated objects can not be added as keys normally.
</div>

### :small_orange_diamond:Reject keys

<div className="highlight-div">
Items you add here will be accepted into the slot, but they will not trigger the slot to give out a signal.
</div>

### :small_orange_diamond:Output value

<div className="highlight-div">
Numerical value that gets send to a lock when the slot gets activated.
</div>

### :small_orange_diamond:Unlock success

<div className="highlight-div">
Determines if the slot stays usable after being activated once.
</div>

### :small_orange_diamond:Unlock success key

<div className="highlight-div">
Decides what happens with the correct key after it activated the slot:

- *Merge* means that it will become a static part of the slot, you can not pick it up anymore.
- *Parent* means that the key will stay in the slot and move with it, but it can be picked up again.
- *Eject* will put the key right back into the player inventory the activation process/animation.

If you have several single use keys in your room, it is advisable to simply merge them to the slot after success to avoid inventory clutter or confusion.
</div>


### :small_orange_diamond:Unlock failed key

<div className="highlight-div">
The same as with success key. Make sure to not accidentally make false keys merge, else it will prevent the slot from ever being opened.
</div>

### :small_orange_diamond:Animation type

<div className="highlight-div">
Here you can decide if you want your item to spin like a key, or to do nothing like a properly placed statue or book. Turn Duration and Turn Count determine the turning animation further. You can also make the turn be less than one! This can create lever-like effects sometimes or other interesting stuff. I use less-than-one turn effects in combination with further animation, so that for example a writing pen has a more complex animation consisting of two different movements.
</div>

### :small_orange_diamond:Turn axis

<div className="highlight-div">
Will determine how your key turns. Make sure to test this! Because the default axis makes some of the actual key assets spin sideways! And that looks quite silly.
</div>

### :small_orange_diamond:On place

<div className="highlight-div">
If the correct key is placed in the slot, the slot will activate/send a 1 to the items you link here.
</div>

### :small_orange_diamond:On remove

<div className="highlight-div">
If the correct key or an incorrect key is removed from the slot, the slot will activate/send a 1 to the items you link here.
</div>

## 💡Tips

:::tip
Animated items cannot be assigned as keys. Assign them to be keys first, then animate them. This way the key properties will carry over and be retained when it becomes a pickable animation.
:::

:::tip
Some items can fall into slots if placed or dropped above them, others will fall through slots. To make items fall into slots that normally wouldn't you can give them a slotable parent and hide that inside the actual object. It will lend its slotableness to the child.
:::


:::tip
When a slot rejects an incorrect key the slot will send a 0 value to whatever it is connected to
:::