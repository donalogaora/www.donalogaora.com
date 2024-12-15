// Shop Stuff

// Phone Stand Image Fade
const images = [
    { id: 'image-1', src: '../assets/white.png' },
    { id: 'image-2', src: '../assets/red.png' }
];
let currentIndex = 0;

setInterval(() => {
    // Hide all images
    images.forEach(image => {
        document.getElementById(image.id).classList.remove('visible');
    });

    // Show the next image
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById(images[currentIndex].id).classList.add('visible');
}, 5000); // Change image every 5 seconds
