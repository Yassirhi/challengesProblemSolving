const prompt = require("prompt-sync")();
let t=[1,2,3]
let i=t.length-1;
let tn=[]
tn=t
while (i>=0) {
    tn.push(t[i])
    i--;
}
console.log(tn)