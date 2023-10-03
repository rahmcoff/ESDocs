# Puzzle

The puzzle logic object allows you to mark players' progress, manage available walkthrough sections, and trigger events for other players in versus mode.

![Puzzle Selector](./img/Puzzle-Selector.png)

## How to set up puzzles

For every puzzle in your room, do the following:
- place one puzzle object for each puzzle in the room and give it a meaningful name
- connect all previous puzzles that are required to solve this puzzle as puzzle conditions
- optional: create a walkthrough section, then connect it under hints
- optional: create in-game hints and catch-up effects for versus mode (e.g. to show outlines of objects where they must be placed, or to remove obstacles), then connect these as competitor targets
- when the player solves the puzzle, send a signal to the puzzle object

## Effects of puzzles
### In Single player mode

- on game start, all walkthrough sections will be hidden, unless an unlocked puzzle lists them
- when solved, a puzzle completed sound will play (unless `Mute Sound` is marked)
- if solving the triggered puzzle unlocks another puzzle, the connected walkthrough sections of the unlocked puzzle are made available to the players (so only the hints for unsolved puzzles are shown)

### In co-op mode
- same as single-player mode
- when solved, a message will be shown to all players: "PLAYER NAME" has solved "PUZZLE NAME"

### In versus mode
- on game start, all walkthrough sections will be hidden, unless an unlocked puzzle lists them
- when solved, a puzzle completed sound will play (unless `Mute Sound` is marked)
- when solved, a message will be shown to all players: "PLAYER NAME" has solved "PUZZLE NAME"
- when solved, all its walkthrough sections will become visible **for competitors** that have not solved the puzzle yet, and have fulfilled their conditions
- all its competitor targets will be triggered **for competitors**

:::note
A puzzle is considered <b>unlocked</b> when all puzzles listed as conditions are solved.
:::

## Properties

### :small_orange_diamond:Puzzle Name

<div className="highlight-div">
The name players will see displayed when they complete the puzzle. Keep this empty if you don't want to display a text message.
</div>

In multiplayer a message, `"PLAYER NAME" has solved "PUZZLE NAME"`, is shown whenever a puzzle is solved. The "PLAYER NAME" is replaced with the player username, and the "PUZZLE NAME" is replaced with the name you write in this field.

If you don't want to display the message when a puzzle is solved, just leave this field empty.

### :small_orange_diamond:Mute Sound

<div className="highlight-div">
If not checked the puzzle will play the default puzzle completed sound when triggered.
</div>

When checked, the puzzle completed sound will not play when a puzzle is solved.

When not checked, the puzzle completed sound plays.

### :small_orange_diamond:Hints

<div className="highlight-div">
Hints that help the player solve this puzzle.
</div>

Here you can connect all walthrough sections that help the player solve this puzzle. 

If the + sign is grayed out you haven't added any walkthrough sections. You can do so in the publish options in the top left menu of the Room Editor.

To add new hints for this puzzle press the + button and select a walkthrough section. You can delete the currently selected section by clicking the first option `Delete`.

:::note
See effects of puzzles above for behaviour in different play modes.
:::


### :small_orange_diamond:Puzzle conditions

<div className="highlight-div">
Link all puzzles that need to be solved before this one. All listed puzzles need to be solved before hints for this puzzle show up. If a player solves a puzzle with a condition without solving the condition first the condition is silently marked as solved without triggering.
</div>

Connect to all puzzles that must be solved for this puzzles to be unlocked.

:::tip
A puzzle with no condition will reveal its hints at the beginning of the room. If you want to reveal them after other events (for example, when entering a room), use an additional puzzle as condition. Mute that puzzle's sound and leave its name empty, and trigger it when the real puzzle is reached.
Note that this dummy puzzle will still appear in the puzzle count for versus mode.
:::

### :small_orange_diamond:Competitor targets

<div className="highlight-div">
Only active if the game is multiplayer and the lobby type is competitive. The targets are triggered at all players except the local player.
</div>

A signal is sent to these targets by the puzzle when it's solved. In versus (competitive) mode they are triggered for all players except for the player that solved the puzzle first.
