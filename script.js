const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

// Function to show the current slide
function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.opacity = '1';
            slide.style.zIndex = '1';
        } else {
            slide.style.opacity = '0';
            slide.style.zIndex = '0';
        }
    });
}

// Automatically change slides every 4 seconds with fade effect
setInterval(() => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
    showSlide(currentSlide);
}, 4000);

// Initialize the first slide
showSlide(currentSlide);