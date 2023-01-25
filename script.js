const gridDiv = document.querySelector('.grid-container');
const askSizeButton = document.querySelector('#ask-size-button');
const gridDivForDim = document.getElementById('grid-id');
let userChoice = 16;

createCanvas(userChoice);

askSizeButton.addEventListener('click', () => {
    userChoice = prompt("How many squares per side?");
    createCanvas(userChoice);
});

function createCanvas(userChoice){
    for (i = 1; i <= userChoice * userChoice; i++){
        const newGridSquare = document.createElement('div');
        gridDiv.appendChild(newGridSquare);
        newGridSquare.classList.toggle('gridSquare');
    }
}

const eachSquare = document.querySelectorAll('.gridSquare');

eachSquare.forEach((eachSquare) => {
    eachSquare.addEventListener('mouseover', () => {
        eachSquare.classList.add('afterhover');
    });
});