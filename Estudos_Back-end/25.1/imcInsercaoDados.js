const imc = require('./imc');

const readline = require('readline-sync');

function imcInsercaoDados() {
    const peso = readline.questionFloat(`Digite o seu peso(kg): `);
    const altura = readline.questionInt(`Digite a sua altura(cm): `);

    return imc.imprimirImc(peso, altura)
}

// imcInsercaoDados();

module.exports = imcInsercaoDados;
