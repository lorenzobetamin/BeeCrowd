const input = require("fs").readFileSync("data/1041.txt", "utf8");
const lines = input.split("\n");

// Declarando Variaveis
let [x, y] = lines[0].split(" ").map(Number); //converte strings (sequencia de caracteres) em numeros

// Apresentar Coordenadas
if (x > 0.0) {
  if (y > 0.0)       console.log("Q1"); // poderia utilizar switch-case tbm, inves de else-if (aula 6)
  else if (y < 0.0)  console.log("Q4");
  else               console.log("Eixo X");
} else if (x < 0.0) {
  if (y > 0.0)       console.log("Q2");
  else if (y < 0.0)  console.log("Q3");
  else               console.log("Eixo X");
} else {
  if (y > 0.0)       console.log("Eixo Y");
  else if (y < 0.0)  console.log("Eixo Y");
  else               console.log("Origem");
}