const gridDiv = document.querySelector('.grid-container');
const askSizeButton = document.querySelector('#ask-size-button');
const gridDivForDim = document.getElementById('grid-id');
let userChoice = 16;
const squareSize = (gridDivForDim.offsetWidth - 4) / userChoice;
console.log(squareSize);

createCanvas(userChoice);

askSizeButton.addEventListener('click', () => {
    userChoice = prompt("How many squares per side?");
    if (userChoice <= 64){
        createCanvas(userChoice);
    }else alert("Please enter a number below or equal to 64!");
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