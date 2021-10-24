const readline = require('readline-sync');

const games = [
    { name: 'Calcular IMC', script: './imcGrau.js' },
    { name: 'Calcular Velocidade Média', script: './velocidade.js' },
    { name: 'Sorteio', script: './sorteio.js' },
    { name: 'Calcular Fatorial', script: './fatorial.js' },
];

let list = games.map((game, index) => `${index + 1} - ${game.name}`);

list.push('Escolha o número do que deseja execultar: ');

list = list.join('\n');

const gameNumber = readline.questionInt(list) - 1;

const game = games[gameNumber];

if(!game) return console.log('Valor não encontrado');

require(game.script);

console.log(list);