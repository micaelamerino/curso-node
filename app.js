const readLineSync = require("readline-sync");
const { numeroAleatorio, verificarAdivinanza } = require("./adivinanza");

const obtenerNumeroUsuario = () => {
  return readLineSync.question("Ingrese un numero: ");
};

const juegoAdivinanza = () => {
  const numeroSecreto = parseInt(numeroAleatorio());
  let numeroAdivinado = 0;

  console.log("Bienvenido a Adivina el numero secreto!!!");
  console.log("Intenta adivinar el numero del 1 al 5");

  while (numeroAdivinado !== numeroSecreto) {
    numeroAdivinado = parseInt(obtenerNumeroUsuario());
    verificarAdivinanza(numeroSecreto, numeroAdivinado);
  }
};

juegoAdivinanza();
