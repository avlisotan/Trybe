const readline = require('readline-sync');

function sorteio() {
    const numero = readline.questionInt(`Descubra qual número pensei entre 1 e 5: `);

    const sorteio = Math.floor(Math.random() * (5-1) + 1);

    if(numero != sorteio) {
        console.log(`Errrrooooou, era ${sorteio}.`);
        return;
    }

    console.log(`Parabéns!!! Você acertou!!!`)
}

sorteio();