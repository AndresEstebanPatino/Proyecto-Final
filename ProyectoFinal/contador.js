let hola = document.querySelector(".platos");
hola.addEventListener("click", addCantidad);

function addCantidad (event) {
  const indice = event.target.dataset.id;
  if (event.target.className === "counterLeft") {
    if (productos[indice].cantidad > 0) {
      productos[indice].cantidad--;
    }
  }
  if (event.target.className === "counterRight") {
    if (productos[indice].cantidad < 10){
      productos[indice].cantidad++;
      addToCart(productos[indice])
      event.target.parentElement.querySelector('p').innerHTML = productos[indice].cantidad;
      return;
    }
  } 
console.log(productosCarrito);
} 

function addToCart(plato){
  for (let i = 0; i < productosCarrito.length; i++){
    if(productosCarrito[i].nombre !== plato.nombre){
      productosCarrito.push(plato)
    }
    return;
  }
}
  addToCart()
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
