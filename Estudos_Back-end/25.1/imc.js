function calcularImc(peso, altura) {
    return (peso / Math.pow(altura / 100, 2)).toFixed(2);
};

function imprimirImc(peso, altura) {
    return console.log(`Peso: ${peso}kg, Altura: ${(altura / 100).toFixed(2)}m`),
    console.log(`IMC: ${calcularImc(peso, altura)}`);
};

// imprimirImc(93, 170);

module.exports = {
    calcularImc,
    imprimirImc
};
