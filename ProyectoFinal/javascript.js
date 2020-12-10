const añadirCompras = document.querySelectorAll(".counterRight");

let carrito = []
let productos = [
  {
    precio: 52.0,
    nombre: "Pollo con papa salada",
    descripcion: "With Cheese souse",
    cantidad: 0,
    imagen: "comida-rapida-casera.jpg"
  },
  {
    precio: 23.0,
    nombre: "Mutton Curry",
    descripcion: "With bastami rice",
    cantidad: 0,
    imagen: "comida-rapida-casera.jpg"
  },
  {
    precio: 21.0,
    nombre: "French fry",
    descripcion: "With beef bacon",
    cantidad: 0,
    imagen: "comida-rapida-casera.jpg"
  },
  {
    precio: 91.0,
    nombre: "Croquetas",
    descripcion: "de conejo",
    cantidad: 0,
    imagen: "comida-rapida-casera.jpg"
  },
];


function pintarProductos() {
  let listaPlatos = "";
  for (let i = 0; i < productos.length; i++) {
    listaPlatos += `
        <div class="infoPlatos">
          <img src="./img/${productos[i].imagen}" />
          <div class="infoDetalle">
            <p class="price">$${productos[i].precio}</p>
            <h4>${productos[i].nombre}</h4>
            <p>${productos[i].descripcion}</p>
            <div class="counter">
              <button data-id="${i}" onclick="getObjet(this)" class="counterLeft">-</button>
              <p>${productos[i].cantidad}</p>
              <button data-id="${i}" onclick="getObjet(this)" class="counterRight">+</button>
            </div>
          </div>
        </div>
    `;
  }
  const platosContainer = document.querySelector(".platos");
  platosContainer.innerHTML = listaPlatos;
}

pintarProductos();

function getObjet(objeto){
 
  let indice = objeto.dataset.id; 

  if (objeto.className === "counterLeft") {
    if (productos[indice].cantidad > 0) {
      productos[indice].cantidad--;

      pintarProductos();
    }
  }
  if (objeto.className === "counterRight") {
    productos[indice].cantidad++;
    pintarProductos();
  }
  console.log(objeto)
}

function crearElemento(){

let filtro = document.cloneNode(productos, true);
console.log(filtro);
}
crearElemento();


/*document.querySelector(".platos").addEventListener("click", function (event) {
  let indice = event.target.dataset.id;
  

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

*/

