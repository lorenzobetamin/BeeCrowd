// Entrada de dados
const input = require('fs').readFileSync('data/1008.txt', 'utf8');
const lines = input.split('\r\n');

// Declarando variáveis

let funcionario = parseInt(lines[0])
let horasT = parseInt(lines[1])
let valor = parseFloat(lines[2])

// Calculando salário
let salario = (horasT * valor)

// Imprimindo salário 
console.log(`NUMBER = ${funcionario}`)
console.log(`SALARY = U$ ${salario.toFixed(2)}`)