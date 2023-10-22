
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        // } else {
        //     entry.target.classList.remove('show');
        // }

    });
});


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


const slider = document.querySelector('.slider');
const slides = document.querySelector('.slides');

let isDragging = false;
let startPosition = 0;
let currentTranslate = 0;
let previousTranslate = 0;
let animationID = 0;

slides.addEventListener('mousedown', (e) => {
    isDragging = true;
    startPosition = e.clientX;
    slides.style.transition = 'none';
    cancelAnimationFrame(animationID);
});

slides.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const currentPosition = e.clientX;
    const translate = currentTranslate + currentPosition - startPosition;
    slides.style.transform = `translateX(${translate}px)`;
});

slides.addEventListener('mouseup', () => {
    isDragging = false;
    const endPosition = event.clientX;
    const difference = endPosition - startPosition;
    if (difference > 100) {
        // Move to the previous slide
        currentTranslate -= slider.clientWidth;
    } else if (difference < -100) {
        // Move to the next slide
        currentTranslate += slider.clientWidth;
    }
    slides.style.transition = 'transform 0.3s ease-in-out';
    slides.style.transform = `translateX(${currentTranslate}px)`;
});

slides.addEventListener('transitionend', () => {
    slides.style.transition = 'none';
    currentTranslate = -slider.clientWidth;
    slides.style.transform = `translateX(${currentTranslate}px)`;
});
