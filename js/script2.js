
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
    const choiceOddOrEven = prompt("pari o dispari");
    let odd;
    const oddOrEven = isEvenOrOdd(sumNumber(userNumber, computerNumber));

    //controllo che la scelta dell'utente sia pari (in questo caso assegno a winner il valore true)
    if(choiceOddOrEven === "pari"){
        odd = true;
    } else if (choiceOddOrEven === "dispari"){
        odd = false;
    } else {
        console.log("errore non hai digitato ne pari ne dispari, ricarica la pagina");
    }

    console.log("Hai scelto " + choiceOddOrEven);
    
    console.log("L'utente ha scelto il numero: " + userNumber);
    console.log("Il pc ha scelto il numero " + computerNumber);
    
    console.log("la somma dei due numeri è: " + sumNumber(userNumber, computerNumber));

    if(oddOrEven === odd){
        console.log("ha vinto l'utente");
    } else {
        console.log("ha vinto il computer");
    }
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
    let odd;

    if (number % 2 === 0) {
        odd = true;
    } else {
        odd = false
    }

    return odd;
}




