// Sala Maximos e Minimos
const input = require("fs").readFileSync("data/1071.txt", "utf8");
const lines = input.split("\n");

// Declarando variáveis
let x = parseInt(lines[0]);
let y = parseInt(lines[1]);
let soma = 0;

let menor = Math.min(x, y); // encontra menor valor entre X e Y
let maior = Math.max(x, y); // encontra maior valor entre X e Y

// Verificacao de forma iterativa
for (let i = (menor + 1); i < maior; i++) {
  if (i % 2 !== 0) { // resto da divisao diferente de 0 = impar
    soma += i;
  }
}

// Imprime o resultado da soma
console.log(soma);