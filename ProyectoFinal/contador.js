let sumarProducto = document.querySelector(".platos");
sumarProducto.addEventListener("click", addCantidad);

function getProducto(array, id) {
  let producto = array.find(function (p) {
    return p.id == id;
  });
  return producto;
}
function addCantidad(event) {
  const id = event.target.dataset.id;
  const producto = getProducto(productos, id);

  if (event.target.className === "counterLeft") {
    if (producto.cantidad > 0) {
      producto.cantidad--;

      pintarProductos();
      addProductoToCarrito(producto);
    
    }
          console.log(productosCarrito);
  }
  if (event.target.className === "counterRight") {
    if (producto.cantidad < 10) {
      producto.cantidad++;
      pintarProductos();
    
    
      const objectInCart = productosCarrito.find(function(item){
        return item.id == id
        
      });
      console.log(objectInCart);
      
      if (objectInCart === undefined) {
        productosCarrito.push(producto);
      }
      return;
      
    }
    console.log(productosCarrito);
  }

}
