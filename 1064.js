const input = require("fs").readFileSync("data/1064.txt", "utf8");
const lines = input.split("\n");

// Declarando Variaveis
let contaOsPositivos = 0;
let somaOsPositivos = 0;

// Le os valores
for (let i = 0; i < 6; i++) {
    let valor = parseFloat(lines[i]);
    if (valor > 0) {
        contaOsPositivos++;
        somaOsPositivos += valor;
    }
}

// Calcula a média com os positivos
let media = contaOsPositivos > 0 ? (somaOsPositivos / contaOsPositivos) : 0; //(operador ternario)

// Imprimindo o resultado
console.log(`${contaOsPositivos} valores positivos`);
console.log(media.toFixed(1));

// Video visto: https://www.youtube.com/watch?v=YjEtiFi2k7g