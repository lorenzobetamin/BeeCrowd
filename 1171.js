// Entrada de dados
const input = require("fs").readFileSync("data/1171.txt", "utf8");
const lines = input.split("\r\n");

// Quantidade de numeros
const n = parseInt(lines[0]);

// Utilizando array vazio
let numeros = [];

// Armazenando os numeros
for (let i = 1; i <= n; i++) {
    numeros.push(parseInt(lines[i]));
}

// Utilizando array vazio, pra armazenar as ocorrencias
let ocorrencias = [];

// Contando a quantidade de vezes que cada numero aparece
for (let i = 0; i < numeros.length; i++) {
    let numero = numeros[i];
    let encontrado = false;

    for (let j = 0; j < ocorrencias.length; j++) { // Verificar se o numero esta ou nao na lista
        if (ocorrencias[j].numero === numero) {
            ocorrencias[j].quantidade++; // Se ja esta incrementa
            encontrado = true;
            break;
        }
    }

    if (!encontrado) {
        ocorrencias.push({ numero: numero, quantidade: 1 }); // Se o numeor nao esta, adicionar ele na lista de ocorrencias
    }
}

// Ordenando os itens em ordem crescente
for (let i = 0; i < ocorrencias.length - 1; i++) {
    for (let j = i + 1; j < ocorrencias.length; j++) {
        if (ocorrencias[i].numero > ocorrencias[j].numero) {
            let temp = ocorrencias[i]; // Troca os elementos fora de ordem
            ocorrencias[i] = ocorrencias[j];
            ocorrencias[j] = temp; 
        }
    }
}

// Imprimindo resultado
for (let i = 0; i < ocorrencias.length; i++) {
    console.log(`${ocorrencias[i].numero} aparece ${ocorrencias[i].quantidade} vez(es)`);
}