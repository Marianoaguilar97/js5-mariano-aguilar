//selec de elem
const productosEl = document.querySelector(".productos");
const carritoEl = document.querySelector(".productosCarrito");
//rederizado productos
function renderProductos () {
    viajes.forEach( (viaje) => {
        productosEl.innerHTML += ` 
        <div class="seccionEncuadrado--mediano ">
        <div class="seccion--encuadradoImagen" title="Caribe"><img src="${viaje.imgSrc}" alt="caribe" class="imgEncuadrado"></div>
        <h2>${viaje.nombre}</h2>
        <p>${viaje.fecha}</p>
        <p>${viaje.descripcion}
        </p>
        <h3>precio: $${viaje.precio}</h3>
        <h4 onclick="AgregarCarrito(${viaje.id})" >Sumar al carrito</h4>
    </div>
    `;
    });
}
renderProductos();
//array carrito
let carrito = [];
//agregar al carro
function AgregarCarrito (id) {
    //validacion si ya existe item en carrito
    if(carrito.some( (item) => item.id === id)) {
        alert("producto ya esta en el carrito");
    }
    else {
        const item = viajes.find( (viaje) => viaje.id === id );
    carrito.push({
        ...item,
        numeroDeUnidades: 1,
    });
    actualizarCarrito();
    }
}

//funcion de actualizar carrito
function actualizarCarrito(){
    renderItemsCarrito();
    //renderSubTotal();

}

//renderizado item carrito
function renderItemsCarrito(){
    carrito.forEach( (item) => {carritoEl.innerHTML +=`
        <hr class="my-4">
      
                          <div class="row mb-4 d-flex justify-content-between align-items-center">
                            <div class="col-md-2 col-lg-2 col-xl-2">
                              <img src="${item.imgSrc}" class="img-fluid rounded-3" alt="${item.nombre}">
                            </div>
                            <div class="col-md-3 col-lg-3 col-xl-3">
                              <h6 class="text-muted">Viaje</h6>
                              <h6 class="text-black mb-0">${item.nombre}</h6>
                            </div>
                            <div class="col-md-3 col-lg-3 col-xl-3 d-flex">
                              <button class="btn btn-link px-2">
                                <i class="fas fa-minus"></i>
                              </button>
      
                              <div style=" margin: 10px 5px;">${item.numeroDeUnidades}</div>
      
                              <button class="btn btn-link px-2">
                                <i class="fas fa-plus"></i>
                              </button>
                            </div>
                            <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                              <h6 class="mb-0">$ ${item.precio}</h6>
                            </div>
                            <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                              <a href="#!" class="text-muted"><i class="fas fa-times"></i></a>
                            </div>
                          </div>
                          `
    })
}
renderItemsCarrito();