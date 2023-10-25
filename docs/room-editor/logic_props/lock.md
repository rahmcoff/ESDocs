---

---

# Lock (WIP)

Locks are a logic object that, when sent its configured password, will "unlock" and can send an output to another logic object or other objects with specific "Behavior" <!-- TODO: Set a link to behaviors page --> properties set. Locks are used to trigger events (opening chests, winning, animations, etc) when certain requirements are met.

![Lock Selector](./img/Lock-Selector.png)

## Properties

### :small_orange_diamond:Type

<div className="highlight-div">

types: _(Inplace | Continuous | Fixed)_

</div>

#### Inplace
  
  Each input is assigned to a specific position of the password. An input will only change the position that it is targeting.

  In the example image below, all of the buttons are assigned to the first position, so only the first position changes when a button on the keypad is pressed.
   


#### Fixed (_Similar to Continuous_)

   Any input that is sent to the lock, no matter where it comes from or what position it is sent to, changes the value next in line. When the last value is entered it will loop back to the beginning. Each time the first value is entered, the remaining values are set to 0. Use this lock type when you want to make sure that values are entered in the correct order, but do not want previous attempts to impact it. You should likely use custom output values on your buttons/slots/inputs when using this lock type.



#### Continuous

   Any input that is sent to the lock, no matter where it comes from or what position it is sent to, changes the value next in line. When the last value is entered it will loop back to the beginning. Use this lock type when it only matters that a combination is entered in the correct order. You should likely use custom output values on your buttons/slots/inputs when using this lock type.
  

### :small_orange_diamond:Password

<div className="highlight-div">

  Locks need a password, which can consist of one input or several more. To create a new password digit, fill out the empty box. A new empty box for the next digit will appear.

  For Example: If you wanted a lock to open to 3 number spinners with the password "1 - 2 - 3" for unlock, you need to enter in the first box "1", in the second box "2" and the third "3". You would then link each Turnable to the lock position it is supposed to refer to (if you are using the Inplace type of lock, which you should for a regular number lock).


</div>

### :small_orange_diamond:Output Value

<div className="highlight-div">
The numerical value the lock sends out to another lock when it gets unlocked.
</div>

### :small_orange_diamond:Logic Type

<div className="highlight-div">
  This determines how the lock handles input. For an example with a 2 button input for a 2 digit password:
</div>

#### AND
Both buttons must be pressed for the lock to open.

#### OR
Any of the buttons can be pressed for the lock to open. So pressing one after the other triggers the lock twice.

#### XOR
Just ONE button can be pressed down to cause the lock to unlock. If two buttons are pressed, the lock is locked.

### :small_orange_diamond:Negate

<div className="highlight-div">
Any input that is NOT the correct password will make the lock unlock. This is used for logic gate setups.
</div>

### :small_orange_diamond:Disable On Unlock

<div className="highlight-div">
This box determines if a lock is reusable or no longer can be interacted with once the password conditions were met for the first time.
</div>

### :small_orange_diamond:Check Password Delay

<div className="highlight-div">
Can be set to determine how much time has to pass before the lock checks if the input numbers match the set password.
</div>

### :small_orange_diamond:On Unlock

<div className="highlight-div">
If the password conditions are met, things that you add here will get activated by the lock. The targets can be animations, effects or more locks.
</div>

### :small_orange_diamond:On Lock

<div className="highlight-div">
If the password conditions are no longer met, things that are added here will get activated. It can activate animations, but apparently this can not be used to send a 1/0 value to another lock.
</div>

### 


## Example

1. Used to make a lock in game have actual functionality
2. To trigger an animation when something specific happens
3. To make a display show something
4. To trigger the finish/victory screen

## 💡Tips

### Gotchas
- Locks that get relocked will turn their status to "0" and send a "passive" 0 to connected locks. That means it will change the input on the connected lock but not cause the lock to check if the password conditions are met
- Remember that Dials and Turnables are able to give input that ranges from 0 to whatever you set, while Button, Slots, Triggers and other Locks only can send one specific number (Output Value) and 0.
- Locks cannot have an output of 0

### Additional Notes
- The lock object has multiple "indexes" to pass values to from zero up to the number of values your password contains
- Locks also have a reset field, "R", that can be accessed from Scripts by targeting index -400
- Locks also have a master unlock field, "U", that can be accessed from Scripts by targeting index -500