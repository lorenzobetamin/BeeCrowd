// Entrada de dados
const input = require("fs").readFileSync("data/1080.txt", "utf8");
const lines = input.split("\r\n");

// Função do maximo no vetor
function maiorEPosicao(vetor) {
    let maiorValor = vetor[0];
    let posicao = 0;

    for (let i = 1; i < vetor.length; i++) {
        if (vetor[i] > maiorValor) {
            maiorValor = vetor[i];
            posicao = i;
        }
    }

    return [maiorValor, posicao + 1]; // adiciona +1
}

// Declarando variaveis (100 numeros/valores inteiros)
let valores = lines.map(Number);

// Imprimindo resultado
let [maior, posicao] = maiorEPosicao(valores);
console.log(maior);
console.log(posicao);