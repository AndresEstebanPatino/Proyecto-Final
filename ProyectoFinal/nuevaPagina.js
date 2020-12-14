
let productosCarrito = [];

document.querySelector('.icoSend').addEventListener('click', nuevaPag);

function nuevaPag(e) {

  let listaCarrito = "";
  let añadirCarrito ="";
  let headerCarrito= "";
  añadirCarrito+=`<div id="carrito" class="carrito">
                       <button  class="botonComprar"> < </button>
                       </div>`;
                       
  headerCarrito+=`<div class="header">
                      <button  class="botonRegreso" onclick="window.location.href='test.html'"> < </button>
                      <h1 class="headerCarrito">My cart</h1>
                     </div>`;
                     

    for (let i = 0; i < productosCarrito.length; i++) {

      listaCarrito += `
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
      if(i = 1){
        break;
      } 
    }

  document.querySelector('.slider').innerHTML = listaCarrito;
  document.getElementById('header').innerHTML = headerCarrito;
  document.getElementById('footer').innerHTML = añadirCarrito;

 
  console.log(productosCarrito)
    

}


