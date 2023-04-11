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
      alert("El personaje seleccionado es: " + personaje);
    }
  
    document.getElementById("btn-personaje").addEventListener("click", mostrarPersonaje);
  });
  
  
  