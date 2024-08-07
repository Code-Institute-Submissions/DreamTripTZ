import quizData from './quizData.js';

// Variables
const img = document.getElementById('img');
const startButton = document.getElementById('start-button');
const paragraph = document.getElementById('paragraph');
const choices = document.getElementById('choices');

let userInput = [];
let selectedChoice1, selectedChoice2, selectedChoice3;

// Methods
function init() {
    img.src = "assets/images/flag-tanzania.jpg";
    img.alt = "Tanzania flag grunge"

    startButton.addEventListener('click', start)
}

function start() {
    img.src = "assets/images/airplane-clouds.jpg";
    img.alt = "Airplane on sky during golden hour";

    paragraph.innerHTML = "What's the ideal purpose for your Trip?";    

    startButton.style.display = 'none';
    generateButtons();
}

function generateButtons(value1, value2, value3) {
    choices.innerHTML = '';

    // Dynamically updates the content of the choices and paragraph elements  
    if (userInput.length === 1) {
        for (const category in quizData[value1].options) {
            choices.innerHTML += `<button>${category}</button>`;
        }
        paragraph.innerHTML = quizData[value1].question;

        img.src = quizData[value1].image.src;
        img.alt = quizData[value1].image.alt;

    } else if (userInput.length === 2) {
        for (const category in quizData[value1].options[value2].options) {
            choices.innerHTML += `<button>${category}</button>`;
        }
        paragraph.innerHTML = quizData[value1].options[value2].question;

        img.src = quizData[value1].options[value2].image.src;
        img.alt = quizData[value1].options[value2].image.alt;

    } else if (userInput.length === 3) {
        getResult(value1, value2, value3);
    }
    else {
        for (const category in quizData) {
            choices.innerHTML += `<button>${category}</button>`;
        }
    }
    const buttons = document.getElementById('choices').getElementsByTagName('button');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', getNewButtons);
    }
}

function getNewButtons(event) {
    event = this;
    const data = this.innerHTML;
    userInput.push(data);

    switch (userInput.length) {
        case 1:
            selectedChoice1 = userInput[0];
            break;
        case 2:
            selectedChoice2 = userInput[1];
            break;
        case 3:
            selectedChoice3 = userInput[2];
            break;
        default:
            console.error("getNewButtons: userInput.length is too long");
            break;
    }

    generateButtons(selectedChoice1, selectedChoice2, selectedChoice3)
}

function getResult(value1, value2, value3) {
    const finalChoice = quizData[value1].options[value2].options[value3]
    
    paragraph.innerHTML = finalChoice.answer;

    choices.innerHTML = `<p>${finalChoice.destination}</p>`;
}

// Inits &  Event Listeners
init(); 