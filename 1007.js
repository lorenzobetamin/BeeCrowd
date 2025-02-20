// Entrada de dados
const input = require('fs').readFileSync('data/1007.txt', 'utf8');
const lines = input.split('\r\n');

// Declarando variáveis
let A = parseInt(lines[0]);
let B = parseInt(lines[1]);
let C = parseInt(lines[2]);
let D = parseInt(lines[3]);

// Calculando diferença do PROD
let DIFERENCA = ((A * B) - (C * D));

// Imprimindo diferença do PROD
console.log(`DIFERENCA = ${DIFERENCA}`)