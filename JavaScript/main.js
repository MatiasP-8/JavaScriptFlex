
const productos = [
    {   idProducto: 1,
        imagen:"./img/messiretro.png",
        titulo: 'Remera Lionel Messi retro',
        descripcion:'Descripcion',
        precio: 30000
    },

    {
        idProducto: 2,
        imagen:"./img/messi2.png",
        titulo: 'Remera Lionel Messi retro',
        descripcion:'Descripcion',
        precio: 40000
    },
    {
        idProducto: 3,
        imagen:"./img/cristiano.png",
        titulo: 'Remera Cristiano Ronaldo retro',
        descripcion:'Descripcion',
        precio: 10000
    }, {
        idProducto: 4,
        imagen:"./img/inter.png",
        titulo: 'Remera Inter de Milan retro',
        descripcion:'Descripcion',
        precio: 20000

    }, {
        idProducto: 5,
        imagen:"./img/arsenal.png",
        titulo: 'Remera Arsenal retro',
        descripcion:'Descripcion',
        precio: 20000
    },
    {
        idProducto: 6,
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
        div.classList.add('card'); //Le agrego la clase card al div para usar los estilos de css
        div.innerHTML  = `
        
                        <img src="${producto.imagen}" alt="Imagen de Ropa"> 
                        <div class="cardInfoContainer">
                        <h3>${producto.titulo}</h3>
                        <p class="precio">${producto.precio}</p>
                        <p class="descripcion">${producto.descripcion}</p>
                        <button class="agregarProducto" id="${producto.idProducto}" >Agregar Producto</button>
                    </div>

        `;

        contenedorProductos.appendChild(div); //Agrego el div al contenedor en el padre

    });

}
crearProductos(); 


// funcion hover para desplegable de carrito
const carritoIcon = document.getElementById('carritoIcon');



carritoIcon.addEventListener('mouseover', mostrarMenu);

function mostrarMenu(){
    if(!carritoMenu.classList.contains('active')){
        carritoMenu.classList.toggle('active');
    }else if(carritoMenu.classList.contains('active')){
        carritoMenu.classList.toggle('active');
    }
}    



// Agregar al carrito
const botonAgregarProducto = document.getElementsByClassName('agregarProducto');


//Uso el bucle for of para el evento de todos los botones para agrear al carrito
for (botones of botonAgregarProducto){
    botones.addEventListener('click', agregarProducto);
}


function agregarProducto(){

    console.log('click para agregar');
}





// }



