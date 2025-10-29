const prompt = require("prompt-sync")();

let t=[1,3,9,2,7,-1,9,8]
let sum=0 
let i=0
while (t[i]>0) {
        sum=sum+t[i]
        i++
}
console.log(sum)