/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
// for (let i = 0; i > 5; i++) {
//     console.log(i);
// }

// 1 ciclo for da 0 a 5
// 2 i deve essere maggiore di 5
// 3 no


// // ESERCIZIO 2
// function addIfEven(num) {
//     if (num % 2 = 0) {
//         return num + 5;
//     }
//     return num;
// }

// 1 funzione che controlla se l'imput num e' un numero
// 2 ci vanno 3 = e non uno solo
// 3


// ESERCIZIO 3
// function loopToFive() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//     }

// }
// loopToFive();

// 1 la funzione fa un loop da 0 a 5 
// 2 gli errori sono: il ; dopo let i e dopo i < 5 e va richiamata la funzione fuori
// 3


// ESERCIZIO 4 (suggerimento: ci sono 8 errori)

function displayEvenNumbers() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length -1; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
        
    }
    console.log(evenNumbers);
    return evenNumbers;
}
displayEvenNumbers(); 

// 1 funzione che mostra i numeri pari
// 2 i++ senza ; if con === mettere in const numbers if numbers deve avere [i] ed il push deve essere :  evenNumbers.push(numbers[i]);  il return dopo 2 graffe ; dopo la condizione if
// 3