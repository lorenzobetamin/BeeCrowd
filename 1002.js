// Lendo o arquivo de dados
const input = require('fs').readFileSync('data/1002.txt', 'utf8');

// Dividindo os dados de entrada em várias partes pelo espaço
const lines = input.split(' ');

// Lendo e convertendo a entrada para float
let raio = parseFloat(lines[0]);

// Definindo o valor de PI
const PI = 3.14159; // const PI = Math.PI

// Calculando a área
let area = PI * Math.pow(raio, 2);

// Imprimindo o resultado com 4 casas decimais
console.log(`A=${area.toFixed(4)}`);