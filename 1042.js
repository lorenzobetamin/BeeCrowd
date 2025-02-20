// Entrada de dados
const input = require("fs").readFileSync("data/1042.txt", "utf8");
const lines = input.split('\r\n');

let valores = lines[0].split(" ").map(Number); // o split divide uma string dentro de um array, nao esquecer

let valoresOriginais = [];
for (let i = 0; i < valores.length; i++) {
    valoresOriginais[i] = valores[i];
}

// Ordenacao manual (Bubble Sort simplificado) //sort simples, como o proprio nome da questao kkkkk
for (let i = 0; i < valores.length - 1; i++) {
    for (let j = 0; j < valores.length - 1 - i; j++) {
        if (valores[j] > valores[j + 1]) {
            [valores[j], valores[j + 1]] = [valores[j + 1], valores[j]];
        }
    }
}

// Imprimindo os valores ordenados
for (let i = 0; i < valores.length; i++) {
    console.log(valores[i]);
}

// Linha em branco (para dar certo a entrada no bc)
console.log("");

// Imprimindo resultado
for (let i = 0; i < valoresOriginais.length; i++) {
    console.log(valoresOriginais[i]);
}