


const productosEnElCarrito = JSON.parse(localStorage.getItem('productos-carrito'));
const contenedorCarrito = document.querySelector('#carritoCardsContainer');
const carritoVacio = document.querySelector('#carritoVacio');
let botonVaciarCarrito = document.querySelector('#vaciarCarrito');

if(productosEnElCarrito){

    productosEnElCarrito.forEach(producto => {
    const div = document.createElement("div");
    div.classList.add('carritoContainer');
    div.innerHTML = `

    <div class="cardCarrito">
                <div class="imgProducto">
                    <img src="${producto.imagen}" alt="${producto.titulo}">
                </div>
                <div class="cardInfoContainer">
                    <h3>${producto.titulo}</h3>
                    <p class="precio">${producto.precio}</p>
                    <p class="descripcion">${producto.descripcion}</p>
                </div>
    `   ;

    contenedorCarrito.appendChild(div);
    
    })

} else {
    carritoVacio.style.display = 'block'; 
}


botonVaciarCarrito.addEventListener('click', vaciar);


function vaciar (){
    productosEnElCarrito.length = 0;

    localStorage.setItem('productos-carrito',JSON.stringify(productosEnElCarrito))
}