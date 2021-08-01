const slides = document.querySelectorAll('.slides');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let index = 0;
let beforeIndex = 0;
let correctClick = true;

fadesSlides();
slides[index].style.display = 'block';
function fadesSlides() {
    slides.forEach(element => {
        element.style.display = 'none';
    });
}

if(correctClick === true) {
    prev.addEventListener('click', () => {
        correctClick = false;
        switchingSlides(-1);
        switchingSlidesPrev();
    });
    next.addEventListener('click', () => {
        correctClick = false;
        switchingSlides(1);
        switchingSlidesNext();
    });
}

function switchingSlides(ind) {
    index += ind;
    if(index >= slides.length) {
        index = 0;
    }
    if(index < 0) {
        index = slides.length - 1;
    }       
}

function switchingSlidesPrev() {
    if(index === slides.length - 1) {
        beforeIndex = 0;
    } else {
        beforeIndex = index + 1;
    }
   
    slides[beforeIndex].style.transform = 'translate(-120%)';
    setTimeout(() => {
        slides[index].style.display = 'block';  
        slides[beforeIndex].style.display = 'none'; 
        slides[index].style.transform = 'translate(120%)';
        setTimeout(() => {
            slides[index].style.transform = 'translate(0)';
            correctClick = true; 
        }, 100);   
    }, 1100);    
}

function switchingSlidesNext() {
    if(index === 0) {
        beforeIndex = slides.length - 1;
    } else {
        beforeIndex = index - 1; 
    }
    slides[beforeIndex].style.transform = 'translate(120%)';
    setTimeout(() => {
        slides[index].style.display = 'block';  
        slides[beforeIndex].style.display = 'none'; 
        slides[index].style.transform = 'translate(-120%)';
        setTimeout(() => {
            slides[index].style.transform = 'translate(0)';
            correctClick = true;  
        }, 100);   
    }, 1100);    
}