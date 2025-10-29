const prompt = require("prompt-sync")();
let t=[1,2,4,5,6,7,8]
for (let i = 0; i < t.length-1; i++) {
    if(t[i+1]!=t[i]+1){console.log(t[i]+1)}
}
