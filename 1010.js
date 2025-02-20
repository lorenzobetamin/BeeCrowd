// Entrada de dados
const imput = require('fs').readFileSync('data/1010.txt', 'utf8');
const lines = imput.split('\r\n');

// Declarando variáveis peça1
let peca1 = lines[0].split(' ');
let numPeca1 = parseInt(peca1[1]);
let valorPeca1 = parseFloat(peca1[2]);

// Declarando variáveis peça2
let peca2 = lines[1].split(' ');
let numPeca2 = parseInt(peca2[1]);
let valorPeca2 = parseFloat(peca2[2]);

// cálculo do valor a pagar
let valorPagar = numPeca1 * valorPeca1 + numPeca2 * valorPeca2;

// Imprimindo Valor
console.log(`VALOR A PAGAR: R$ ${valorPagar.toFixed(2)}`)