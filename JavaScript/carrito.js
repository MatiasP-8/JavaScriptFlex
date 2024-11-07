
//Traigo los productos del localStorage
const productosEnElCarrito = JSON.parse(localStorage.getItem('productos-carrito'));


const contenedorCarrito = document.querySelector('#carritoCardsContainer');
const carritoVacio = document.querySelector('#carritoVacio');
let botonVaciarCarrito = document.querySelector('#vaciarCarrito');
let totalContenedor = document.querySelector('#totalContainer');
const contenedorTotales = document.querySelector('#contenedorTotales');
let botonComprar = document.querySelector('#comprar');
let popUp = document.querySelector('#popUp')


//Muestro los productos del localStorage 

if(productosEnElCarrito){

    productosEnElCarrito.forEach(producto => {
    const div = document.createElement("div");
    div.classList.add('carritoContainer');
    div.innerHTML = `

    <div class="cardCarrito">
                <div class="imgProducto">
                    <img src="${producto.imagen}" alt="${producto.titulo}">
                </div>
                <div class="cantidadContainer"> 
                  <p>Cantidad</p>
                  <p>${producto.cantidad}</p>
                </div>
                <div class="cardInfoContainer">
                    <h3>${producto.titulo}</h3>
                    <p class="precio">$${producto.precio}</p>
                    <p class="descripcion">${producto.descripcion}</p>
                </div>
    `   ;

    contenedorCarrito.appendChild(div);
    })
    actualizarTotal(); 

} else {
    carritoVacio.style.display = 'block';
}


botonVaciarCarrito.addEventListener('click', () => {
    Swal.fire({
      title: "Estas seguro?",
      text: "Se eliminaran todos los productos!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
          Swal.fire({
              title: "Cerrar",
              text: "Se eliminaron los productos del carrito",
              icon: "success"
            });
            vaciar()
        }
    });
  });
//Funcion para vaciar el carrito

function vaciar (){
    productosEnElCarrito.length = 0;
    localStorage.setItem('productos-carrito',JSON.stringify(productosEnElCarrito));
    contenedorCarrito.innerHTML = '';
    contenedorTotales.innerHTML = '';
    botonVaciarCarrito.style.display = 'none';
    botonComprar.style.display = 'none';
}



//Verifico que el carrito este vacio, si esta vacio saco los botones y muestro el total en 0 y el mensaje de 'Carrito vacio'
function verificarCarrito(){
    
    if (productosEnElCarrito.length === 0) {
        botonVaciarCarrito.style.display = 'none';
        botonComprar.style.display = 'none';
        carritoVacio.style.display = 'block';
        contenedorTotales.style.display = 'none';
    } else {
        botonVaciarCarrito.style.display = 'block'; 
        botonComprar.style.display = 'block'
        contenedorTotales.style.display = 'block';
    }

}

verificarCarrito();



function actualizarTotal (){
    let calculadorTotal = productosEnElCarrito.reduce((acumuladorTotales,producto) => acumuladorTotales + (producto.precio * producto.cantidad), 0);
    const div = document.createElement('div');
    div.classList.add('totalContainer');
    div.innerHTML = `
                  <p class="total">El total es: <span>$${calculadorTotal}</span> </p>
    `   ;
    contenedorCarrito.appendChild(div);
    
} 


botonComprar.addEventListener('click', comprar);



//Funcion para boton comprar-muestro el modal
function comprar(e){
    e.preventDefault();
    Swal.fire({
        title: "Gracias por comprar en retro",
        text: "Esperamos verte pronto!",
        icon: "success",
        confirmButtonText: "Cerrar"
        
      });
    vaciar();
    // popUp.style.display = 'block';
}





