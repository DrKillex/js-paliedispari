// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

'use strict,'

let pariDispari;

let numeroUtente= 0;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function calcoloWinner(num1, num2) {
    const addizione = num1 + num2;
    if (addizione % 2 === 0){
        return 'pari'
    } else {
        return 'dispari'
    }
};

while (pariDispari !== 'pari' && pariDispari !== 'dispari'){
    pariDispari = prompt('scegli: "pari" o "dispari"').toLowerCase();
};

while (numeroUtente > 5 || numeroUtente < 1){
    numeroUtente = Number(prompt('scegli un numero da 1 a 5'));
};

console.log(pariDispari)
console.log(numeroUtente)

const numeroCpu = getRandomInt(1, 5);
const winner = calcoloWinner(numeroUtente, numeroCpu)

console.log(numeroCpu)
console.log(winner)

if (pariDispari === winner){
    alert(`hai vinto con ${numeroUtente} + ${numeroCpu} scegliendo ${pariDispari}`)
} else {
    alert(`hai perso con ${numeroUtente} + ${numeroCpu} scegliendo ${pariDispari}`)
}
