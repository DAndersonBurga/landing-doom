import $ from './funciones.js'

const nextBtn = $("#next-btn");
const prevBtn = $("#prev-btn");
const firstSlide = document.querySelector(".slider__image");
const carousel = $(".slider-slide");
const progressBar = $(".slider-slide__progress");
const sliders = document.querySelectorAll(".slider");

let sliderActive = false;
let prevPageX;
let prevScrollLeft;
let firstSliderWidth = firstSlide.clientWidth;
let positionDiff;
let posicionElement = 0;

progressBar.style.left = "0%";

// Pasar a la siguiente imagen en base a la posición del scroll
const autoSlide = (e) => {
    if(carousel.scrollLeft == (carousel.scrollWidth - carousel.clientWidth)) return;

    positionDiff = Math.abs(positionDiff);
    let firstSlideWidth = firstSlide.clientWidth;
    let valDifference = firstSlideWidth - positionDiff;
    
    if(carousel.scrollLeft > prevScrollLeft ) {
        updatePosition(true);
        return carousel.scrollLeft += positionDiff > firstSlideWidth / 3 ? valDifference : -positionDiff;
    }

    updatePosition(false);
    carousel.scrollLeft -= positionDiff > firstSlideWidth / 3 ? valDifference : -positionDiff;
}

// Eventos para el slider activo con el mouse
const dragging = (e) => {
    if(!sliderActive) return;
    sliderActive = true;

    carousel.classList.add("slider-slide--active");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
}

// Evento de slide activo
const dragStart = (e) => {
    e.preventDefault();
    sliderActive = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}

// Evento de slide inactivo
const dragStop = (e) => {
    autoSlide();
    carousel.classList.remove("slider-slide--active");
    sliderActive = false;
}

// Actualizar la posición de la barra de progreso
const updatePosition = (condition) => {
    if(condition) {
        if(posicionElement < sliders.length-1) posicionElement++;
        progressBar.style.left = `${(posicionElement * 25)}%`;
        return;
    }

    if(posicionElement > 0) posicionElement--;
    progressBar.style.left = `${(posicionElement * 25)}%`;
}



nextBtn.addEventListener("click", () => {
    updatePosition(true);
    carousel.scrollLeft += firstSliderWidth;
});

prevBtn.addEventListener("click", () => {
    updatePosition(false);
    carousel.scrollLeft -= firstSliderWidth;
});


carousel.addEventListener("mousedown", dragStart);

carousel.addEventListener("mousemove", dragging);


carousel.addEventListener("mouseup", dragStop);

carousel.addEventListener("mouseleave", dragging);