"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function playNumberGuessingGame() {
    var minNumber = 1;
    var maxNumber = 100;
    var secretNumber = generateRandomNumber(minNumber, maxNumber);
    var numberOfTries = 0;
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    console.log('Welcome to the Number Guessing Game!');
    console.log("I'm thinking of a number between ".concat(minNumber, " and ").concat(maxNumber, ". Can you guess it?\n"));
    rl.on('line', function (input) {
        var userGuess = parseInt(input, 10);
        if (isNaN(userGuess)) {
            console.log('Please enter a valid number.');
            return;
        }
        numberOfTries++;
        if (userGuess === secretNumber) {
            console.log("Congratulations! You guessed the correct number (".concat(secretNumber, ") in ").concat(numberOfTries, " tries."));
            rl.close();
        }
        else if (userGuess < secretNumber) {
            console.log('Too low. Try again!\n');
        }
        else {
            console.log('Too high. Try again!\n');
        }
    });
}
// Run the game
playNumberGuessingGame();
