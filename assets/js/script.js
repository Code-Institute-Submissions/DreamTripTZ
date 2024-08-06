import quizData from './quizData.js';

// Variables
const img = document.getElementById('img');
const startButton = document.getElementById('start-button');
const paragraph = document.getElementById('paragraph');
const choices = document.getElementById('choices');

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

function generateButtons() {
    for (const category in quizData) {
        choices.innerHTML += `<button>${category}</button>`;
    }
    const buttons = document.getElementById('choices').getElementsByTagName('button');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', generateButtons);
    }
}

// Inits &  Event Listeners
init(); 