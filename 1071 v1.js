const input = require("fs").readFileSync("data/1071.txt", "utf8");
const lines = input.split("\n");

// Declarando Variaveis
let x = parseInt(lines[0]);
let y = parseInt(lines[1]);
let soma = 0;

// Iterando e calculando a soma dos numeros impares
for (let i = (y + 1); i < x; i++){ // encontra maior e menor valor entre X e Y, o loop vai continuar ate que i < x
  if (i % 2 !== 0) soma+= i; // resto da divisao diferente de 0 = impar
}

// Imprimindo resultado da soma
console.log(soma);