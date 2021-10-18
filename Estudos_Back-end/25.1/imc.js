const peso = 93;
const altura = 170;

function calcularImc() {
    return (peso / Math.pow(altura / 100, 2)).toFixed(2);
    
};

function imprimirPesoAltura() {
    return console.log(`Peso: ${peso}kg, Altura: ${(altura / 100).toFixed(2)}m`);
};

function imprimirIMC() {
    return console.log(`IMC: ${calcularImc()}`);
};

imprimirPesoAltura();
imprimirIMC();

module.exports = {
    calcularImc,
    imprimirPesoAltura,
    imprimirIMC
};