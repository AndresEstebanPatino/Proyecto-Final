

const productosCarrito = [];


/*const nombre = 'Martin';
// backticks
const saludo = `Hola ${nombre}`*/

// () [] {}
function pintarProductos() {
  let listaPlatos = "";
  for (let i = 0; i < productos.length; i++) {
    listaPlatos += `
        <div class="infoPlatos">
          <img src="${productos[i].imagen}">
          <div class="infoDetalle">
            <p class="price">$${productos[i].precio}</p>
            <h4>${productos[i].nombre}</h4>
            <p>${productos[i].descripcion}</p>
            <div class="counter">
              <button data-id="${i}" class="counterLeft">-</button>
              <p>${productos[i].cantidad}</p>
              <button data-id="${i}" class="counterRight">+</button>
            </div>
          </div>
        </div>
    `;
  }
  const listaPlatosContenedor = document.querySelector('.platos');
  listaPlatosContenedor.innerHTML = listaPlatos;
  // document.querySelector('.platos').innerHTML = //listaPlatos;
}

pintarProductos();

let hola = document.querySelector(".platos");
hola.addEventListener("click", addCantidad);

function addCantidad (event) {
  const indice = event.target.dataset.id;
  if (event.target.className === "counterLeft") {
    if (productos[indice].cantidad > 0) {
      productos[indice].cantidad--;
      pintarProductos();
      productosCarrito[indice] = productos[indice];
    }
  }
  if (event.target.className === "counterRight") {
    if (productos[indice].cantidad < 10){
      productos[indice].cantidad++;
      pintarProductos();
      productosCarrito[indice] = productos[indice];
    }
  } 
  
} 

document.querySelector('.icoSend').addEventListener('click', nuevaPag);
function nuevaPag() {

  let listaCarrito = "";
  let añadirCarrito ="";
  let headerCarrito= "";
  añadirCarrito+=`<div id="carrito" class="carrito">

                       </div>`;
  headerCarrito+=`<div class="header">
                      <button  class="botonRegreso" onclick="window.location.href='test.html'"> < </button>
                      <h1 class="headerCarrito">My cart</h1>
                     </div>`
  for (let i = 0; i < productosCarrito.length; i++) {

    listaCarrito += `
      <div class="platos">
        <div class="infoPlatos">
          <img src="${productosCarrito[i].imagen}">
          <div class="infoDetalle">
            <p class="price">$${productosCarrito[i].precio}</p>
            <h4>${productosCarrito[i].nombre}</h4>
            <p>${productosCarrito[i].descripcion}</p>
            <div class="counter">
              <button data-id="${i}" class="counterLeft">-</button>
              <p>${productosCarrito[i].cantidad}</p>
              <button data-id="${i}" class="counterRight">+</button>
            </div>
          </div>
        </div>
        
    `;
    
    
  }

  document.querySelector('.slider').innerHTML = listaCarrito;
  document.getElementById('header').innerHTML = headerCarrito;
  document.getElementById('footer').innerHTML = añadirCarrito;




}


  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
