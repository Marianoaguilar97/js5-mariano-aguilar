
const productosEl = document.querySelector(".productos");

function renderProductos () {
    Viajes.forEach( (viaje) => {
        productosEl.innerHTML += ` 
        <div class="seccionEncuadrado--mediano ">
        <div class="seccion--encuadradoImagen" title="Caribe"><img src="${viaje.imgSrc}" alt="caribe" class="imgEncuadrado"></div>
        <h2>${viaje.nombre}</h2>
        <p>${viaje.fecha}</p>
        <p>${viaje.descripcion}
        </p>
        <h4>precio: $${viaje.precio}</h4>
        <a href="">Sumar al carrito</a>
    </div>
    `;
    });
}
renderProductos();
