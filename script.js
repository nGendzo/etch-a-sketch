const gridDiv = document.querySelector('.grid-container');
const eraseButton = document.querySelector('#erase-button')
const gridDivForDim = document.getElementById('grid-id');
let userChoice = 48;

let squareSize = (gridDivForDim.offsetWidth - 4) / userChoice;

createCanvas(userChoice);

eraseButton.addEventListener('click', () => {
    eachSquare.forEach((eachSquare) => {
        eachSquare.setAttribute('style', `background-color: white; width: ${squareSize}px; height: ${squareSize}px;`)
    })
});

function createCanvas(userChoice){
    for (i = 1; i <= userChoice * userChoice; i++){
        const newGridSquare = document.createElement('div');
        gridDiv.appendChild(newGridSquare);
        newGridSquare.setAttribute('style', `background-color: white; width: ${squareSize}px; height: ${squareSize}px;`)
        newGridSquare.classList.add('gridSquare');
    };
};

const eachSquare = document.querySelectorAll('.gridSquare');

eachSquare.forEach((eachSquare) => {
    eachSquare.addEventListener('mouseover', () => {
        eachSquare.setAttribute('style', `background-color: black; width: ${squareSize}px; height: ${squareSize}px;`);
    });
});