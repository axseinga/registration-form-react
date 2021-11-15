# devmentor.pl - React: Styling / Registration form

## Table of contents

-   [Overview](#overview)
    -   [The challenge](#the-challenge)
    -   [Screenshot](#screenshot)
    -   [Links](#links)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
    -   [Useful resources](#useful-resources)
-   [Author](#author)
-   [Acknowledgments](#acknowledgments)

## Overview

### The challenge

As a challenge, I had to create a form in React and style it with neomorphic elements. I had a lot of freedom to decide how my form is going to look and what it is going to include. I created a form registration to the houseplants forum.

### Screenshot

![](./screenshot.png)

### Links

-   Solution URL: [Check out my code](https://github.com/axseinga/registration-form-react)
-   Live Site URL: [and see live site here!](https://axseinga-registration-form-react.netlify.app/)

## My process

I wanted to get more practice with React functional components so I decided to split my form into tabs to create a multi-step form with a progress bar showing what step the user is. The idea was to let users navigate between tabs by clicking on a particular tab or by clicking the `next` and `previous` buttons. For the state management of the input fields, I decided to use `useReducer.js`. That allowed me to create form validation based on key and property value `hasError` and to create an error message. The inputs are validated every time user focuses out from the input field so the user is informed straight away about errors by displaying an error message under the label of the input. I tried to create my components this way I can style them with Styled Components method and re-use as many components as possible. I refactored my code as much as possible to decrease file sizes. The most troublesome for me was to create form validation based on the state so the inputs are validated after the state was changed (after the event is fired by the user).

### Built with

-   React
-   Create React app
-   React Hooks
-   Styled Components

### What I learned

I had a chance to learn to use `useReducer` hook in practice. I got lost while writing it and learned that in this kind of situation the best I can do is to go and read the documentation carefully to understand how something works and then try to apply it again to my code. This was a great introduction for the future learning of Redux as it gave me a lot of understanding of how actions and dispatching work. I learned as well about creating components' names dynamically and refactoring the code with data structures and map functions.

### Useful resources

-   [Official React website: useReducer Hook](https://reactjs.org/docs/hooks-reference.html#usereducer) - Documentation for useReducer Hook.
-   [CSS Tricks](https://css-tricks.com/the-magic-of-react-based-multi-step-forms/) - The Magic of React-Based Multi-Step Forms by Nathan Sebhastian.
-   [Font Space](https://www.fontspace.com/4yeogarden-font-f51) - 4 Yeo Garden font for images of the plants.
-   [CSS toggle switches](https://freefrontend.com/css-toggle-switches/) - inspiration for toggle switches.
-   [Stackoverflow: React / JSX Dynamic Components](https://stackoverflow.com/questions/29875869/react-jsx-dynamic-component-name)

## Author

-   Frontend Mentor - [@Axseinga](https://www.frontendmentor.io/profile/yourusername)
-   LinkedIn - [Agnieszka Urbanowicz](https://www.linkedin.com/in/agnieszka-urbanowicz-051147151/)

## Acknowledgments

Thanks to my [Mentor - devmentor.pl](https://devmentor.pl/) - for providing me with this task and for code review.
