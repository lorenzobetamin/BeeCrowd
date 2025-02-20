// Entrada de dados (feita em sala, sem uso de function, agora tem KKKKKKKK)
const input = require("fs").readFileSync("data/1071.txt", "utf8");
const lines = input.split("\r\n");

// Calculando soma dos numeros
function somaNumeros(x, y) {
    let soma = 0;

    let menor = Math.min(x, y); // encontra menor valor entre X e Y
    let maior = Math.max(x, y); // encontra maior valor entre X e Y

    // Verificacao de forma iterativa
    for (let i = menor + 1; i < maior; i++) {
        if (i % 2 !== 0) { // resto da divisao diferente de 0 = impar
            soma += i;
        }
    }

    return soma;
}

// Declarando variaveis
let x = parseInt(lines[0]);
let y = parseInt(lines[1]);

// Imprimindo resultado
console.log(somaNumeros(x, y));