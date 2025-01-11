// Shop Stuff

// Phone Stand Image Fade
const imageElement = document.getElementById('toggle-image');
const images = [
    '../assets/shop/black_3d_printed_phone_stand_preview.png',
    '../assets/shop/white_3d_printed_phone_stand_preview.png',
    '../assets/shop/space_grey_3d_printed_phone_stand_preview.png',
    '../assets/shop/blue_3d_printed_phone_stand_preview.png',
    '../assets/shop/red_3d_printed_phone_stand_preview.png',
    '../assets/shop/orange_3d_printed_phone_stand_preview.png'
];
let currentIndex = 0;
let carouselInterval; // Store the interval for the image carousel

// Function to start the carousel
function startCarousel() {
    carouselInterval = setInterval(() => {
        imageElement.style.transition = "opacity 0.5s";  // Smooth fade transition
        imageElement.style.opacity = 0;

        setTimeout(() => {
            currentIndex = (currentIndex + 1) % images.length;
            imageElement.src = images[currentIndex];
            imageElement.style.opacity = 1;
        }, 50);
    }, 1500);
}

// Start the carousel initially
startCarousel();

// Define delivery and in-person links for each color
const paymentLinks = {
    black: {
        delivery: "https://www.paypal.com/ncp/payment/G3UNG7URVGTSY",
        inperson: "https://www.paypal.com/ncp/payment/VHL6BB6NFB5R8"
    },
    white: {
        delivery: "https://www.paypal.com/ncp/payment/YDUY83NNRPYZE",
        inperson: "https://www.paypal.com/ncp/payment/6XWV77VL9NZXC"
    }
    // Add other colors as needed
};

// Add click event listener to all order buttons
const orderButtons = document.querySelectorAll('.shop-order-button');
orderButtons.forEach(orderButton => {
    orderButton.addEventListener('click', function() {
        // Get the color directly from the button's data-color attribute
        const color = orderButton.getAttribute('data-color');

        // Show a confirmation dialog for delivery or in-person option
        const isDelivery = confirm("Do you want posted delivery? Click 'OK' for posted delivery, 'Cancel' for in-person delivery.");

        // Determine the appropriate link based on the user's choice
        const link = isDelivery 
            ? paymentLinks[color].delivery 
            : paymentLinks[color].inperson;

        // Redirect to the chosen link
        window.location.href = link;
    });
});
