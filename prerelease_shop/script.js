// Shop Stuff

// Phone Stand Image Fade
const imageElement = document.getElementById('toggle-image');
const images = ['../assets/shop/black_3d_printed_phone_stand_preview.png', '../assets/shop/white_3d_printed_phone_stand_preview.png', '../assets/shop/space_grey_3d_printed_phone_stand_preview.png', '../assets/shop/blue_3d_printed_phone_stand_preview.png', '../assets/shop/red_3d_printed_phone_stand_preview.png', '../assets/shop/orange_3d_printed_phone_stand_preview.png'];
let currentIndex = 0;
let carouselInterval; // Store the interval for stopping the image carousel

// Function to start the carousel
function startCarousel() {
    carouselInterval = setInterval(() => {
        // Ensure smooth image fade transition without delay in circle highlighting
        imageElement.style.transition = "opacity 0.5s"; 
        imageElement.style.opacity = 0;

        // After fade-out, change the image source and fade back in
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % images.length;
            imageElement.src = images[currentIndex];
            imageElement.style.opacity = 1;
        }, 50);  // Wait 5ms to fade out image before switching (was org. 500ms)
    }, 1500); // Change image every 1.5 seconds
}

// Start the carousel initially
startCarousel();

// Select the image and the color circles
const colorCircles = document.querySelectorAll('.circle');
const toggleImage = document.getElementById('toggle-image');
let selectedColor = ''; // Store the selected color

// Loop through each color circle and add a click event listener
colorCircles.forEach(circle => {
    circle.addEventListener('click', () => {
        // Get the data-color attribute value from the clicked circle
        selectedColor = circle.getAttribute('data-color');
        
        // Update the image source based on the color selected
        toggleImage.src = `/assets/shop/${selectedColor}_3d_printed_phone_stand_preview.png`; // Ensure these images exist (black, white, gray, blue, red, orange)

        // Stop the image carousel once a color is selected
        clearInterval(carouselInterval);
    });
});

// Circle Hover Effect (removed the red border change)
circles.forEach((circle) => {
    circle.addEventListener('mouseover', () => {
        // Remove the hover effect; no changes to the border
        // circle.style.borderColor = 'red'; // Remove or comment out this line
    });
    circle.addEventListener('mouseout', () => {
        // No border color reset required
        // circle.style.borderColor = ''; // Remove or comment out this line
    });
});

// Add click event listener to the order button
const orderButton = document.getElementById('shop-order-button');  // Make sure the ID matches in HTML

orderButton.addEventListener('click', function() {
    if (selectedColor) {
        // If a color is selected, navigate to its data-link
        const link = document.querySelector(`.circle[data-color="${selectedColor}"]`).getAttribute('data-link');
        console.log('Navigating to:', link); // Debugging line
        window.location.href = link; // This will redirect to the color's PayPal link
    } else {
        // If no color is selected, prompt the user to select one
        alert('Please select a color first!');
    }
});
