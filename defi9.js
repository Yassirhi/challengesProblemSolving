const prompt = require("prompt-sync")();

let x=parseInt(prompt("Entrer le nombre de bouteilles : "))
let  b=0,v=0;
while (x>0) {
 b= b+x;
 v=v+x;
 x=Math.floor(v/3)
 v=v%3;
}
console.log(b)