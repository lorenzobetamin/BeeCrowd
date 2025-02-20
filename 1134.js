const input = require("fs").readFileSync("data/1134.txt", "utf8");
const lines = input.split("\n");

// A entrada contém apenas valores inteiros e positivos
// Declarando variáveis
let alcool = 0;
let gasolina = 0;
let diesel = 0;

// Iterando sobre os elementos
for (let i = 0; i < lines.length; i++) {
  let cliente = parseInt(lines[i]); // tipo de combustível abastecido

// Determinar qual de seus produtos tem a preferência de seus clientes
  if (cliente === 1) { // compara
    alcool++;
  } 
  else if (cliente === 2) {
    gasolina++;
  } 
  else if (cliente === 3) {
    diesel++;
  } 
  else if (cliente === 4) {
    break; // quando chegar a 4
  }
}

// Deve ser escrito a mensagem: "MUITO OBRIGADO" e a quantidade de clientes que
// abasteceram cada tipo de combustível, conforme exemplo.

// Imprime resultado, fora do if else (Carubbi)
console.log(`MUITO OBRIGADO`);
console.log(`Alcool: ${alcool}`);
console.log(`Gasolina: ${gasolina}`);
console.log(`Diesel: ${diesel}`);

// O programa será encerrado quando o código informado pelo cliente for o número 4.
// (entradas)
// 8
// 1 ok
// 7
// 2 ok
// 2 ok
// 4 encerra

// Exibindo esse resultado
// MUITO OBRIGADO
// Alcool: 1
// Gasolina: 2
// Diesel: 0