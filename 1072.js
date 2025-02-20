const input = require("fs").readFileSync("data/1072.txt", "utf8");
const lines = input.split("\n");

// Declarando variáveis
let n = parseInt(lines[0]); // numero de entradas
let a = 0; // contador para numeros in
let b = 0; // contador para numeros out

// Imprimindo valores de números que estão in ou out
for (let x = 1; x <= n; x++ ){ // começa em 1 e vai até n 
    let valor = parseInt(lines[x]);
    if (valor >= 10 && valor <= 20) { // intervalo [10,20]
        a++;
    } else {
        b++;
    }
}

console.log(a + " in");
console.log(b + " out");