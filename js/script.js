const resultadoElement = document.getElementById("resultado");
const personajeElement = document.getElementById("personaje");
const opcionInput = document.getElementById("opcion");
const valor1Input = document.getElementById("valor1");
const valor2Input = document.getElementById("valor2");
const calcularBtn = document.getElementById("calcular");
const mostrarBtn = document.getElementById("mostrar");
let personajes = [];

document.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("Estamos en start");
  cargarDatos();
}

function cargarDatos() {
  fetch("datos.json")
    .then(response => response.json())
    .then(data => {
      personajes = data;
      localStorage.setItem("personajes", JSON.stringify(personajes));
      console.log("Datos cargados:", personajes);
    })
    .catch(error => console.error("Error al cargar los datos:", error));
}

let personajesMostrados = [];

function mostrarPersonaje() {
  const personajesGuardados = JSON.parse(localStorage.getItem("personajes"));
  console.log("Personajes guardados:", personajesGuardados);
  console.log("Personajes mostrados:", personajesMostrados);

  if (personajesMostrados.length >= personajesGuardados.length) {
    resultadoElement.textContent = "Ya se han mostrado todos los personajes";
    return;
  }

  let index;
  do {
    index = Math.floor(Math.random() * personajesGuardados.length);
  } while (personajesMostrados.includes(index));

  personajesMostrados.push(index);
  const personaje = personajesGuardados[index];
  personajeElement.textContent = personaje;
}

document.getElementById("btn-personaje").addEventListener("click", realizarOperacionWithDelay);

function realizarOperacionWithDelay() {
  personajesGuardados = JSON.parse(localStorage.getItem("personajes"));

  Swal.fire({
    title: "Y el personaje que te representa es...",
    html: "I will close in <b></b> milliseconds.",
    timer: 2000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      const b = Swal.getHtmlContainer().querySelector("b");
      timerInterval = setInterval(() => {
        b.textContent = Swal.getTimerLeft();
      }, 100);
    },
    willClose: () => {
      clearInterval(timerInterval);
      mostrarPersonaje();
    }
  }).then((result) => {
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log("I was closed by the timer");
    }
  });
}

function agregarAlCarrito(nombre, precio) {
  const carritoElement = document.getElementById("lista-productos");
  const totalElement = document.getElementById("total");

  const productoElement = document.createElement("li");
  productoElement.textContent = `${nombre} - Precio: $${precio.toFixed(2)}`;

  carritoElement.appendChild(productoElement);

  const total = parseFloat(totalElement.textContent);
  totalElement.textContent = (total + precio).toFixed(2);
}

function vaciarCarrito() {
  const carritoElement = document.getElementById("lista-productos");
  const totalElement = document.getElementById("total");

  while (carritoElement.firstChild) {
    carritoElement.removeChild(carritoElement.firstChild);
  }

  totalElement.textContent = "0.00";
}
