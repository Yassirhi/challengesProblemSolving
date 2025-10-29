const prompt = require("prompt-sync")();

let v=prompt("Entrer la chaine de caractère : ")
let compteur=0;
for (let i = 0; i < v.length; i++) {
    if(v[i]==="e" ||v[i]==="o" ||v[i]==="a" ||v[i]==="u" ||v[i]==="i" ||v[i]==="y" ){
        compteur++
    }
    
}
console.log(compteur)