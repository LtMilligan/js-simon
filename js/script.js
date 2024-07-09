const gridFirst = document.getElementById('gridFirst')
const gridSecond = document.getElementById('gridSecond')
const punteggio = document.getElementById('punteggio')

let randomNumber = []

// Genero randomicamente 5 numeri

for (let i = 0; i < 5; i++) {
    tempRandom = Math.floor(Math.random() * 100 + 1)
    randomNumber.push(tempRandom)
    // Mostro a video i numeri generati
    let gridFirstSquare = createSquare();
    gridFirstSquare.innerText = tempRandom;
    gridFirst.append(gridFirstSquare);
}

// Imposto un timeout di 4500ms per la rimozione a video dei numeri

setTimeout(function () {
    document.getElementById('gridFirst').classList.add('d-none')
}, 4500)

let userNumbers = []

//  Imposto un timeout di 5000ms e chiedo all'utente di inserire i numeri che ha visualizzato

setTimeout(function () {
    for (let j = 0; j < 5; j++) {
        tempUser = parseInt(prompt(`Inserisci il ${j + 1}° numero che ricordi`))
        while (userNumbers.includes(tempUser)) {
            tempUser = parseInt(prompt(`Per favore, inserisci un altro numero. Non puoi inserire lo stesso numero più volte.`))
        }
        while (tempUser < 1 || tempUser > 100) {
            tempUser = parseInt(prompt(`Per favore, inserisci un numero che sia compreso tra 1 e 100`))
        }
        while (isNaN(tempUser)) {
            tempUser = parseInt(prompt(`Per favore, inserisci solo cifre numeriche`))
        }
        userNumbers.push(tempUser)
    }
    console.log(userNumbers)
    let score = 0

// Confronto i numeri inseriti dall'utente con quelli generati randomicamente

// Restituisco a video i numeri correntti che l'utente ha indovinato

    userNumbers.forEach(userNumber => {
        let gridSecondSquare = createSquare()
        if (randomNumber.includes(userNumber)) {
            gridSecondSquare.innerText = userNumber
            gridSecond.append(gridSecondSquare)
            gridSecondSquare.classList.add('winSquare')
            score++
        }else {
            gridSecondSquare.innerText = userNumber
            gridSecond.append(gridSecondSquare)
            gridSecondSquare.classList.add('loseSquare')
        }
    })
    document.getElementById('gridFirst').classList.remove('d-none')
    if (score === 5) {
        punteggio.innerText = (`Sei un drago, hai totalizzato ${score} su 5. La partita perfetta è tua!!`)
    }else if (score > 0 && score < 5) {
        punteggio.innerText = (`Complimenti, hai totalizzato ${score} su 5. Concentrati e vedrai che raggiungerai il punteggio perfetto!`)
    }else {
        punteggio.innerText = (`Mi dispiace, hai totalizzato ${score} su 5. Esercitati di più per migliorare.`)
    }
    
}, 5000)

console.log(randomNumber)


function createSquare() {
    let currentElement = document.createElement('div');
    currentElement.classList.add('square');
    return currentElement;
}