const readline = require('readline-sync');

function calcularFibonacci(number) {
    let x = 1;
    let y = 1;

    for (; number >= 0; number--) {
        if(y) console.log(y);
        const z = x;
        x = x + y;
        y = z;
    }

    console.log(y);
    return y;    
}

function fibonacci() {
    const number = readline.questionInt(`Digite o valor que deseja obter a sequencia Fibonacci: `);

    if(number <= 0 ){
        console.log('Digite um valor > 0.');
        return;
    }

    console.log(`Número escolhido: ${number}`);

    calcularFibonacci(number - 2);
}

fibonacci();