const input = require("fs").readFileSync("data/1060.txt", "utf8");
const lines = input.split("\n");

// Declarando Variaveis
let positivos = 0;
for(let i = 0; i < 6; ++i){ //incrementa
    let numero =  parseFloat(lines[i]);

    if(numero > 0)  ++positivos; //incrementa
}

console.log(`${positivos} valores positivos`);