
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
    
    //PRENDO il valore di number direttamente dall'input nell'index
    const inputNumber = document.getElementById("number").value;
    //CONVERTO il valore in entrata dall'utente, in un intero a base decimale
    const userNumber = parseInt(inputNumber, 10);

    //STAMPO l'output nel documento del numero dell'utente
    const outputUserNumber = document.getElementById("userNumber");
    outputUserNumber.innerHTML = "l'user ha scelto il numero: " + userNumber;

    //GENERO il numero casuale del pc
    const computerNumber = getRandomNumber();

    //STAMPO l'output nel documento del numero del PC
    const outputNpcNumber = document.getElementById("npcNumber");
    outputNpcNumber.innerHTML = "il PC ha scelto il numero: " + computerNumber;

    //PRENDO il valore del campo di testo id="odd-or-even" in cui è specificato se l'utente sceglie pari o dispari
    const choiceOddOrEven = document.getElementById("odd-or-even").value;
    
    //STAMPO il valore scelto dall'utente
    const outputOddOrEven = document.getElementById("choice");
    outputOddOrEven.innerHTML = "l'utente ha scelto: " + choiceOddOrEven;
    
    //Assegno alla variabile sum, il valore risultante dalla funzione sumNumber (parametro 1 + parametro 2)
    const sum = sumNumber(userNumber, computerNumber);

    //ASSEGNO alla variabile , il valore derivante dalla funzione isEvenOrOdd che quindi sarà "pari" o "dispari"
    const oddOrEven = isEvenOrOdd(sum);
    
    //ASSEGNO alla variabile, il valore risultato dalla funzione sumNumber()
    const outputSum = document.getElementById("sum");
    outputSum.innerHTML = "La somma tra i due numeri è: " + sum;

    //ASSEGNO alla variabile, l'elemento con id="output" per poi stamparci il risultat nell'if
    const outputResult = document.getElementById("output");


    if(choiceOddOrEven === oddOrEven){
        console.log("HAI VINTO");
        outputResult.innerHTML= "HAI VINTO";
    } else {
        console.log("HAI PERSO");  
        outputResult.innerHTML= "HAI PERSO";
    }

});




//---------------------------------------------------------------------------------------------------------------------------
//                                              FUNZIONI

function getRandomNumber() {
    const randomNumber = (Math.floor(Math.random() * (5 - 1 + 1) + 1));

    return randomNumber;
}

function sumNumber(num1, num2) {
    const sum = num1 + num2;
    return sum;
}

function isEvenOrOdd(number) {
    let oddOrEven;

    if (number % 2 === 0) {
        oddOrEven = "pari";
    } else {
        oddOrEven = "dispari";
    }

    return oddOrEven;
}




