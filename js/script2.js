
/*
Esercizio 2

Pari e Dispari
    L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
    Generiamo un numero random (sempre da 1 a 5) per il computer attraverso una funzione.
    Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari attraverso un'altra funzione
    Dichiariamo chi ha vinto.


*/
//const inputNumber = parseInt(prompt("inserisci un numero da 1 a 5"));

const button = document.querySelector("button");
button.addEventListener("click", function () {
    const inputNumber = document.getElementById("number").value;
    const userNumber = parseInt(inputNumber);
    const computerNumber = getRandomNumber();

    console.log(userNumber, computerNumber);
    console.log("la somma dei due numeri è: " + sumNumber(userNumber, computerNumber));
    isEvenOrOdd(sumNumber(userNumber, computerNumber));

});







//---------------------------------------------------------------------------------------------------------------------------
//                                              FUNZIONI

function getRandomNumber() {
    const randomNumber = (Math.floor(Math.random() * (5 - 1 + 1) + 1));

    return randomNumber;
}

function sumNumber(userNumber, computerNumber) {
    const sum = userNumber + computerNumber;
    return sum;
}

function isEvenOrOdd(number) {
    if (number % 2 === 0) {
        console.log("il numero è pari");
    } else {
        console.log("il numero è dispari");
    }
}


