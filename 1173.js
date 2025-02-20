// Entrada de dados
const input = require("fs").readFileSync("data/1173.txt", "utf8");
const lines = input.split("\r\n");

// Declarando variaveis
let V = parseInt(lines[0]);

// Preenche o vetor // o primeiro numero do vetor N (N[0]) irá receber o valor de V (enunciado)
let N = [V]; // vetor de tamanho = 10
for (let i = 1; i < 10; i++) {
    N.push(N[i - 1] * 2);
}

// Imprimindo resultado
for (let i = 0; i < 10; i++) {
    console.log(`N[${i}] = ${N[i]}`);
}