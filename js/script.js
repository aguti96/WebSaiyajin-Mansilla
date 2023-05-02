document.addEventListener("DOMContentLoaded", function() {
  const personajes = [
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

  let personajesMostrados = [];

  function mostrarPersonaje() {
    if (personajesMostrados.length >= personajes.length) {
      alert("Ya se han mostrado todos los personajes");
      return;
    }

    let index;
    do {
      index = Math.floor(Math.random() * personajes.length);
    } while (personajesMostrados.includes(index));

    personajesMostrados.push(index);
    const personaje = personajes[index];

    
    let opcion = prompt("Ingresa una opción:\n1. Sumar dos números\n2. Restar dos números\n3. Concatenar dos palabras");

    
    let resultado;
    let valor1;
    let valor2;

    
    if (opcion === "1") {
      valor1 = parseInt(prompt("Ingresa el primer número:"));
      valor2 = parseInt(prompt("Ingresa el segundo número:"));
      resultado = valor1 + valor2;
    } else if (opcion === "2") {
      valor1 = parseInt(prompt("Ingresa el primer número:"));
      valor2 = parseInt(prompt("Ingresa el segundo número:"));
      resultado = valor1 - valor2;
    } else if (opcion === "3") {
      valor1 = prompt("Ingresa la primera palabra:");
      valor2 = prompt("Ingresa la segunda palabra:");
      resultado = valor1 + " " + valor2;
    } else {
      alert("Opción inválida");
      return;
    }

    
    alert("El resultado es: " + resultado);
    alert("El personaje seleccionado es: " + personaje);
  }

  document.getElementById("btn-personaje").addEventListener("click", mostrarPersonaje);
});

  