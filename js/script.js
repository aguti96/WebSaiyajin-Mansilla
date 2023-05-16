const resultadoElement = document.getElementById("resultado");
const personajeElement = document.getElementById("personaje");
const opcionInput = document.getElementById("opcion");
const valor1Input = document.getElementById("valor1");
const valor2Input = document.getElementById("valor2");
const calcularBtn = document.getElementById("calcular");
const mostrarBtn = document.getElementById("mostrar");
let personajes=[]
document.addEventListener("DOMContentLoaded", start) 

function start(){
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
};
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
  document.getElementById("btn-personaje").setAttribute("onclick","realizarOperacion()");
  

  
  /*calcularBtn.addEventListener("click", realizarOperacion);
  /*mostrarBtn.addEventListener("click", mostrarPersonaje());
});*/

function realizarOperacion() {
  const opcion = opcionInput.value;
  const valor1 = parseInt(valor1Input.value);
  const valor2 = parseInt(valor2Input.value);
  let resultado;

  if (opcion === "1") {
    resultado = valor1 + valor2;
  } else if (opcion === "2") {
    resultado = valor1 - valor2;
  } else if (opcion === "3") {
    resultado = valor1 + " " + valor2;
  } else {
    resultado = "Opción inválida";
  }

console.log(personajes)

  resultadoElement.textContent = "El resultado es: " + personajes[resultado];
}