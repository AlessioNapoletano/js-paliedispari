/*
Palidroma
    Chiedere all’utente di inserire una parola:
    Creare una funzione per capire se la parola inserita è palindroma;


 */

const button = document.querySelector("a.btn");

button.addEventListener("click", function () {
    const inputString = document.getElementById("word").value;
    isPalindrome(inputString);
});



function isPalindrome(stringInput) {
    const length = stringInput.length;

    const array = [];
    const arrayInverse = [];
    let palindrome = false;

    //console.log("la parola inserità è: " + stringInput);
    //console.log("lunghezza parola: " + length);

    //Prendo l'array e lo riempio, lettera per lettera con i caratteri provenienti dalla stringa in input
    for (let i = 0; i < length; i++) {
        //substring(valore iniziale, valore finale) --> valori da cui iniziare e finire di prendere un dato carattere, nel primo ciclo subtring(0,1), il primo carattere, e cosi via
        array.push(stringInput.substring(i, i + 1));
    }

    //console.log(array);

    //Prendo l'array e lo riempio, lettera per lettera con i caratteri provenienti dalla stringa in input, ma al contrario
    for (let i = length; i > 0; i--) {
        arrayInverse.push(stringInput.substring(i, i - 1));
    }

    //console.log(arrayInverse);

    for (let i = 0; i < array.length; i++) {
        if (array[i] === arrayInverse[i]) {
            palindrome = true;
        } else {
            palindrome = false;
        }
    }

    if (palindrome) {
        console.log("la parola è palindroma");
    } else {
        console.log("la parola non è palindroma");
    }
}

