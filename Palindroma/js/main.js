// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

'use strict';

function palindroma(lista1, lista2){
    let conferma = false;
    for (let i = 0; i < lista1.length; i++){
        if (lista1[i] === lista2[i]){
            conferma = true;
            console.log(conferma)
        } else {
            conferma=false
        }
        return conferma
    };
};

const parola = prompt('scrivi una parola').toLowerCase();

let spelling = [];

let spellingReverse = [];

for (let i = 0; i < parola.length; i++){
    spelling.push(parola[i]);
};

for (let i = parola.length - 1; i >= 0; i--){
    spellingReverse.push(parola[i]);
};

const conferma = palindroma(spelling, spellingReverse)

if (conferma === true) {
    alert('la parola è palindroma')
} else {
    alert('la parola è non palindroma')
};

console.log(spelling)
console.log(spellingReverse)
console.log(conferma)
