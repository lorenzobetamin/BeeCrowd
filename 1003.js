// Entrada de dados
const input = require('fs').readFileSync('data/1003.txt', 'utf8');
const lines = input.split('\r\n');

// Declarando variáveis
let A = parseInt(lines[0]);
let B = parseInt(lines[1]);

// Calculando a soma simples
console.log(`SOMA = ${A + B}`)