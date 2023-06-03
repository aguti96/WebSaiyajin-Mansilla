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
  personajes = [
    "Goku",
    "Vegeta",
    "Piccolo",
    "Gohan",
    "Trunks",
    "Bulma",
    "Chi-Chi",
    "Krillin",
    "Tien",
    "Yamcha",
    "Majin Buu",
    "Cell",
    "Freezer",
    "Broly",
    "Jiren",
    "Hit",
    "Goten",
  ];
}

let personajesMostrados = [];
localStorage.setItem("personajes", JSON.stringify(personajes));

function mostrarPersonaje() {
  const personajesGuardados = JSON.parse(localStorage.getItem("personajes"));

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
  const personajesGuardados = JSON.parse(localStorage.getItem("personajes"));

  const personajeAleatorio = personajesGuardados[Math.floor(Math.random() * personajesGuardados.length)];

  Swal.fire({
    title: personajeAleatorio,
    html: 'I will close in <b></b> milliseconds.',
    timer: 2000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      const b = Swal.getHtmlContainer().querySelector('b');
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
      console.log('I was closed by the timer');
    }
  });
}

function realizarOperacion() {
  const opcion = opcionInput.value;
  const valor1 = parseInt(valor1Input.value);
  const valor2 = parseInt(valor2Input.value);
  let resultado;
  const personajesGuardados = JSON.parse(localStorage.getItem("personajes"));

  if (opcion === "1") {
    resultado = valor1 + valor2;
  } else if (opcion === "2") {
    resultado = valor1 - valor2;
  } else if (opcion === "3") {
    resultado = valor1 + " " + valor2;
  } else {
    resultado = "Opción inválida";
  }

  resultadoElement.textContent = "El resultado es: " + personajesGuardados[resultado];
}

function agregarAlCarrito(nombre, precio) {
  const carritoElement = document.getElementById("lista-productos");
  const totalElement = document.getElementById("total");

  // Crear el elemento de lista para el producto
  const productoElement = document.createElement("li");
  productoElement.textContent = `${nombre} - Precio: $${precio.toFixed(2)}`;

  // Agregar el producto al carrito
  carritoElement.appendChild(productoElement);

  // Actualizar el total
  const total = parseFloat(totalElement.textContent);
  totalElement.textContent = (total + precio).toFixed(2);
}

function vaciarCarrito() {
  const carritoElement = document.getElementById("lista-productos");
  const totalElement = document.getElementById("total");

  // Vaciar el carrito (eliminar todos los elementos)
  while (carritoElement.firstChild) {
    carritoElement.removeChild(carritoElement.firstChild);
  }

  // Restablecer el total a cero
  totalElement.textContent = "0.00";
}
