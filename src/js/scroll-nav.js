import $ from "./funciones";

const header = $(".header");
const modalMenuNav = $(".modal-menu__nav");
const navModal = $(".nav-modal");
const modalMenuContenido = $(".modal-menu__contenido");

document.addEventListener("DOMContentLoaded", () => {
    moverNavModal();

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