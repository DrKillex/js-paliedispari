// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

'use strict';

function palindroma(lista1, lista2){
    let conferma = false;
    for (let i = 0; i < lista1.length; i++){
        console.log(`lista 1 posizione ${i} ${lista1[i]}`);
        console.log(`lista 2 posizione ${i} ${lista2[i]}`);
        if (lista1[i] === lista2[i]){
            conferma = true;
        } else {
            conferma = false
        };
    };
    return conferma;
};

const parola = prompt('scrivi una parola').toLowerCase();

let spellingReverse = [];

for (let i = parola.length - 1; i >= 0; i--){
    spellingReverse.push(parola[i]);
};

const conferma = palindroma(parola, spellingReverse);

if (conferma === true) {
    alert('la parola è palindroma')
} else {
    alert('la parola è non palindroma')
};

console.log({parola});
console.log({spellingReverse});
console.log({conferma});
