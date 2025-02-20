// Entrada de dados
const input = require('fs').readFileSync('data/1005.txt', 'utf8');
const lines = input.split('\r\n');

// Declarando variáveis
let notaA = parseFloat(lines[0]);
let notaB = parseFloat(lines[1]);

// Calculando peso das notas
const pesoA = 3.5;
const pesoB = 7.5;

// Calculando a média ponderada
let MEDIA = (((notaA * pesoA) + (notaB * pesoB)) / (pesoA + pesoB));

// Imprimindo média
console.log(`MEDIA = ${MEDIA.toFixed(5)}`)