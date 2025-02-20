const input = require("fs").readFileSync("data/1049.txt", "utf8");
const lines = input.split("\r\n");

// Declarando variaveis
let A = lines[0]; 
let B = lines[1]; 
let C = lines[2]; 

// Definindo o animal correspondente
if (A == 'vertebrado') { 
    if (B == 'ave') {
        if (C == 'onivoro') {
            console.log('pomba');
        } else if (C == 'carnivoro') {
            console.log('aguia');
        }
    } else if (B == 'mamifero') {
        if (C == 'onivoro') {
            console.log('homem');
        } else if (C == 'herbivoro') {
            console.log('vaca');
        }
    }
} else if (A == 'invertebrado') {
    if (B == 'inseto') {
        if (C == 'hematofago') {
            console.log('pulga');
        } else if (C == 'herbivoro') {
            console.log('lagarta');
        }
    } else if (B == 'anelideo') {
        if (C == 'hematofago') {
            console.log('sanguessuga');
        } else if (C == 'onivoro') {
            console.log('minhoca');
        }
    }
}

// Anotacoes //

// == compara
// nao esquecer \r\n