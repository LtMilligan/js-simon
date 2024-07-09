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




























function createSquare() {
    let currentElement = document.createElement('div');
    currentElement.classList.add('square');
    return currentElement;
}