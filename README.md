# [Frontend Mentor - Time tracking dashboard](https://time-tracking-dashboard-xmavv.netlify.app)

![Design preview for the Time tracking dashboard coding challenge](./design/desktop-design.jpg)

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw/hub)

## Table of contents

- [Overview](#overview)
    -[The challenge](#the-challenge)
- [My process](#my-process)
    - [Build with](#built-with)
    - [What I learned](#what-i-learned)
    - [What I struggled with](#what-i-struggle-with)
- [Author](#author)

### Welcome 😎

Thanks for checking out this front-end challenge!

## Overview

### The challenge

The challenge was to build an app with grid layout

It was a really good training after my css course just to remember css grids, build pretty layout, and practice more and more js

## My process

### Built with

- CSS Grid
- Sass

### What I learned

I REALLY LIKED THE BEHAVIOUR THAT I'D DECIDED TO CHOOSE WHILE CREATING CARD, AN LI ITEM

firstly i created an whole div to remain two things:
background div and info div

i thought it would not be so clean to firstly place bg, and then info div, cause then i would have to
move it down absolutely to the card

so in the hmtl markup i first put the info div, and then bg

but to be the same as on the design i just flipped the order using flexbox

```
display:flex;
flex-direction: column-reverse;
```

it was unnecessary then to move smth around smth, just clen order :D

### What I struggle with

Firstly:

i had a little problem with height on body, at the beggining i wanted to have

```
height: 100vh;
```

to center my items vertically
but then when screen shrinks, grid items responsively shrink to 1column, and i didnt see
whole page, but only the end, it was because of height: 100vh, and i did not know how to 
deal with it
so i just add padding-top at the body tag, to kinda center it

Secondly:

while hovering the "more icon" i could not change it fill in css: 

```
        &-more {
            cursor: pointer;
            fill: white;

            @include respond($bp-medium) {
                justify-self: end;
            }
        }
```

idk why it was quite confusing

so i just did it by javascript, while mouseenter i just change the img
this isn't perfect cause i have a function inside function and i had to do this like this
cause when i render the li elements i cannot add eventListeners outsite that function
not quite optimal but...

## Author

- my github profile - [xmavv](https://github.com/xmavv)
- my frontend mentor profile - [@xmavv](https://www.frontendmentor.io/profile/xmavv)
- my behance profile - [mav](https://www.behance.net/mavrgb)