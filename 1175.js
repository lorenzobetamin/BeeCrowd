// Entrada de dados
const input = require("fs").readFileSync("data/1175.txt", "utf8");
const lines = input.split("\r\n");

// Convertendo a entrada para um vetor de números inteiros
let N = lines.map(Number);

// Utilizando o algoritmo de inversao de vetores
for (let i = 0; i < 10; i++) {
    N[i] = N[i] + N[19 - i];
    N[19 - i] = N[i] - N[19 - i];
    N[i] = N[i] - N[19 - i];
}
// Imprimindo resultado
for (let i = 0; i < 20; i++) {
    console.log(`N[${i}] = ${N[i]}`);
}