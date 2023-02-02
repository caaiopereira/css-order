const readline = require("readline-sync");

let insert = "";
const properties = [];

while (insert != "exit") {
  properties.push(insert);
  insert = readline.question("Adicione um atributo do CSS: ").toLocaleLowerCase();
}
console.log((`${properties.sort().join('\n')}`));