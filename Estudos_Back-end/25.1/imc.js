function calcularImc(peso, altura) {
    return (peso / Math.pow(altura / 100, 2)).toFixed(2)
};

function pesoIdeal(altura) {
    const pesoMinimo = (18.6 * Math.pow(altura / 100, 2)).toFixed(2);
    const pesoMaximo = (24.9 * Math.pow(altura / 100, 2)).toFixed(2);
    return console.log(`Seu peso ideal deve estar entre ${pesoMinimo}kg e ${pesoMaximo}kg`);
}

function imprimirImc(peso, altura) {
    return [ 
        console.log(`Peso: ${peso}kg, Altura: ${(altura / 100).toFixed(2)}m`),
        console.log(`IMC: ${calcularImc(peso, altura)}`), 
        peso,
        altura
    ];
};

// imprimirImc(93, 170);

module.exports = {
    calcularImc,
    imprimirImc,
    pesoIdeal
};
