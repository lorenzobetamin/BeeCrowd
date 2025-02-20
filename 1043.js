const input = require("fs").readFileSync("data/1043.txt", "utf8");
const lines = input.split("\n");

// Declarando Variaveis
let [A, B, C] = lines[0].split(" ").map(Number); //converte strings (sequencia de caracteres) em numeros 

// Formam ou nao formam um triangulo
if(A < B + C && B < A + C && C < A + B){
    console.log(`Perimetro = ${(A + B + C).toFixed(1)}`); // caso positivo calcula perimetro
}else{
    console.log(`Area = ${((A + B)/2 * C).toFixed(1)}`); // caso negativo calcula a area do trapezio
}

// Para formar um triangulo

// A < B + C
// B < A + C
// C < A + B