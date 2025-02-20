// Entrada de dados
const input = require("fs").readFileSync("data/1182.txt", "utf8");
const lines = input.split("\r\n");

// Declarando constantes
const C = parseInt(lines[0]); // coluna da matriz
const T = lines[1].trim(); // trim serve pra remover espacos em branco, nao esquecer

// Inicializa a matriz
const M = [];
let contador = 2;

for (let i = 0; i < 12; i++) {
    M[i] = []; 
    for (let j = 0; j < 12; j++) {
        M[i][j] = parseFloat(lines[contador]); 
        contador++;
    }
}

// Realiza a operacao na coluna C
let soma = 0;

for (let i = 0; i < 12; i++) {
    soma += M[i][C]; 
}

// Calculando o resultado final
let resultado;
if (T === 'S') {
    resultado = soma;
} else if (T === 'M') {
    resultado = soma / 12;
}

// Imprimindo resultado
console.log(resultado.toFixed(1));

// ps. tive ajuda e auxilio do Leo, aluno do professor Ivo (1 semestre tbm) e do monitor Pedro para formulacao do racicocinio