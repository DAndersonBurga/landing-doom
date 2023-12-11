import $ from './funciones.js';

let imagenEdicionDoom = $('.edition__image-container');
let editionDescription = $('.edition__description');
let editionGrid = $('.edition__grid');
let editionSelect = $('#edition-select');
let editionContainer = $('.editions__container');

const editions = [
    {
        "id" : 1,
        "titulo": "Doom Eternal - Deluxe Edition",
        "contenido": `
            <p class="edition__text">El infierno ha invadido la Tierra. Ponte en la piel del Slayer en una campaña épica y mata demonios para impedir la destrucción de la humanidad. No le tienen miedo a nada... salvo a ti.</p>

            <p class="edition__text">La Deluxe Edition incluye: </p>

            <ul class="edition__ul">
            <li class="edition__text">Pase del Año 1, con acceso a dos expansiones de la campaña del aclamado DOOM Eternal: The Ancient Gods, primera y segunda parte.</li>
            <li class="edition__text">Diseño del Slayer demoníaco</li>
            <li class="edition__text">Paquete de sonidos clásicos para armas</li>
            </ul>
        `,
        "imagen": "deluxe-edition.jpg"
    }, 
    {
        "id" : 2,
        "titulo": "Doom Eternal - Edición Estándar",
        "contenido": "",
        "imagen": "standard-edition.png"
    },
    {
        "id" : 3,
        "titulo": "Doom Eternal: Pase del Año 1",
        "contenido": `
            <p class="edition__text">Has sacado a la humanidad del borde de la extinción, pero todo tiene un precio. La muerte de la Khan Maykr provocó un desequilibrio de poder en el cosmos que amenaza a toda la creación. Ahora debes resurgir para devolver las cosas a su cauce en DOOM Eternal: The Ancient Gods.</p>
            <p class="edition__text">El pase del Año 1 incluye dos expansiones de la campaña: The Ancient Gods, primera parte y The Ancient Gods, segunda parte.</p>
            <p class="edition__text"><u>The Ancient Gods, primera parte:</u> Las legiones del infierno han arrasado los cielos y amenazan con saltar de una dimensión a otra. Ábrete paso hasta Urdak y decide el destino del cosmos. Ahora eres el único dueño de tu misión.</p>
            <p class="edition__text"><u>The Ancient Gods, segunda parte:</u> Negaste a los dioses y despertaste un mal ancestral. Ahora debes reunir las dispersas fuerzas de los Centinelas, poner bajo asedio el último bastión del infierno, derribar las murallas de su fortaleza y enfrentarte al Señor Oscuro en persona. El alma misma del universo está en juego.</p>
        `,
        "imagen": "year-one-pass.jpg"
    }
]


document.addEventListener('DOMContentLoaded', function() {
    editionTemplate(editions[0]);

    window.addEventListener("resize", (e) => {
        moverImagenResponsive(e.target);
    });
});

function moverImagenResponsive (e) {
    if((e.innerWidth) <= 960) {
        editionDescription.appendChild(imagenEdicionDoom);
    } else {
        editionGrid.appendChild(imagenEdicionDoom);
    }
}

function editionTemplate(edition) {
    const {id, titulo, contenido, imagen} = edition;

    editionContainer.innerHTML = `
    <div class="edition">
    <div class="edition__grid">

      <div class="edition__principal">
        <div id="edition-select" class="edition__options">
          <label class="edition__label">Selecciona una Edición</label>
          <select class="edition__select">
            <option ${id === 1 ? 'selected' : ''} class="edition__option" value="0">Edición Deluxe</option>
            <option ${id === 2 ? 'selected' : ''} class="edition__option" value="1">Edición Estándar</option>
            <option ${id === 3 ? 'selected' : ''} class="edition__option" value="2">Pase del Año 1</option>
          </select>
        </div>
         
        <div class="edition__description">
            <h1 class="edition__heading">${titulo}</h1>
            ${contenido}
        </div>

        <div class="edition__consoles">
          <h2 class="edition__heading edition__heading--buy">Compra ahora en digital...</h2>

          <a class="edition__console" target="_blank" href="https://www.microsoft.com/p/doom-eternal-deluxe-edition/9mw61sw6h24j">
            <span class="edition__span">
              <svg focusable="false" viewBox="0 0 39.7 39.7" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="25"><title>Xbox</title><path d="M25.4,11.2c-0.1,0.1-0.2,0.3-0.2,0.4c2.6,3.2,11,13.5,10.2,20.6c2.7-3.4,4.3-7.6,4.3-12.3 c0-5.7-2.4-10.8-6.3-14.4C30.2,6.1,27.1,8.9,25.4,11.2"></path><path d="M9.4,3c4.2-0.1,8.1,1.8,10.4,3.3C22.1,4.8,26,2.9,30.2,3l0,0c-3-1.9-6.6-3-10.4-3C16,0.1,12.4,1.2,9.4,3L9.4,3"></path><path d="M14.5,11.6c-0.1-0.1-0.1-0.3-0.2-0.4c-1.7-2.3-4.9-5.1-8-5.7C2.4,9.1,0,14.2,0,19.9c0,4.6,1.6,8.9,4.3,12.2 C3.5,25,11.9,14.7,14.5,11.6"></path><path d="M22,18L22,18c-0.7-0.6-1.4-1.2-2.2-1.8c-0.8,0.6-1.5,1.2-2.2,1.8l0,0C12.5,22.5,6,28.6,6,34.2 c3.6,3.4,8.4,5.5,13.7,5.5s10.2-2.1,13.7-5.5C33.6,28.6,27.1,22.6,22,18"></path></svg>
            </span>

            <span class="edition__console-name">Xbox one</span>
          </a>
          <a class="edition__console" target="_blank" href="https://preordergames.bethesda.net/ps4-deluxe/doom-eternal">
            <span class="edition__span">
              <svg focusable="false" viewBox="0 0 45.7 34.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="25"><title>PlayStation</title><path d="M17,0c2,0.4,3.9,0.9,5.9,1.4c1.1,0.3,2.2,0.6,3.3,1c1.7,0.5,3.5,1.1,5,2.1c0.7,0.4,1.4,0.9,2,1.5 s1.1,1.3,1.5,2.1c0.7,1.4,0.9,2.9,1,4.5c0,1,0,2-0.2,3c-0.2,0.9-0.4,1.7-0.9,2.4c-0.4,0.7-1,1.2-1.7,1.6c-0.7,0.4-1.4,0.5-2.2,0.5 c-1.2,0-2.3-0.3-3.3-0.8c0-3.4,0-6.7,0-10.1c0-0.6,0-1.2-0.1-1.8c-0.1-0.5-0.3-0.9-0.7-1.2C26.4,6,26,5.9,25.7,5.8 c-0.3-0.1-0.7,0.1-0.9,0.3c-0.3,0.4-0.4,1-0.4,1.5c0,9,0,18,0,26.9c-2.5-0.8-5-1.5-7.5-2.3C17,21.4,17,10.7,17,0"></path><path d="M5.9,22.8c3.2-1.1,6.5-2.2,9.7-3.4c0,1.2,0,2.5,0,3.7c0,0.2,0,0.3,0,0.5c-2.6,0.9-5.1,1.8-7.7,2.7 c-0.4,0.1-0.7,0.3-1,0.5c-0.1,0.1-0.2,0.3-0.2,0.5c0.1,0.2,0.3,0.3,0.5,0.4C7.8,27.9,8.4,28,9,28c0.7,0,1.3-0.1,2-0.2 c0.4-0.1,0.9-0.2,1.3-0.4c1.1-0.4,2.2-0.8,3.3-1.2c0,1,0,2.1,0,3.1c0,0.2,0,0.4,0,0.6c-1.3,0.2-2.7,0.4-4.1,0.4 c-2.8,0.1-5.5-0.4-8.1-1.2C2.5,28.9,1.7,28.5,1,28c-0.4-0.3-0.7-0.7-0.9-1.1c-0.2-0.4-0.1-0.8,0-1.2c0.2-0.4,0.5-0.7,0.8-0.9 c0.8-0.5,1.7-1,2.6-1.3C4.3,23.3,5.1,23,5.9,22.8"></path><path d="M31.9,21.3c0.7-0.1,1.5-0.1,2.2-0.1c2.4,0,4.9,0.3,7.2,1c0.5,0.1,0.9,0.3,1.4,0.5c0.8,0.3,1.6,0.6,2.3,1.2 c0.4,0.3,0.7,0.8,0.7,1.3c0,0.4-0.2,0.8-0.5,1.2c-0.5,0.6-1.3,1-2,1.4c-0.8,0.4-1.6,0.6-2.4,0.9c-5,1.7-9.9,3.5-14.9,5.2 c0-1.4,0-2.7,0-4.1c0-0.1,0-0.1,0.1-0.2c3.8-1.3,7.6-2.6,11.3-3.9c0.5-0.2,1.1-0.3,1.5-0.7c0.2-0.1,0.4-0.4,0.3-0.6 c-0.1-0.2-0.3-0.3-0.5-0.4c-0.6-0.2-1.2-0.3-1.8-0.3c-0.9,0-1.9,0.1-2.8,0.4c-2.7,0.9-5.4,1.8-8.1,2.8c0-1.5,0-2.9,0-4.4 C27.8,22,29.9,21.6,31.9,21.3"></path></svg>
            </span>

            <span class="edition__console-name">PlayStation®4</span>
          </a>
          <a class="edition__console" target="_blank" href="https://store.steampowered.com/app/782330?utm_source=buynow&utm_medium=web">
            <span class="edition__span">
              <svg focusable="false" viewBox="0 0 42.3 39.2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="25" ariahidden="true"><title>Steam</title><path d="M21.1,0C10,0,0.9,7.9,0,18l11.4,4.3c1-0.6,2.1-1,3.4-1c0.1,0,0.2,0,0.3,0l5-6.7v-0.1c0-4.1,3.6-7.4,8-7.4 s8,3.3,8,7.4s-3.6,7.4-8,7.4c-0.1,0-0.1,0-0.2,0l-7.2,4.8c0,0.1,0,0.2,0,0.3c0,3.1-2.7,5.6-6,5.6c-2.9,0-5.3-1.9-5.9-4.5L0.7,25 c2.5,8.2,10.7,14.2,20.4,14.2c11.7,0,21.2-8.8,21.2-19.6S32.8,0,21.1,0"></path><path d="M13.2,29.7l-2.6-1c0.5,0.9,1.3,1.6,2.3,2c2.3,0.9,4.9-0.1,5.9-2.2c0.5-1,0.5-2.2,0-3.2s-1.3-1.8-2.4-2.3 c-1.1-0.4-2.3-0.4-3.3,0l2.7,1c1.7,0.7,2.5,2.4,1.8,4C16.9,29.7,14.9,30.4,13.2,29.7"></path><path d="M33.4,14.5c0-2.7-2.4-4.9-5.3-4.9s-5.3,2.2-5.3,4.9s2.4,4.9,5.3,4.9C31,19.5,33.4,17.3,33.4,14.5 M24.1,14.5 c0-2,1.8-3.7,4-3.7s4,1.7,4,3.7s-1.8,3.7-4,3.7S24.1,16.6,24.1,14.5"></path></svg>
            </span>

            <span class="edition__console-name">Steam (PC)</span>
          </a>
        </div>

        ${id === 3 ? '' : `
            <div class="edition__buy-info">
                <h2 class="edition__heading edition__heading--buy">Dónde comprar</h2>

                <select class="edition__select">
                    <option class="edition__option">Estados Unidos</option>
                </select>

                <select class="edition__select">
                    <option class="edition__option">Seleccione una tienda</option>
                </select>

                <select disabled class="edition__select">
                    <option class="edition__option">Plataformas de preferencia</option>
                </select>

                <a class="edition__link" href="#">Comprar Ya</a>
            </div>
        `}
        
      </div>

      <div class="edition__image-container">
        <img class="edition__image" src="/public/img/editions/${imagen}" alt="edition image">
      </div>

    </div>
  </div>
    `
    imagenEdicionDoom = $('.edition__image-container');
    editionDescription = $('.edition__description');
    editionGrid = $('.edition__grid');
    editionSelect = $('#edition-select');
    editionContainer = $('.editions__container');

    editionSelect.addEventListener("input", (e) => {
        editionTemplate(editions[e.target.value])
    })

    moverImagenResponsive(window);
}