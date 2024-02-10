import * as readline from 'readline';

class TextAnalyzer {
  private inputText: string;

  constructor() {
    this.inputText = '';
  }

  setInputText(text: string): void {
    this.inputText = text;
  }

  countWords(): number {
    const words = this.inputText.split(/\s+/).filter(word => word.length > 0);
    return words.length;
  }

  countCharacters(): number {
    return this.inputText.length;
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Main Text Analyzer program
function runTextAnalyzer() {
  const textAnalyzer = new TextAnalyzer();

  console.log('Welcome to the Text Analyzer!\n');

  rl.question('Enter a text to analyze: ', (input: string) => {
    textAnalyzer.setInputText(input);

    console.log('\nAnalysis Results:');
    console.log(`Words: ${textAnalyzer.countWords()}`);
    console.log(`Characters: ${textAnalyzer.countCharacters()}`);

    rl.close();
  });
}

// Run the Text Analyzer program
runTextAnalyzer();
