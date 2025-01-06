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
let isCarouselActive = true; // Track if the carousel is active

// Function to start the carousel
function startCarousel() {
    if (isCarouselActive) {
        carouselInterval = setInterval(() => {
            imageElement.style.transition = "opacity 0.5s";  // Smooth fade transition
            imageElement.style.opacity = 0;

            // After fade-out, change the image source and fade back in
            setTimeout(() => {
                currentIndex = (currentIndex + 1) % images.length;
                imageElement.src = images[currentIndex];
                imageElement.style.opacity = 1;
            }, 50);  // Wait 50ms to fade out image before switching
        }, 1500); // Change image every 1.5 seconds
    }
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
    },
    space_grey: {
        delivery: "https://www.paypal.com/ncp/payment/JG62G4S9BN9F6",
        inperson: "https://www.paypal.com/ncp/payment/A7J7T4JGBRKT6"
    },
    blue: {
        delivery: "https://www.paypal.com/ncp/payment/TDQ26KXWKTNU8",
        inperson: "https://www.paypal.com/ncp/payment/433RBJJS2VRQL"
    },
    red: {
        delivery: "https://www.paypal.com/ncp/payment/FX2CVP3MKK78S",
        inperson: "https://www.paypal.com/ncp/payment/NNH76WM8W9YLU"
    },
    orange: {
        delivery: "https://www.paypal.com/ncp/payment/NZ83GKRKY2XLY",
        inperson: "https://www.paypal.com/ncp/payment/QXZD8DFPEL6ME"
    }
};

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
        toggleImage.src = `/assets/shop/${selectedColor}_3d_printed_phone_stand_preview.jpg`;  // Static color image
        
        // Stop the image carousel once a color is selected
        clearInterval(carouselInterval);  // Stop the carousel
        isCarouselActive = false; // Set carousel as inactive
        imageElement.style.opacity = 1;  // Ensure the image is fully visible immediately

        // Update the selected circle styling
        colorCircles.forEach(c => c.classList.remove('selected')); // Remove "selected" class from all circles
        circle.classList.add('selected'); // Add "selected" class to the clicked circle
    });
});

// Add click event listener to the order button
const orderButton = document.getElementById('shop-order-button');
orderButton.addEventListener('click', function() {
    if (selectedColor) {
        // Show a confirmation dialog to select delivery or in-person
        const isDelivery = confirm("Do you want posted delivery? Click 'OK' for posted delivery, 'Cancel' for in-person delivery.");

        // Determine the appropriate link based on the user's choice
        const link = isDelivery 
            ? paymentLinks[selectedColor].delivery 
            : paymentLinks[selectedColor].inperson;

        // Redirect to the chosen link
        window.location.href = link;
    } else {
        // If no color is selected, prompt the user to select one
        alert('Please select a color first!');
    }
});
