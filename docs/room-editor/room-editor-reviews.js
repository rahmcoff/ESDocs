import React from 'react';
import { Slide } from 'pure-react-carousel';

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

export const Reviews = () => {
    shuffleArray(reviews)

    return reviews.map((currElement, index) => {
        console.log(index);
        return (
            <Slide index={index} className="highlight-div">
                {currElement}
            </Slide>
        )
    });
};

export const reviewAmount = () => reviews.length;

const reviews = [
    <>
        <p>
            What impresses me most about Escape Simulator's room editor is that it is smartly designed to be both accessible to absolute newcomers while providing an extremely high skill ceiling for experienced room builders.
        </p>
        <p>
            Even without using the built-in lua framework, one can create nuanced logic by chaining together the basic lock, empty, activator, slot, trigger logic objects.
        </p>
        <p>
            Instead of grappling with the intricacies of the room editor, builders can focus on the actual level design.
        </p>
        <h3>~ Zesty Mordant</h3>
    </>,
    <>
        <p>
            I remember when I started...
            A simple room with simple puzzles and animations.
        </p>
        <p>
            Then I made the next step.
        </p>
        <p>
            Another room with more complicated puzzle  mechanics...
            And again, another room with even more complicated animations.
        </p>
        <p>
            So I made the next step again!
            I learned how to make my own custom models to my maps and learned LUA.
        </p>
        <p>
            Now when I watching some people who playing my maps and really having fun, I remember...
            when it all started.
        </p>
        <p>
            Thanks to your Room Editor dreams really can come true!
        </p>
        <h3>~ Bartololomeo</h3>
    </>,
    <>
        <p>
            The ability to import GLTF models is extremely powerful. Mastery of this tool theoretically allows room builders to create a AAA game aesthetic tied together with all the sophistication of Escape Simulator's logic systems.
        </p>
        <h3>~ Duc</h3>
    </>,
    <>
        <p>
            I didn’t even realize Room Editor was part of Escape Simulator when I first got the game, but after spending 2000+ hours using it to design and publish my own rooms over the past few years, it’s safe to say we are a pretty good match! Like any new tool, it takes some time to learn the basics, but the user interface is very intuitive and rewards those who play around with it for a while.
        </p>
        <p>
            Whether you want to create traditional escape rooms, immersive experiences, puzzle games, interactive fiction, or anything else you can dream up, there is truly no limit to what you can build with Room Editor, as evidenced by the thousands of wildly imaginative Community rooms available in the workshop. For an example of what is possible, check out “The Collab: Museum” if you haven’t already done so, or any other room that grabs your eye.
        </p>
        <p>
            On a personal note, Room Editor has unleashed a new side of my creativity that I didn’t even know existed, and even helped me get out of a creative funk. Through a combination of trial and error and support from the friendly ES Discord community, I’ve had so much fun (and more than a few sleepless nights) exploring what makes for a compelling puzzle and good game design in general.
        </p>
        <p>
            Escape Simulator would still be a wonderful game even without Room Editor, but this tool elevates it to a completely different level and could even be a standalone release if it wasn’t so well integrated into the base game. I cannot recommend Room Editor (and by extension, Escape Simulator) strongly enough…maybe you picked up on that. 😄
        </p>
        <h3>~ Franch</h3>
    </>,
    <>
        <p>
            The Room Editor for Escape Simulator allows anyone who has ever dreamed of creating an interactive puzzle experience to quickly bring their wildest ideas to life. Even those people with zero background in game development can easily realize their designs and create traditional escape rooms or even create rooms in the style of well-loved puzzle games such as The Room or Myst. I've never encountered a tool that so readily allowed me to express my creative vision with such ease and with so little knowledge coming in. I can't recommend Escape Simulator enough for its incredible value and for its ability to capture and express my imagination in every way I can dream up.
        </p>
        <h3>~ Robin</h3>
    </>
]