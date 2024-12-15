// Shop Stuff

// Phone Stand Image Fade
const imageElement = document.getElementById('toggle-image');
const images = ['../assets/white.png', '../assets/red.png'];
let currentIndex = 0;

setInterval(() => {
    // Change opacity to create a fade effect
    imageElement.style.opacity = 0;

    // Wait for the fade-out to complete before changing the image
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % images.length;
        imageElement.src = images[currentIndex];
        imageElement.style.opacity = 1; // Fade back in
    }, 500); // Match the CSS transition duration
}, 5000); // Change image every 5 seconds

// Circle Hover
const circles = document.querySelectorAll('.circle');

circles.forEach((circle) => {
    circle.addEventListener('click', () => {
        circle.style.borderColor = 'green'; // Change the ring color to green
    });
});
