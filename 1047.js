/////////////////////////////////////////////////////////
//////////////NAO RESOLVIDOOOOOOOOOOOOOOOO///////////////
/////////////////////////////////////////////////////////

const input = require("fs").readFileSync("data/1047.txt", "utf8");
const lines = input.split("\n");

// Declarando e convertendo variaveis
const [h1, m1, h2, m2] = lines[0].split(' ').map(Number);

// Calculando a duração em minutos
let inicio = h1 * 60 + m1;
let fim = h2 * 60 + m2;
let duracaoMinutos = fim - inicio;

// Ajustando para jogos que se estendem por mais de um dia
if (duracaoMinutos < 0) {
    duracaoMinutos += 1440;
}

// Convertendo a duração em horas e minutos
let horas = Math.floor(duracaoMinutos / 60);
let minutos = duracaoMinutos % 60;

// Imprimindo resultado
if (duracaoMinutos === 1440) {
    console.log("O JOGO DUROU 24 HORA(S) E 0 MINUTO(S).");
} else {
    console.log(`O JOGO DUROU ${horas} HORA(S) E ${minutos} MINUTO(S).`);
}