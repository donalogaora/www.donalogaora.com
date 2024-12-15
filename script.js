// Shop Stuff

// Phone Stand Image Fade
const images = [
    { id: 'image-1', src: '../assets/white.png' },
    { id: 'image-2', src: '../assets/red.png' }
];
let currentIndex = 0;

setInterval(() => {
    // Current and next image elements
    const currentImage = document.getElementById(images[currentIndex].id);
    const nextIndex = (currentIndex + 1) % images.length;
    const nextImage = document.getElementById(images[nextIndex].id);

    // Fade out the current image
    currentImage.style.opacity = 0;
    currentImage.style.zIndex = 0;

    // Fade in the next image
    nextImage.style.opacity = 1;
    nextImage.style.zIndex = 1;

    // Update index
    currentIndex = nextIndex;
}, 5000); // Change image every 5 seconds
