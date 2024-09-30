// script.js

// Smooth Scroll to Section
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animation on Scroll
window.addEventListener('scroll', function() {
    const reveals = document.querySelectorAll('.product-image img');
    
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].style.opacity = 1;
            reveals[i].style.transform = 'translateY(0)';
        } else {
            reveals[i].style.opacity = 0;
            reveals[i].style.transform = 'translateY(100px)';
        }
    }
});

// script.js

// Function to hide loader and show content once images are loaded
window.onload = function() {
    const loader = document.getElementById('loader');
    const content = document.getElementById('content');

    // Once the window is fully loaded, hide the loader and show the content
    loader.style.display = 'none';
    content.style.display = 'block';
};

// Add to Bag function
function addToBag(product) {
    const message = `You have added ${product} to your bag.`;
    if (product === 'iPhone 15') {
        document.getElementById('message-iphone15').textContent = message;
    } else if (product === 'iPhone 14') {
        document.getElementById('message-iphone14').textContent = message;
    }
}

// Buy Now function
function buyNow(product) {
    const message = `You have chosen to buy ${product}. Proceeding to checkout...`;
    if (product === 'iPhone 15') {
        document.getElementById('message-iphone15').textContent = message;
    } else if (product === 'iPhone 14') {
        document.getElementById('message-iphone14').textContent = message;
    }
}

