import { menu } from "./data-menu.js";

const body = document.querySelector("body");

const modalMask = document.querySelector(".modal-mask")
const menuBar = document.querySelector(".header__menu-bar");
const modalMenu = document.querySelector(".modal-menu");
const modalMenuContenido = document.querySelector(".modal-menu__contenido");
const modalMenuClose = document.querySelector(".modal-menu__close");

document.addEventListener("DOMContentLoaded", () => {
    menu.forEach(element => {
        crearMenuLista(element, modalMenuContenido);
    });

    menuBar.addEventListener("click", () => abrirMenuModal())
    
    modalMenuClose.addEventListener("click", () => cerrarMenuModal());

    modalMenu.addEventListener("click", (e) => e.stopPropagation()); // Evita que el click lo registre el modal-mask

    modalMask.addEventListener("click", (e) => cerrarMenuModal());

})

function crearMenuLista({ id, title, elements }, contenedor) {
    const menuLista = document.createElement("div");
    menuLista.classList.add("menu-lista");

    const menuListaGrid = document.createElement("div");
    menuListaGrid.classList.add("menu-lista__grid");
    
    menuListaGrid.onclick = (e) => ocultarLista(id);

    const menuListaHeading = document.createElement("h1");
    menuListaHeading.classList.add("menu-lista__heading");
    menuListaHeading.textContent = title;

    const menuListaFlecha = `<svg class="menu-lista__flecha" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"></path></svg>`;

    const menuListaItems = document.createElement("ul");
    menuListaItems.classList.add("menu-lista__items", "menu-lista__items--oculto");
    menuListaItems.dataset.id = "lista-" + id;

    elements.forEach(item => {
        crearItem(item, menuListaItems);
    });

    menuListaGrid.appendChild(menuListaHeading);
    menuListaGrid.innerHTML += menuListaFlecha;

    menuLista.appendChild(menuListaGrid);
    menuLista.appendChild(menuListaItems);

    contenedor.appendChild(menuLista);
}

function crearItem(item, contenedor) {
    const menuListaItem = document.createElement("li");
    menuListaItem.classList.add("menu-lista__item");

    const menuListaItemLink = document.createElement("a");
    menuListaItemLink.classList.add("menu-lista__link");
    menuListaItemLink.textContent = item;

    menuListaItem.appendChild(menuListaItemLink);
    contenedor.appendChild(menuListaItem);
}

function ocultarLista(id) {
    const lista = document.querySelector(`[data-id="lista-${id}"]`);
    if(lista.classList.contains("menu-lista__items--oculto")) {
        lista.classList.remove("menu-lista__items--oculto");
    } else {
        lista.classList.add("menu-lista__items--oculto");
    }
}

function abrirMenuModal() {
    modalMenu.classList.remove("modal-menu--disabled");
    modalMenu.classList.add("modal-menu--active");
    body.classList.add("body--scroll-disabled");
    modalMask.classList.add("modal-mask--active");
}

function cerrarMenuModal() {
    modalMenu.classList.remove("modal-menu--active");
    modalMenu.classList.add("modal-menu--disabled");
    body.classList.remove("body--scroll-disabled");
    modalMask.classList.remove("modal-mask--active");
}
