/* jshint esversion: 11 */

// Variables
// Get references to DOM elements for later manipulation
const img = document.getElementById('img');
const startButton = document.getElementById('start-button');
const paragraph = document.getElementById('paragraph');
const choices = document.getElementById('choices');
const logo = document.getElementById('logo');
const quizButton = document.getElementById('quiz-button');
const quizBtReserved = document.getElementById('quiz-bt');
const quizMenuBtReserverd = document.getElementById('quizMenu-bt');
const exploreButton = document.getElementById('explore-button');
const filterBtReserved = document.getElementById('filter-bt');
const filterMenuBtReserved = document.getElementById('filterMenu-bt');
const landing = document.getElementById('landing');
const quizContainer = document.getElementById('quiz-container');
const filterContainer = document.getElementById('filter-container');
const goToFilter = document.getElementById('show-filter');
const input = document.getElementById("search_here");
const inputZanzibar = document.getElementById('zanzibar');
const inputSerengeti = document.getElementById('serengeti');
const allOptions = document.getElementById('all-options');
const resetOptions = document.getElementById('reset');
const goUpButton = document.getElementById('up-button');
const inputRelaxation = document.getElementById('relaxation');
const inputEducation = document.getElementById('education');
const inputAdventure = document.getElementById('adventure');

// Array to store user input choices
let userInput = [];
let selectedChoice1, selectedChoice2, selectedChoice3;

// Methods

// Initialize event listeners
function init() {
    // Add event listeners to buttons and inputs
    startButton.addEventListener('click', start);
    logo.addEventListener('click', home);
    quizButton.addEventListener('click', reveal);
    quizBtReserved.addEventListener('click', reveal);
    quizMenuBtReserverd.addEventListener('click', reveal);
    exploreButton.addEventListener('click', reveal);
    filterBtReserved.addEventListener('click', reveal);
    filterMenuBtReserved.addEventListener('click', reveal);
    goToFilter.addEventListener('click', reveal);
    input.addEventListener("keyup", search);
    inputSerengeti.addEventListener('click', insertValue);
    inputRelaxation.addEventListener('click', insertValue);
    inputEducation.addEventListener('click', insertValue);
    inputAdventure.addEventListener('click', insertValue);
    inputZanzibar.addEventListener('click', insertValue);
    allOptions.addEventListener('click', insertValue);
    resetOptions.addEventListener('click', insertValue);
    goUpButton.addEventListener('click', goUp);
}

// Start the quiz by changing the image, paragraph, and hiding the start button
function start() {
    img.src = "assets/images/airplane-clouds.jpg";
    img.alt = "Airplane on sky during golden hour";

    paragraph.innerHTML = "What's the ideal purpose for your Trip?";

    startButton.style.display = 'none';
    goToFilter.classList.add('hide');
    generateButtons();
}

// Navigate to the home page
function home() {
    window.location.href = "";
}

// Reveal different sections based on the clicked button
function reveal(event) {
    event.preventDefault();
    const elementId = event.target.id;

    switch (elementId) {
        case 'quiz-button':
        case 'quiz-bt':
        case 'quizMenu-bt':
            landing.classList.add('hide');
            filterContainer.classList.add('hide');
            quizContainer.classList.remove('hide');
            break;
        case 'explore-button':
        case 'filter-bt':
        case 'filterMenu-bt':
        case 'show-filter':
            landing.classList.add('hide');
            quizContainer.classList.add('hide');
            filterContainer.classList.remove('hide');
            break;
    }
}

// Filter destinations based on search input
function search() {
    let destinations = document.querySelectorAll(".destination");
    const inputValue = input.value.trim().toLowerCase();

    // If inputValue is empty, hide all destinations
    if (inputValue === "") {
        destinations.forEach(destination => {
            destination.classList.add("hide");
        });
        return;
    }

    destinations.forEach(destination => {
        const destinationText = destination.textContent.toLowerCase();

        if (destination.classList.contains(inputValue) || inputValue.includes("all") || destinationText.includes(inputValue)) {
            destination.classList.remove("hide");
        } else if (inputValue.value == "") {
            destination.classList.add("hide");
        } else {
            destination.classList.add("hide");
        }
    });
}

// Insert predefined values into the search input and trigger search function
function insertValue(event) {
    const elementId = event.target.id;

    switch (elementId) {
        case 'relaxation':
            input.value = 'relaxation';
            break;
        case 'education':
            input.value = 'education';
            break;
        case 'adventure':
            input.value = 'adventure';
            break;
        case 'zanzibar':
            input.value = 'zanzibar';
            break;
        case 'serengeti':
            input.value = 'serengeti';
            break;
        case 'all-options':
            input.value = 'all';
            break;
        default:
            input.value = '';
            break;
    }
    search();
}

// Show or hide the "Go Up" button based on scroll position
function scrollFunction() {
    if (window.scrollY > 1000) {
        goUpButton.classList.remove('hide');
    } else {
        goUpButton.classList.add('hide');
    }
}

// Smooth scroll to the top of the page
function goUp() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Generate buttons based on user input and update the quiz interface
function generateButtons(value1, value2, value3) {
    choices.innerHTML = '';

    // Dynamically updates the content of the choices and paragraph elements  
    if (userInput.length === 1) {
        for (const category in quizData[value1].options) {
            if (quizData.hasOwnProperty(category))
                choices.innerHTML += `<button>${category}</button>`;
        }
        paragraph.innerHTML = quizData[value1].question;

        img.src = quizData[value1].image.src;
        img.alt = quizData[value1].image.alt;

    } else if (userInput.length === 2) {
        for (const category in quizData[value1].options[value2].options) {
            if (quizData.hasOwnProperty(category))
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
            if (quizData.hasOwnProperty(category))
                choices.innerHTML += `<button>${category}</button>`;
        }
    }
    const buttons = document.getElementById('choices').getElementsByTagName('button');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', getNewButtons);
    }
}

// Handle button clicks to update user input and generate new buttons
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

    generateButtons(selectedChoice1, selectedChoice2, selectedChoice3);
}

// Display the final result based on user choices
function getResult(value1, value2, value3) {
    const finalChoice = quizData[value1].options[value2].options[value3];

    paragraph.innerHTML = finalChoice.answer;

    choices.innerHTML = `<p><a href="${finalChoice.link}" target="_blank">${finalChoice.destination}</a></p>`;

    // Restart button
    userInput = [];
    startButton.style.display = '';
    startButton.innerHTML = "Test again!";

    // Go to Filter button
    goToFilter.classList.remove('hide');
}

// Initialize the application
init();
// Add scroll event listener
window.onscroll = scrollFunction;
