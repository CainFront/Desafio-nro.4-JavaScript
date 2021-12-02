// CALCULO 1: TIEMPO
let getDataUno = function () {
  let distancia = document.getElementById("distancia").value;
  let velocidad = document.getElementById("velocidad").value;
  console.log("Una distancia de: " + distancia + " Km");
  console.log("Una velocidad de: " + velocidad + " Km/h");

  if (velocidad <= 120) {
    let totalTiempo = distancia / velocidad;
    console.log("Tardaras " + totalTiempo.toFixed(2) + " Horas");
    alert("Tardaras " + totalTiempo.toFixed(2) + " Horas");
  } else {
    alert("El limite de velocidad es 120km/h. Es por tu seguridad");
  }
};

// CALCULO 2: DISTANCIA
let getDataDos = function () {
  let tiempoDos = document.getElementById("tiempoDos").value;
  let velocidadDos = document.getElementById("velocidadDos").value;
  console.log("Un tiempo de: " + tiempoDos + " Horas");
  console.log("Una velocidad de: " + velocidadDos + " Km/h");

  if (velocidadDos <= 120) {
    let totalDistancia = velocidadDos * tiempoDos;
    console.log(
      "La distancia a recorrer es de: " + totalDistancia.toFixed(2) + " Km"
    );
    alert(
      "La distancia a recorrer es de: " + totalDistancia.toFixed(2) + " Km"
    );
  } else {
    alert("El limite de velocidad es 120km/h. Es por tu seguridad");
  }
};

// CALCULO 3: VELOCIDAD

let getDataTres = function () {
  let distanciaTres = document.getElementById("distanciaTres").value;
  let tiempoTres = document.getElementById("tiempoTres").value;
  console.log("Una distancia de: " + distanciaTres + " Km");
  console.log("Un tiempo de: " + tiempoTres + " Horas");

  let totalVelocidad = distanciaTres / tiempoTres;
  console.log(
    "La velocidad requerida es: " + totalVelocidad.toFixed(2) + " Km/h"
  );
  alert("La velocidad requerida es: " + totalVelocidad.toFixed(2) + " Km/h");
};
