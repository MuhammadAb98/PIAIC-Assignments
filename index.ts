import * as readline from 'readline';

function generateRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function playNumberGuessingGame(): void {
  const minNumber = 1;
  const maxNumber = 100;
  const secretNumber = generateRandomNumber(minNumber, maxNumber);
  let numberOfTries = 0;

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  console.log('Welcome to the Number Guessing Game!');
  console.log(`I'm thinking of a number between ${minNumber} and ${maxNumber}. Can you guess it?\n`);

  rl.on('line', (input: string) => {
    const userGuess = parseInt(input, 10);

    if (isNaN(userGuess)) {
      console.log('Please enter a valid number.');
      return;
    }

    numberOfTries++;

    if (userGuess === secretNumber) {
      console.log(`Congratulations! You guessed the correct number (${secretNumber}) in ${numberOfTries} tries.`);
      rl.close();
    } else if (userGuess < secretNumber) {
      console.log('Too low. Try again!\n');
    } else {
      console.log('Too high. Try again!\n');
    }
  });
}

playNumberGuessingGame();
