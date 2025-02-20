// Entrada de dados
const input = require('fs').readFileSync('data/1006.txt', 'utf8');
const lines = input.split('\r\n');

// Declarando variáveis
let notaA = parseFloat(lines[0]);
let notaB = parseFloat(lines[1]);
let notaC = parseFloat(lines[2]);

// Calculando peso das notas
const pesoA = 2.0;
const pesoB = 3.0;
const pesoC = 5.0;

// Calculando a média ponderada
let MEDIA = (((notaA * pesoA) + (notaB * pesoB) + (notaC * pesoC))/ (pesoA + pesoB + pesoC));

// Imprimindo média
console.log(`MEDIA = ${MEDIA.toFixed(1)}`)