let productosCarrito = [];

document.querySelector(".icoSend").addEventListener("click", nuevaPag);

function nuevaPag() {
  let listaCarrito = "";
  let footerCarrito = "";
  let headerCarrito = "";
  footerCarrito += `   <div class="footerNewPag">
                          <div class="totalLista">
                            <div class="total">
                            <h3>Total:</h3>
                            <p>222$</p>
                            </div>
                            <button  class="botonComprar">Enviar Pedido</button>
                          </div>
                       </div>`;
  headerCarrito += `<div class="header">
                      <div class=">
                        <button  class="botonRegreso" onclick="window.location.href='test.html'"> < </button>
                        <button class="botonBasura"><img src="ig/basurero.png"></button>
                      </div>
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
  }

  document.querySelector(".slider").innerHTML = listaCarrito;
  document.getElementById("header").innerHTML = headerCarrito;
  document.getElementById("footer").innerHTML = footerCarrito;
}
