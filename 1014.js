// Lendo o arquivo de dados
const input = require('fs').readFileSync('data/1014.txt', 'utf8');

// Dividindo os dados de entrada
const lines = input.split('\n');

// Lendo e convertendo  
let A = parseFloat(lines[0]);
let B = parseFloat(lines[1]);

// Calculando o consumo médio
let consumo = (A / B)

// Imprimindo o resultado 
console.log(consumo+ ' km/l')