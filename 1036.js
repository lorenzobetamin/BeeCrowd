const input = require("fs").readFileSync("data/1036.txt", "utf8");
const lines = input.split("\n");

// Separando valor por ' '
let [a, b, c] = lines[0].split(" ").map(Number); //converte strings (sequencia de caracteres) em numeros 

// Calculando DELTA, Δ = b^2 – 4ac
let delta = b * b - 4 * a * c;

// Imprimindo, -b +- raiz de Δ / 2a
if (a !== 0 && delta >= 0) {
    let R1 = (-b + Math.sqrt(delta)) / (2 * a); //sqrt calcula raiz
    let R2 = (-b - Math.sqrt(delta)) / (2 * a);
  
    console.log(`R1 = ${R1.toFixed(5)}`);
    console.log(`R2 = ${R2.toFixed(5)}`);
  } else {
    console.log("Impossivel calcular");
}