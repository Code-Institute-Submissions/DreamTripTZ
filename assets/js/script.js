// Variables
const img = document.getElementById('img');
const startButton = document.getElementById('start-button');
const paragraph = document.getElementById('paragraph');
const choices = document.getElementById('choices');
const logo = document.getElementById('logo');
const quizButton = document.getElementById('quiz-button');
const exploreButton = document.getElementById('explore-button');
const landing = document.getElementById('landing');
const quizContainer = document.getElementById('quiz-container');
const filterContainer = document.getElementById('filter-container');
const input = document.getElementById("search_here");

let userInput = [];
let selectedChoice1, selectedChoice2, selectedChoice3;

// Methods
function init() {
    startButton.addEventListener('click', start);
    logo.addEventListener('click', home);
    quizButton.addEventListener('click', reveal);
    exploreButton.addEventListener('click', reveal);
    input.addEventListener("keyup", search);
    // https://www.w3schools.com/jsref/prop_style_cursor.asp
    exploreButton.style.cursor = 'pointer';
    quizButton.style.cursor = 'pointer';

}

function start() {
    img.src = "assets/images/airplane-clouds.jpg";
    img.alt = "Airplane on sky during golden hour";

    paragraph.innerHTML = "What's the ideal purpose for your Trip?";    

    startButton.style.display = 'none';
    generateButtons();
}

function home() {
    window.location.href = "";
} 

function reveal(event) {
    const elementId = event.target.id;

    switch (elementId) {
        case 'quiz-button':
            landing.classList.add('hide');
            quizContainer.classList.remove('hide');
            break;
        case 'explore-button':
            landing.classList.add('hide');
            filterContainer.classList.remove('hide');
    }
}

function search() {
    let destinations = document.querySelectorAll(".destination");
    destinations.forEach(destination => {
        if (destination.innerText.includes(input.value)) {
            destination.classList.remove("hide");
        }
        if (input.value == "") {
            destination.classList.add("hide");
        }
    });
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

    // Restart button
    userInput = [];
    startButton.style.display = '';
    startButton.innerHTML = "Test again!";
}

// Inits &  Event Listeners
init();     