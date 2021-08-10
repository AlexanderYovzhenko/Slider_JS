const slides = document.querySelectorAll('.slides img');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let currentSlide = 0;
let nextSlide = 0;
let correctClick = true;


prev.addEventListener('click', () => {
    if(correctClick === true) {
        correctClick = false;
        checkingCurrentSlide(-1);
        switchingSlidesPrev();
    } 
});
prev.click();
next.addEventListener('click', () => {
    if(correctClick === true) {
        correctClick = false;
        checkingCurrentSlide(1);
        switchingSlidesNext();
    } 
});


function checkingCurrentSlide(index) {
    currentSlide += index;
    if(currentSlide >= slides.length) {
        currentSlide = 0;
    }
    if(currentSlide < 0) {
        currentSlide = slides.length - 1;
    }       
}

function switchingSlidesPrev() {
    if(currentSlide === slides.length - 1) {
        nextSlide = 0;
    } else {
        nextSlide = currentSlide + 1;
    }
    slides.forEach(slide => {
        slide.style.opacity = '0';
        slide.style.transform = 'translate(100%)';
    });
    
    slides[currentSlide].style.opacity = '1';
    slides[nextSlide].style.opacity = '1';
    slides[nextSlide].style.transform = 'translate(-100%)';
    slides[currentSlide].style.transform = 'translate(0)';
    setTimeout(() => correctClick = true ,1000);
}

function switchingSlidesNext() {
    if(currentSlide === 0) {
        nextSlide = slides.length - 1;
    } else {
        nextSlide = currentSlide - 1; 
    } 
    slides.forEach(slide => {
        slide.style.opacity = '0';
        slide.style.transform = 'translate(-100%)';
    });
    
    slides[currentSlide].style.opacity = '1';
    slides[nextSlide].style.opacity = '1';
    slides[nextSlide].style.transform = 'translate(100%)';
    slides[currentSlide].style.transform = 'translate(0)';
    setTimeout(() => correctClick = true ,1000);  
}