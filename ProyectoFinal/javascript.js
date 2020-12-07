const añadirCompras = document.querySelectorAll(".counterRight");
const productos = [
  {
    precio: 52.0,
    nombre: "Chicken Veggie Salad",
    descripcion: "With Cheese souse",
    cantidad: 0,
  },
  {
    precio: 23.0,
    nombre: "Mutton Curry",
    descripcion: "With bastami rice",
    cantidad: 0,
  },
  {
    precio: 21.0,
    nombre: "French fry",
    descripcion: "With beef bacon",
    cantidad: 0,
  },
];

function pintarProductos() {
  let listaPlatos = "";
  for (let i = 0; i < productos.length; i++) {
    listaPlatos += `
        <div class="infoPlatos">
          <img src="./img/comida-rapida-casera.jpg" />
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
  const platosContainer = document.querySelector(".platos");
  platosContainer.innerHTML = listaPlatos;
}

pintarProductos();

document.querySelector(".platos").addEventListener("click", function (event) {
  const indice = event.target.dataset.id;

  if (event.target.className === "counterLeft") {
    if (productos[indice].cantidad > 0) {
      productos[indice].cantidad--;
      pintarProductos();
    }
  }
  if (event.target.className === "counterRight") {
    productos[indice].cantidad++;
    pintarProductos();
  }
});
