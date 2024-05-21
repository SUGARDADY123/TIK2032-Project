// animation.js

// JavaScript for the animation
// Select the element to animate
const image = document.querySelector('.image');

// Add event listener for mouseover
image.addEventListener('mouseover', () => {
    // Add the 'animate' class to trigger the animation
    image.classList.add('animate');
});

// Add event listener for mouseout
image.addEventListener('mouseout', () => {
    // Remove the 'animate' class to reset the animation
    image.classList.remove('animate');
});
