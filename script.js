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

// Circle Hover and Selection Logic
let selectedCircle = null;

// Select all circles and the order button
const circles = document.querySelectorAll('.circle');
const orderButton = document.getElementById('order-button');

// Add click event listeners to the circles
circles.forEach(circle => {
    circle.addEventListener('click', function() {
        console.log('Circle clicked!'); // Debugging line
        // Remove the "selected" class from all circles
        circles.forEach(c => c.classList.remove('selected'));

        // Mark this circle as selected
        selectedCircle = this;
        this.classList.add('selected');
    });
});

// Add click event listener to the order button
orderButton.addEventListener('click', function() {
    if (selectedCircle) {
        // If a circle is selected, navigate to its data-link
        const link = selectedCircle.getAttribute('data-link');
        console.log('Navigating to:', link); // Debugging line
        window.location.href = link;
    } else {
        // If no circle is selected, prompt the user to select one
        alert('Please select a color first!');
    }
});

// Circle Hover Effect
circles.forEach((circle) => {
    circle.addEventListener('mouseover', () => {
        circle.style.borderColor = 'red'; // Change the ring color to red on hover
    });
    circle.addEventListener('mouseout', () => {
        if (!circle.classList.contains('selected')) {
            circle.style.borderColor = ''; // Reset border color when not selected
        }
    });
});
