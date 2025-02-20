// Entrada de dados
const input = require("fs").readFileSync("data/1187.txt", "utf8");
const lines = input.split("\r\n");

// Declarando variaveis
let operacao = lines[0].trim(); // trim serve pra remover espacos em branco, nao esquecer
let matriz = [];

// Faz a matriz 12x12 a partir dos valores 
for (let linha = 0; linha < 12; linha++) {
    let linhaAtual = [];
    for (let coluna = 0; coluna < 12; coluna++) {
        linhaAtual.push(parseFloat(lines[1 + linha * 12 + coluna]));
    }
    matriz.push(linhaAtual);
}

// Declarando variaveis
let soma = 0;
let quantidade = 0;

// Percorre a matriz para pegar so os numeros da area superior
for (let linha = 0; linha < 12; linha++) { 
    for (let coluna = linha + 1; coluna < 12 - linha - 1; coluna++) { 
        soma += matriz[linha][coluna]; 
        quantidade++;
    }
}

// Calculando o resultado final
let resultado;
if (operacao === 'S') { 
    resultado = soma; 
} else if (operacao === 'M') { 
    resultado = soma / quantidade; 
}

// Imprimindo resultado
console.log(resultado.toFixed(1));

// ps. tive ajuda e auxilio do Leo, aluno do professor Ivo (1 semestre tbm) e do monitor Pedro para formulacao do racicocinio