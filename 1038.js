const input = require("fs").readFileSync("data/1038.txt", "utf8");
const lines = input.split("\n");

// Declarando Variaveis
let [codigo, quantidade] = lines[0].split(' ').map(Number); //converte strings (sequencia de caracteres) em numeros 
let total;

// Total da compra = quantidade * valor de cada item
switch(codigo){
    case 1: total = quantidade * 4.00;
            break;
    case 2: total = quantidade * 4.50;
            break;
    case 3: total = quantidade * 5.00;
            break;
    case 4: total = quantidade * 2.00;
            break;
    case 5: total = quantidade * 1.50;
            break;
}

console.log(`Total: R$ ${total.toFixed(2)}`);