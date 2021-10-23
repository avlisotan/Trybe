const imcInsercaoDados = require('./imcInsercaoDados');
const calcularImc = require('./imc');

function imcGrau() {
    const insercaoDados = imcInsercaoDados();
    const peso = insercaoDados[2];
    const altura = insercaoDados[3];
    const imc = calcularImc.calcularImc(peso, altura);
    const pesoIdeal = calcularImc.pesoIdeal(altura);
    if (imc < 18.5) {
        console.log('Situação: Abaixo do peso (magreza)');
        pesoIdeal;
        return;
    }
    
    if (imc < 25) {
        console.log('Situação: Peso normal');
        pesoIdeal;
        return;
    }
 
    if (imc < 30) {
        console.log('Situação: Acima do peso (sobrepeso)');
        pesoIdeal;
        return;
    }
 
    if (imc < 35) {
        console.log('Situação: Obesidade grau I');
        pesoIdeal;
        return;
    }
 
    if (imc < 40) {
        console.log('Situação: Obesidade grau II');
        pesoIdeal;
        return;
    }
 
    console.log('Situação: Obesidade graus III e IV');
    pesoIdeal;
}

imcGrau();