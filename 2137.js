// Entrada de dados
const input = require("fs").readFileSync("data/2137.txt", "utf8");
const lines = input.split("\r\n");

// Declarando variaveis
let i = 0;

while (i < lines.length) { // condicao que garante que o lines siga ate ser maior que i
    let n = parseInt(lines[i]);  
    let livros = []; 

    // Lendo o codigo dos livros
    for (let j = 1; j <= n; j++) {
        livros.push(lines[i + j]);
    }
    
    // Bubble Sort usado tbm no 1042 e apresentada em sala, no trabalho de danca KKKKKKKKK
    for (let k = 0; k < livros.length - 1; k++) { 
        let flag = false; 
        for (let j = 0; j < livros.length - 1 - k; j++) {  
            if (livros[j] > livros[j + 1]) {
                [livros[j], livros[j + 1]] = [livros[j + 1], livros[j]]; 
                flag = true; 
            }
        }
        if (!flag) {
            break; // para
        }
    }

    // Imprimindo os livros ordenados
    for (let i = 0; i < livros.length; i++) {
        console.log(livros[i]);
    }

    i += n + 1; 
}