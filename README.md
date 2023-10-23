# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)



## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

![](./screenshot.jpg)
<img width="280" alt="1" src="https://github.com/khatias/faq-accordion-card-main-/assets/130936157/f460b6e8-cdbd-4e4b-908e-deb5b7c5db53">
<img width="1906" alt="Screenshot 2023-10-23 154102" src="https://github.com/khatias/faq-accordion-card-main-/assets/130936157/42db6f3b-5773-4955-aaac-d31fa0f03ea2">



### Links

- Solution URL: [Solution URL](https://github.com/khatias/faq-accordion-card-main-)
- Live Site URL: [Live Site URL](https://khatias.github.io/faq-accordion-card-main-/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Javascript](https://www.javascript.com/) - JS library

## What I learned

In the course of working on this project, I gained valuable insights into several key areas. Here's a summary of some of my major learnings:

### Event Handling with `for` Loops

One of the key aspects I learned in this project was how to efficiently handle events using `for` loops. This allowed me to apply consistent interactivity to multiple elements on the web page. Below is a code snippet illustrating how I used `for` loops to apply click event listeners to a set of HTML elements:

```javascript
// Selecting elements and adding event listeners with a for loop
let dtElements = document.querySelectorAll("dt");

for (let i = 0; i < dtElements.length; i++) {
    dtElements[i].addEventListener("click", function () {
        let ddElement = this.nextElementSibling;

        if (ddElement.style.display === "none" || ddElement.style display === "") {
            ddElement.style.display = "block";
            this.classList.add("expanded");
            dtElements[i].style.fontWeight = "700";
        } else {
            ddElement.style.display = "none";
            this.classList.remove("expanded");
            dtElements[i].style.fontWeight = "400";
        }
    });
}
```


### Continued development

While this project has allowed me to acquire valuable skills and insights, I'm committed to ongoing improvement and exploration in the world of web development. In the future, I plan to:

- Enhance my proficiency in JavaScript, aiming to tackle more complex challenges and optimize code for efficiency.
- Dive deeper into CSS and explore advanced styling techniques to create visually stunning web applications.
- Explore the world of responsive and mobile-first design to ensure my projects are accessible to a wide range of users.


## Useful resources
- [w3schools](https://www.w3schools.com/tags/tag_dl.asp) - This source helped me to better understand the structure of the dl list, I really liked this pattern and will use it going forward.


