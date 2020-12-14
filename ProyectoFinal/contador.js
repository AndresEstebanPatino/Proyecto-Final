let hola = document.querySelector(".platos");
hola.addEventListener("click", addCantidad);

function getProducto(array, id) {
  const producto = array.find(function (p) {
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
  }
  if (event.target.className === "counterRight") {
    if (producto.cantidad < 10) {
      producto.cantidad++;
      pintarProductos();

      const existeProductoEnCarrito = getProducto(productosCarrito, id);
      if (existeProductoEnCarrito === undefined) {
        productosCarrito.push(producto);
        return;
      }
    }
  }
  console.log(productosCarrito);
}
