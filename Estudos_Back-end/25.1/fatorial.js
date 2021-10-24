const readline = require('readline-sync');

function calculoFatorial(number) {
    return [0,1].includes(number) ? 1 : number * calculoFatorial(number - 1);
}

function fatorial(){
    const number = readline.questionInt(`Digite o valor que deseja o fatorial: `);

    if(number <= 0) {
        console.log('Digite um numero > 0');
        return;
    };

    console.log(`Numero: ${number}`);
    
    const result = calculoFatorial(number);

    console.log(`Resultado: ${result}`);
}

fatorial();