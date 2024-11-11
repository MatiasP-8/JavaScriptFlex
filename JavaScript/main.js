
const contenedorProductos = document.querySelector('#contenedorProductos'); //Div contenedor de las cards
let productos = [];

//Traigo los productos del json utilizando promesas

fetch("./productos.json")
.then(response => response.json())
.then (data =>{
     productos = data;
    data.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('cards'); //Le agrego la clase card al div para usar los estilos de css
        div.innerHTML  = `
        
                        <img src="${producto.imagen}" alt="Imagen de Ropa"> 
                        <div class="cardInfoContainer">
                        <h3>${producto.titulo}</h3>
                        <p class="precio">$${producto.precio}</p>
                        <p class="descripcion">${producto.descripcion}</p>
                        <button class="buttonAgregar" id="${producto.idProducto}" >Agregar al carrito</button>
                    </div>

        `;

        contenedorProductos.appendChild(div); //Agrego el div al contenedor en el padre

       // Asigno el event listener al botón "Agregar al carrito"
    const botonAgregar = div.querySelector('.buttonAgregar');
    console.log(botonAgregar); // Verifica que el botón se haya encontrado
    botonAgregar.addEventListener('click', agregarProducto);

    });

})



 


//Verifico en productos agregados si hay productos y los traigo, para que no se me pise al traer los otros y si no hay nada, dejo el array vacio

const productosAgregados = JSON.parse(localStorage.getItem('productos-carrito')) || [];


function agregarProducto(e){
    const id = e.currentTarget.id;
    const productoCarrito = productos.find(producto => producto.idProducto === id); //Busco en productos, donde me coincidan los IDs
    

    if(productoCarrito){

        if(productosAgregados.some(producto => producto.idProducto === id)){
           
            const index = productosAgregados.findIndex(producto => producto.idProducto === id);
    
            productosAgregados[index].cantidad++;
            //  cardModal.style.display = 'block';
        }else{
            productoCarrito.cantidad = 1;
            //Agrego los productos al array productosAgregados
            productosAgregados.push(productoCarrito);
            //  cardModal.style.display = 'block';
        }
    }


    Toastify({

        text: "Producto agregado al carrito",
        gravity: "bottom",
        position: "right",
        style: {
            background: "#D9E7FA",
            color: "#3483FA",
          },
        duration: 1000
        
        }).showToast();


    //Guardo los productos en localStorage
    localStorage.setItem('productos-carrito', JSON.stringify(productosAgregados));

}







