// Lendo o arquivo de dados
const input = require('fs').readFileSync('data/1001.txt', 'utf8');

// Dividindo os dados de entrada
const lines = input.split('\n');

// Lendo e convertendo os dois valores de entrada tipo string para inteiro 
let A = parseInt(lines[0]);
let B = parseInt(lines[1]);

// Calculando a soma de A e B
let X = A + B;

// Imprimindo o resultado 
console.log('X = ' + X);