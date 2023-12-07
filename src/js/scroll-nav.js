const header = document.querySelector(".header");
const modalMenuNav = document.querySelector(".modal-menu__nav");
const navModal = document.querySelector(".nav-modal");
const modalMenuContenido = document.querySelector(".modal-menu__contenido");

document.addEventListener("DOMContentLoaded", () => {

    window.addEventListener("scroll", cambiarColorNav);
    window.addEventListener("resize", moverNavModal);
});

function cambiarColorNav(e) {
    window.scrollY > 40 ? header.classList.add("header--scroll") : header.classList.remove("header--scroll");
}

function moverNavModal(e) {
    if (window.innerWidth > 600) {
        modalMenuNav.appendChild(navModal);
        return;
    }
    
    modalMenuContenido.appendChild(navModal);
}