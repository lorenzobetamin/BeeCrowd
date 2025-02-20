const input = require("fs").readFileSync("data/1101.txt", "utf8");
const lines = input.split("\n");

// Declarando variáveis
let text = "";
let sum = 0;
let i;

// Iterarando as linhas
for (let index = 0; index < lines.length; index++) { // (pesquisado, duvida)
  let [m, n] = lines[index].split(" ");
  let M = parseInt(m);
  let N = parseInt(n); 

  if (M <= 0 || N <= 0) {
    break; // loop se M ou N for menor ou igual a 0
  }

  if (M > N) {
    i = N;
    for (i; i <= M; i++) {
      text += (i === N ? i : " " + i); 
      sum += i;
    }
    console.log(`${text} Sum=${sum}`);
  } else if (N > M) {
    i = M;
    for (i; i <= N; i++) {
      text += (i === M ? i : " " + i); 
      sum += i;
    }
    console.log(`${text} Sum=${sum}`);
  } else {
    console.log(`${X} Sum=${M}`);
  }

  // Reinicia text e sum para a próxima linha
  text = "";
  sum = 0;
}