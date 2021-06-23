

var playAgain = confirm("Do you want to play again?")

var scoreBoard = alert("");

var computerOptions = ["R", "S", "P"];

var wins = 0;
var tie = 0;
var losses = 0;

function promptUserInput() {
    var userPrompt = prompt("Please select R, P, or S.");
    return userPrompt;
}

function randomGenerator() {
    var numIndex = Math.floor(Math.random() * 3);
    var computerChoice = computerOptions[numIndex];
    return computerChoice;
}

function checkUserInput(input) {
    return input === computerOptions;
}

// var userChoice = userPrompt.toUpperCase();

function playGame() {
    var userChoice = promptUserInput();
    var computerChoice = randomGenerator();
    console.log(userChoice);
    console.log(computerChoice);
    compareInputs(userChoice, computerChoice); 
}

function compareInputs(userChoice, computerChoice) {
    // Compare the user choice against the computer choice. 
}

playGame();