
var computerOptions = ["R", "S", "P"];

var wins = 0;
var tie = 0;
var losses = 0;

function promptUserInput() {
    var userPrompt = prompt("Please select R, P, or S.");
    var fixPrompt = userPrompt.toUpperCase();
    return fixPrompt;
}

function randomGenerator() {
    var numIndex = Math.floor(Math.random() * computerOptions.length);
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

function compareInputs(user, computer) {
    // Compare the user choice against the computer choice. 
    var winner = ""
    if(user === computer) {
        alert('You tied!');
        tie++;
    } else if(user === computerOptions[0] && computer === computerOptions[1]) {
        alert('You won!');
        wins++;
    } else if(user === computerOptions[0] && computer === computerOptions[2]) {
        alert('You lost!');
        losses++;
    } else if(user === computerOptions[1] && computer === computerOptions[0]) {
        alert('You lost!');
        losses++;
    } else if(user === computerOptions[1] && computer === computerOptions[2]) {
        alert('You won!');
        wins++;
    } else if(user === computerOptions[2] && computer === computerOptions[0]) {
        alert('You won!');
        wins++;
    } else if(user === computerOptions[2] && computer === computerOptions[1]) {
        alert('You lost!');
        losses++
    } else {
        alert("Did You select R, P, or S?")
    }
    return 
}

playGame();

var scoreBoard = alert(`Wins: ${wins}  losses: ${losses}  ties: ${tie}`);

var playAgain = confirm("Do you want to play again?")


if(playAgain) {
    playGame();
}