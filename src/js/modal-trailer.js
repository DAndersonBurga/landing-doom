import $ from "./funciones";

const body = $("body");
const modalTrailer = $(".modal-trailer")
const modalTrailerClose = $(".modal-trailer__close");
const trailerCompraBtn = $(".trailer-compra__button");
const iframe = $("#iframeTrailer");
const url = "https://www.youtube.com/embed/5-_MEAWYWM4?si=3SZHZ48nBRusVCUP";


trailerCompraBtn.addEventListener("click", () => {
    abrirModalTrailer();
})

modalTrailerClose.addEventListener("click", () => {
    iframe.src = "";
    cerrarModalTrailer();
    iframe.src = url;
})


function abrirModalTrailer() {
    modalTrailer.classList.remove("modal-trailer--disabled");
    body.classList.add("body--scroll-disabled");
}

function cerrarModalTrailer() {
    modalTrailer.classList.add("modal-trailer--disabled");
    body.classList.remove("body--scroll-disabled");
}