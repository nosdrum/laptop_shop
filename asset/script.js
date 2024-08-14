document.addEventListener('DOMContentLoaded', () => {
    const cartButtons = document.querySelectorAll('.product-card button');
    cartButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Added to cart!');
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const images = document.querySelectorAll('.slider img');
    const totalImages = images.length;
    let index = 0;

    function moveSlider(){
        index++;
        if (index >= totalImages) {
            index = 0;
        }
        slider.style.transform = `translateX(${-index * 100}%)`;
    }
    setInterval(moveSlider, 3000); //change image every 3 seconds
});

document.addEventListener("DOMContentLoaded", function() {
    // Highlight the active link in the navigation
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
});
