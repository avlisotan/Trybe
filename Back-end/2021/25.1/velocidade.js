const readline = require('readline-sync');

function calcularVelocidadeMedia() {
    const result = readline.questionInt(`Digite 1 para velocidade média em m/s ou 2 para km/h: `);
    if(result != 1) {
        const distancia = readline.questionFloat(`Digite a distância percorrida(km): `);
        const tempo = readline.questionFloat(`Digite o tempo gasto(h): `);
        return console.log(`A velocidade média foi ${velocidadeMedia(distancia, tempo)}km/h`);
    }
    
    const distancia = readline.questionFloat(`Digite a distância percorrida(m): `);
    const tempo = readline.questionFloat(`Digite o tempo gasto(s): `);
    return console.log(`A velocidade média foi ${velocidadeMedia(distancia, tempo)}m/s`);
}

function velocidadeMedia(distancia, tempo) {
    return (distancia / tempo).toFixed(2);
}

calcularVelocidadeMedia();