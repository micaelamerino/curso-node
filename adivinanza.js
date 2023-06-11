const numeroAleatorio = () => {
    return Math.floor(Math.random()*5)+1;
};

const verificarAdivinanza = (numeroSecreto, numeroAdivinado)=> {
    if(numeroAdivinado === numeroSecreto) {
        console.log("¡Felicidades, has acertado!")
    } else if (numeroAdivinado > numeroSecreto) {
        console.log("El numero secreto es menor, ¡Sigue intentando!")
    }else {
        console.log("El numero secreto es mayor, ¡Sigue intentando!")
    };
};

module.exports = { numeroAleatorio, verificarAdivinanza};