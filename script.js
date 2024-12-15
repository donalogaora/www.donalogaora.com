// Shop Stuff

// Phone Stand Image Fade
const imageElement = document.getElementById('toggle-image');
const images = ['../assets/white.png', '../assets/red.png'];
let currentIndex = 0;

setInterval(() => {
    // Ensure smooth image fade transition without delay in circle highlighting
    imageElement.style.transition = "opacity 0.5s"; 
    imageElement.style.opacity = 0;

    // After fade-out, change the image source and fade back in
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % images.length;
        imageElement.src = images[currentIndex];
        imageElement.style.opacity = 1;
    }, 300);  // Wait 300ms to fade out image before switching
}, 4000); // Change image every 4 seconds

// Circle Hover and Selection Logic
let selectedCircle = null;

// Select all circles and the order button
const circles = document.querySelectorAll('.circle');
const orderButton = document.getElementById('shop-order-button');  // Make sure the ID matches in HTML

// Add click event listeners to the circles
circles.forEach(circle => {
    circle.addEventListener('click', function() {
        console.log('Circle clicked!'); // Debugging line

        // Remove the "selected" class from all circles immediately
        circles.forEach(c => c.classList.remove('selected'));

        // Mark this circle as selected immediately
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
