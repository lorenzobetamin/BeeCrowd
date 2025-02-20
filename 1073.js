const input = require("fs").readFileSync("data/1073.txt", "utf8");
const lines = input.split("\n");

// Declarando variáveis
let N = parseInt(lines[0]);

// Imprimindo o quadrado de cada um dos valores pares
for (let i = 1; i <= N; i++) {
	if (i % 2 === 0) console.log(i + '^2 = ' + (i * i));
}