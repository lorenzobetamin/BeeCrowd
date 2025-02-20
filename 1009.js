// Entrada de dados
const input = require('fs').readFileSync('data/1009.txt', 'utf8');
const lines = input.split('\r\n');

// Declarando variáveis

let nomeFuncionario = lines[0]
let salarioFuncionario = parseFloat(lines[1])
let vendasTotais = parseFloat(lines[2])

// Calculando salário
let total = (salarioFuncionario + (0.15 * vendasTotais))

// Imprimindo salário 
console.log(`TOTAL = R$ ${total.toFixed(2)}`)
