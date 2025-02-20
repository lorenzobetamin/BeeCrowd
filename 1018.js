const input = require("fs").readFileSync("data/1018.txt", "utf8");
const lines = input.split("\n");

// Declarando Variaveis
let N = parseInt(lines[0])

// Imprimeindo Valor Recebido
console.log(N);

// Dividindo o valor em notas
console.log(`${Math.floor(N / 100)} nota(s) de R$ 100,00`);
N %= 100;
console.log(`${Math.floor(N / 50)} nota(s) de R$ 50,00`);
N %= 50;
console.log(`${Math.floor(N / 20)} nota(s) de R$ 20,00`);
N %= 20;
console.log(`${Math.floor(N / 10)} nota(s) de R$ 10,00`);
N %= 10;
console.log(`${Math.floor(N / 5)} nota(s) de R$ 5,00`);
N %= 5;
console.log(`${Math.floor(N / 2)} nota(s) de R$ 2,00`);
N %= 2;
console.log(`${N} nota(s) de R$ 1,00`);