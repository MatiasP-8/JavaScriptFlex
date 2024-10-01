
let productos;

const agregarProductos = ()=>{
    let carrito = [];

    while(productos != '0'){

        //Pido los valores y los agrego al array vacio mediante el metodo push
        productos = prompt('Ingrese los productos - ingrese 0 para terminar');
        

        //valido si no agrega ningun producto y le envio un mensaje de error
        if(productos === ''){
            alert('No agregaste ningun producto');
        }
        

        //Condicional para que no me agregue el 0 a la lista al cerrar el bucle
        if(productos != '0' && productos != ''){
        carrito.push(productos);
        }
    }

    alert('Los productos son: ' + carrito);
}

agregarProductos();