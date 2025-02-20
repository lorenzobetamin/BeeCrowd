const input = require("fs").readFileSync("data/1044.txt", "utf8");
const lines = input.split("\n");

// Declarando Variaveis
let [A, B] = lines[0].split(' ').map(Number); //converte strings (sequencia de caracteres) em numeros

// Verificando se sao multiplos ou nao
if(A < B)   [A, B] = [B, A];

console.log((A % B === 0) ? "Sao Multiplos" : "Nao sao Multiplos"); // ? (operador ternario) se for verdadadeiro o codigo segue, resto da divisao de A e B ser = 0

// Video visto: https://www.youtube.com/watch?v=YjEtiFi2k7g