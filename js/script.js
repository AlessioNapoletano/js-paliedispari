/*
Palidroma
    Chiedere all’utente di inserire una parola:
    Creare una funzione per capire se la parola inserita è palindroma;

Pari e Dispari
    L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
    Generiamo un numero random (sempre da 1 a 5) per il computer attraverso una funzione.
    Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari attraverso un'altra funzione
    Dichiariamo chi ha vinto.

 */

const inputString = prompt("Inserisci una parola");
isPalindrome(inputString);


function isPalindrome(stringInput) {
    const length = stringInput.length;

    const array = [];
    const arrayInverse = [];
    let palindrome = false;

    //console.log("la parola inserità è: " + stringInput);
    //console.log("lunghezza parola: " + length);

    //Prendo l'array e lo riempio, lettera per lettera con i caratteri provenienti dalla stringa in input
    for (let i = 0; i < length; i++) {
        array.push(stringInput.substring(i, i + 1));
    }

    //console.log(array);

    //Prendo l'array e lo riempio, lettera per lettera con i caratteri provenienti dalla stringa in input, ma al contrario
    for (let i = length; i > 0; i--) {
        arrayInverse.push(stringInput.substring(i, i - 1));
    }

    //console.log(arrayInverse);

    if (array.length % 2 === 0) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === arrayInverse[i]) {
                palindrome = true;
                console.log(palindrome);
            } else {
                palindrome = false;
            }
        }

        if (palindrome) {
            console.log("la parola è palindroma");
        } else {
            console.log("la parola non è palindroma");
        }
    } else {
        console.log("una parola dispari non può essere palindroma")
    }
}