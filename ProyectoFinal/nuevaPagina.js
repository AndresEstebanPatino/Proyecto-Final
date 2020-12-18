const numeroEmpresa = 34662214099;
let productosCarrito = [];
let pedidoFinal = ["Pedido: "]

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
                             <button  class="botonComprar" onClick="enviarPedido()">Enviar Pedido</button>
                          </div>
                       </div>`;
  headerCarrito += `<div class="header">
                        <button  class="botonRegreso" onclick="window.location.href='index.html'"> < </button>
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

}


function enviarPedido(){
  enviarMensaje();
  window.location.href ="https://api.whatsapp.com/send/?phone=" + numeroEmpresa + "&text="+ pedidoFinal +"&app_absent=0";
}
function enviarMensaje() {
  for (let i = 0; i < productosCarrito.length; i++){
        let textopedido = productosCarrito[i].nombre + "x(" + productosCarrito[i].cantidad + ") --" 
        pedidoFinal += textopedido;
  }
}