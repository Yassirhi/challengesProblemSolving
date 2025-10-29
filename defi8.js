const prompt = require("prompt-sync")();

const count={};

let v=prompt("Entrer le mot : ");
for (let e of v) {
    if(count[e]){count[e]++}
    else{count[e]=1;}
}
console.log(count)