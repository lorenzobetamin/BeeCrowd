const input = require("fs").readFileSync("data/1067.txt", "utf8");
const lines = input.split("\n");

// Declarando variaveis
let x = parseInt(lines[0]);

// Impares
for (let i = 1; i <= x; i++) {
    if (i % 2 !== 0) console.log(i); // resto da divisao diferente de 0 = impar
}