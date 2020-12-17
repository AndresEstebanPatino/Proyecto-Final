let productosCarrito = [];

document.querySelector(".icoSend").addEventListener("click", nuevaPag);

function nuevaPag() {
  let listaCarrito = "";
  let footerCarrito = "";
  let headerCarrito = "";
  footerCarrito += `   <div class="footerNewPag">
                          <div class="totalLista">
                            <div class="total">
                            <h3>Total: </h3>
                            <p>0</p>
                            </div>
                            <button  class="botonComprar"><a href="https://api.whatsapp.com/send?phone=34662214099&text=hola,%20¿qué%20tal%20estás?">Enviar Pedido</a></button>
                          </div>
                       </div>`;
  headerCarrito += `<div class="header">
                        <button  class="botonRegreso" onclick="window.location.href='test.html'"> < </button>
                        <button class="botonBasura"><img src="img/basurero.png"></button>
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


 
  console.log(productosCarrito)
    

  document.querySelector(".slider").innerHTML = listaCarrito;
  document.getElementById("header").innerHTML = headerCarrito;
  document.getElementById("footer").innerHTML = footerCarrito;

  let convertirArray = productosCarrito.join();
  console.log(convertirArray);
}

