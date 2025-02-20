const input = require("fs").readFileSync("data/1066.txt", "utf8");
const lines = input.split("\n");

// Declarando Variaveis
let valoresImpares = 0;
let valoresPares = 0;
let valoresNegativos = 0;
let valoresPositivos = 0;

// Definindo condicoes
for (let i = 0; i < 5; i++) {
    let valor = parseInt(lines[i]); // = 0; i < 5; i++
    if (valor % 2 === 0) {
        valoresPares++;
    } else {
        valoresImpares++;
    } 
    if(valor > 0) {  
        valoresPositivos++;
    } else if(valor < 0) {
        valoresNegativos++;
    }
}

console.log(valoresPares+" valor(es) par(es)");
console.log(valoresImpares+" valor(es) impar(es)");
console.log(valoresPositivos+" valor(es) positivo(s)");
console.log(valoresNegativos+" valor(es) negativo(s)");