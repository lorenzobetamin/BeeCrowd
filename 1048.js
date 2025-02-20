const input = require("fs").readFileSync("data/1048.txt", "utf8");
const lines = input.split("\n");

// Declarando Variaveis
let salario = Number(lines[0]); // converte string em numero
let salarioNovo;

// Salario com reajuste
if(salario <= 400.00){
    salarioNovo = salario * 1.15;
    console.log('Novo salario: ' +salarioNovo.toFixed(2));
    console.log('Reajuste ganho: ' +(salario * 0.15).toFixed(2));
    console.log('Em percentual: ' +'15 %');
}else if(salario <= 800.00){
    salarioNovo = salario * 1.12;
    console.log('Novo salario: ' + salarioNovo.toFixed(2));
    console.log('Reajuste ganho: ' + (salario * 0.12).toFixed(2));
    console.log('Em percentual: ' +'12 %');
}else if(salario <= 1200.00){
    salarioNovo = salario * 1.10;
    console.log('Novo salario: ' + salarioNovo.toFixed(2));
    console.log('Reajuste ganho: ' + (salario * 0.10).toFixed(2));
    console.log('Em percentual: ' +'10 %');
}else if(salario <= 2000.00){
    salarioNovo = salario * 1.07;
    console.log('Novo salario: ' +salarioNovo.toFixed(2));
    console.log('Reajuste ganho: ' +(salario * 0.07).toFixed(2));
    console.log('Em percentual: ' +'7 %');
}else if(salario > 2000.00){
    salarioNovo = salario * 1.04;
    console.log('Novo salario: ' +salarioNovo.toFixed(2));
    console.log('Reajuste ganho: ' +(salario * 0.04).toFixed(2));
    console.log('Em percentual: ' +'4 %');
}