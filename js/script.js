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
  
  document.getElementById("btn-personaje").addEventListener("click", function() {
    // Obtener un número aleatorio entre 0 y la longitud de la lista de personajes
    const index = Math.floor(Math.random() * personajes.length);
    // Obtener el nombre del personaje en el índice aleatorio
    const personaje = personajes[index];
    // Mostrar el nombre del personaje en una ventana emergente
    alert("El personaje seleccionado es: " + personaje);
  });
  const listaPersonajes = ["Goku", "Vegeta", "Piccolo", "Gohan", "Trunks", "Goten", "bulma", "krillin", "Chi-Chi", "Tien", "Yamcha", "Cell", "Majin-boo", "Freezer", "Broly", "Jiren", "Hit"];
const indiceAleatorio = Math.floor(Math.random() * listaPersonajes.length);
console.log("El personaje aleatorio es: " + listaPersonajes[indiceAleatorio]);

  