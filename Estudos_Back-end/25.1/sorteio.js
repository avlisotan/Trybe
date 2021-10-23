const readline = require('readline-sync');

function sorteioNumero() {
    const numero = readline.questionInt(`Descubra qual número pensei entre 1 e 5: `);

    const sorteio = Math.floor(Math.random() * (5-1) + 1);

    validar(numero, sorteio);

    const resultado =  readline.question(`Quer jogar novamente(S/N): `).toUpperCase();

    if(resultado !== 'S') return console.log(`Obrigado e até a próxima!`);

    sorteioNumero();
}

function validar(numero, sorteio) {

    if(numero != sorteio) {
        console.log(`Errrrooooou, era ${sorteio}.`);
        return;
    }

    console.log(`Parabéns!!! Você acertou!!!`)
}

sorteioNumero();