let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

prevButton.addEventListener('click', () => {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    slider.style.transform = `translateX(-${currentSlide * 20}%)`;
});

nextButton.addEventListener('click', () => {
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    slider.style.transform = `translateX(-${currentSlide * 20}%)`;
});

setInterval(() => {
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    slider.style.transform = `translateX(-${currentSlide * 20}%)`;
}, 5000); 