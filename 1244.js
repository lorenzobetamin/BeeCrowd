// Entrada de dados
const input = require("fs").readFileSync("data/1244.txt", "utf8");
const lines = input.split('\n');

// Comparando as palavras pelo tamanho (InsertionSort ensinado em sala, aula 14)
function ordenarPorTamanho(arr) {
    for (let i = 1; i < arr.length; i++) {
        let palavraAtual = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j].length < palavraAtual.length) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = palavraAtual;
    }
}

// Declarando variaveis
let N = parseInt(lines[0]);

for (let i = 1; i <= N; i++) {
    let palavras = [];
    let palavraAtual = "";

// Separando as palavras
    for (let j = 0; j < lines[i].length; j++) {
        if (lines[i][j] !== " ") {
            palavraAtual += lines[i][j];
        } else {
            if (palavraAtual.length > 0) {
                palavras.push(palavraAtual);
                palavraAtual = "";
            }
        }
    }
    if (palavraAtual.length > 0) {
        palavras.push(palavraAtual);
    }

    ordenarPorTamanho(palavras);

// Imprimindo o resultado (as palavras e ordenando elas)
    let resultado = "";
    for (let k = 0; k < palavras.length; k++) {
        resultado += palavras[k];
        if (k < palavras.length - 1) {
            resultado += " ";
        }
    }

    console.log(resultado);
}