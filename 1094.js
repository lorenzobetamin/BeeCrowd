const input = require("fs").readFileSync("data/1094.txt", "utf8");
const lines = input.trim().split("\n");

// Declarando constante
const numCasos = parseInt(lines[0]);

// Declarando variaveis
let totalCobaias = 0;
let totalCoelhos = 0;
let totalRatos = 0;
let totalSapos = 0;

// Loop para cada caso de teste
for (let i = 1; i <= numCasos; i++) {
  const [quantidade, tipo] = lines[i].trim().split(' '); // trim para remover espaços em branco

// Verificação
  if (quantidade && tipo) {
    const quant = parseInt(quantidade);
    totalCobaias += quant; // Incrementa

    // Incrementa o total de cobaias
    if (tipo === 'C') {
      totalCoelhos += quant;
    } else if (tipo === 'R') {
      totalRatos += quant;
    } else if (tipo === 'S') {
      totalSapos += quant;
    }
  }
}

// Calcular percentuais
const percentCoelhos = ((totalCoelhos / totalCobaias) * 100).toFixed(2);
const percentRatos = ((totalRatos / totalCobaias) * 100).toFixed(2);
const percentSapos = ((totalSapos / totalCobaias) * 100).toFixed(2);

// Imprime os resultados
console.log(`Total: ${totalCobaias} cobaias`);
console.log(`Total de coelhos: ${totalCoelhos}`);
console.log(`Total de ratos: ${totalRatos}`);
console.log(`Total de sapos: ${totalSapos}`);
console.log(`Percentual de coelhos: ${percentCoelhos} %`);
console.log(`Percentual de ratos: ${percentRatos} %`);
console.log(`Percentual de sapos: ${percentSapos} %`);

// Site de pesquisa: https://awari.com.br/javascript-removendo-espacos-em-branco-de-uma-string/#:~:text=de%20uma%20String%22-,Dividindo%20a%20string%20e%20removendo%20espa%C3%A7os%20em%20branco%3A,com%20um%20espa%C3%A7o%20como%20separador.