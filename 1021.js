const input = require("fs").readFileSync("data/1021.txt", "utf8");
const lines = input.split("\n");

// Separando valor por '.'
let valorSeparado = lines[0].split('.');

// Separando reais x centavos //EX 576.73
let reais = parseInt(valorSeparado[0]);
let centavos = parseInt(valorSeparado[1]);

// Transformando em centavos
let valor = (100 * reais) + centavos; // transforma tudo em centavos

// Definindo notas e moedas possíveis
let notas = [10000, 5000, 2000, 1000, 500, 200]; // em centavos
let moedas = [100, 50, 25, 10, 5, 1]; // em centavos

// Imprimindo de forma iterativa
console.log(`NOTAS:`);
for (let i = 0; i < notas.length; i++) {
    let quantidadeNotas = Math.floor(valor / notas[i]);
        console.log(quantidadeNotas + ' nota(s) de R$ ' + (notas[i] / 100).toFixed(2));
        valor %= notas[i];   
}

console.log(`MOEDAS:`);
for (let i = 0; i < moedas.length; i++) {
    let quantidadeMoedas = Math.floor(valor / moedas[i]);
        console.log(quantidadeMoedas + ' moeda(s) de R$ ' + (moedas[i] / 100).toFixed(2));
        valor %= moedas[i]
}