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
                <button data-id="${productos[i].id}" class="counterLeft">-</button>
                <p>${productos[i].cantidad}</p>
                <button data-id="${productos[i].id}" class="counterRight">+</button>
              </div>
            </div>
          </div>
      `;
  }
  const listaPlatosContenedor = document.querySelector(".platos");
  document.querySelector(".platos").innerHTML = listaPlatos;
}

pintarProductos();