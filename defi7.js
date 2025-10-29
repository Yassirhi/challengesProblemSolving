const prompt = require("prompt-sync")();
let v=prompt("entrer le mot : ")
let inv = v.split('').reverse().join('');
if (v===inv){
    console.log(v+"->"+ "True")
}else{
    console.log(v+"->"+ "False")
}