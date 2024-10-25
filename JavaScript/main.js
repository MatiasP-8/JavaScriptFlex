
const productos = [
    {   idProducto: 'Producto 1',
        imagen:"./img/messiRetro.png",
        titulo: 'Remera Lionel Messi retro',
        descripcion:'Descripcion',
        precio: 30000
    },

    {
        idProducto: 'Producto 2',
        imagen:"./img/messi2.png",
        titulo: 'Remera Lionel Messi retro',
        descripcion:'Descripcion',
        precio: 40000
    },
    {
        idProducto: 'Producto 3',
        imagen:"./img/cristiano.png",
        titulo: 'Remera Cristiano Ronaldo retro',
        descripcion:'Descripcion',
        precio: 10000
    }, {
        idProducto: 'Producto 4',
        imagen:"./img/inter.png",
        titulo: 'Remera Inter de Milan retro',
        descripcion:'Descripcion',
        precio: 20000

    }, {
        idProducto: 'Producto 5',
        imagen:"./img/arsenal.png",
        titulo: 'Remera Arsenal retro',
        descripcion:'Descripcion',
        precio: 20000
    },
    {
        idProducto: 'Producto 6',
        imagen:"./img/kaka.png",
        titulo: 'Remera Kaka retro',
        descripcion:'Descripcion',
        precio: 30000
    },

]


const contenedorProductos = document.querySelector('#contenedorProductos'); //Div contenedor de las cards



//Creo una funcion para cargar los productos en base al array de objetos que hice arriba
function crearProductos(){
    productos.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('cards'); //Le agrego la clase card al div para usar los estilos de css
        div.innerHTML  = `
        
                        <img src="${producto.imagen}" alt="Imagen de Ropa"> 
                        <div class="cardInfoContainer">
                        <h3>${producto.titulo}</h3>
                        <p class="precio">$${producto.precio}</p>
                        <p class="descripcion">${producto.descripcion}</p>
                        <button class="agregarProducto" id="${producto.idProducto}" >Agregar Producto</button>
                    </div>

        `;

        contenedorProductos.appendChild(div); //Agrego el div al contenedor en el padre

    });

}
crearProductos(); 


// funcion hover para desplegable de carrito
// const carritoIcon = document.getElementById('carritoIcon');



// carritoIcon.addEventListener('mouseover', mostrarMenu);

// function mostrarMenu(){
//     if(!carritoMenu.classList.contains('active')){
//         carritoMenu.classList.toggle('active');
//     }else if(carritoMenu.classList.contains('active')){
//         carritoMenu.classList.toggle('active');
//     }
// }    



// Agregar al carrito
const botonAgregarProducto = document.getElementsByClassName('agregarProducto');


//Evento click para los botones Agregar
for (const boton of botonAgregarProducto) {
    boton.addEventListener('click', agregarProducto);
}


const productosAgregados = [];

function agregarProducto(e){
    const id = e.currentTarget.id;
    const productoCarrito = productos.find(producto => producto.idProducto === id);
    
    if(productosAgregados.some(producto => producto.id === id)){
       
        const index = productosAgregados.findIndex(producto => producto.id === id);

        productosAgregados[index].cantidad++;
        //  cardModal.style.display = 'block';
    }else{
        productoCarrito.cantidad = 1;
        //Agrego los productos al array productosAgregados
        productosAgregados.push(productoCarrito);
        //  cardModal.style.display = 'block';
    }


    //Agrego los productos al localStorage
    localStorage.setItem('productos-carrito', JSON.stringify(productosAgregados));

}







