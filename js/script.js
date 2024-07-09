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
























function createSquare() {
    let currentElement = document.createElement('div');
    currentElement.classList.add('square');
    return currentElement;
}