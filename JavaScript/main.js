
let productos;
let cantProductos = 0;

const agregarProductos = ()=>{
    let carrito = [];
    alert('Selecione el producto que desea comprar');

    do{
        productos = parseInt(prompt('1 (Camiseta) - 2 (Short) - 3 (Medias) - 0 (Finalizar Compra)'));

    if(productos ===  1){
        cantProductos++
        carrito.push('Camiseta');
        
    }else if(productos === 2){
        cantProductos++
        carrito.push('Short')
    }else if(productos === 3){
        cantProductos++
        carrito.push('Medias');
        
    }else if(productos === 0){
        break;
        
    }else{

            alert('Por favor ingrese un producto valido');
        }

    }while(productos != 0);

        if(carrito.length === 0){
            alert('El carrito esta vacio');
        }else{

            alert('Son: ' + cantProductos + ' productos ' + ' ' + '=>' + carrito.join(' ') );
        }

}

agregarProductos();


