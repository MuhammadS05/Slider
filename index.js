const slides = document.querySelectorAll(".slide");
let slideIndex = 0;
let intervalId = null;

//console.log(slides);

//initializeSlider();

document.addEventListener("DOMContentLoaded", initializeSlider());

function initializeSlider() {

    if (slides.length > 0) {
        slides[slideIndex].classList.add('displaySlide');
        intervalId = setInterval(nextSlide, 5000);
        console.log(intervalId);
    }
}

function showSlide(index, direction) {
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide", "slideInRight", "slideInLeft");
    });

    slides[slideIndex].classList.add("displaySlide");
    if (direction === "next") {
        slides[slideIndex].classList.add("slideInRight");
    } else if (direction === "prev") {
        slides[slideIndex].classList.add("slideInLeft");
    }
}

function prevSlide() {
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex, "prev");
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex, "next");
}

