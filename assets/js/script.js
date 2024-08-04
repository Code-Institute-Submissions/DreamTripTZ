import quizData from './quizData.js';

// Variables
const img = document.getElementById('img');
const startButton = document.getElementById('start-button');
const paragraph = document.getElementById('paragraph');

// Methods
function init() {
    img.src = "assets/images/flag-tanzania.jpg";
    img.alt = "Tanzania flag grunge"

    startButton.addEventListener('click', start)
}

function start(event) {
    img.src = "assets/images/airplane-clouds.jpg";
    img.alt = "Airplane on sky during golden hour";

    paragraph.innerHTML = "What's the ideal purpose for your Trip?";    
}

// Inits &  Event Listeners
init(); 