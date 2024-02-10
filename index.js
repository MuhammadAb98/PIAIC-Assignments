"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var TextAnalyzer = /** @class */ (function () {
    function TextAnalyzer() {
        this.inputText = '';
    }
    TextAnalyzer.prototype.setInputText = function (text) {
        this.inputText = text;
    };
    TextAnalyzer.prototype.countWords = function () {
        var words = this.inputText.split(/\s+/).filter(function (word) { return word.length > 0; });
        return words.length;
    };
    TextAnalyzer.prototype.countCharacters = function () {
        return this.inputText.length;
    };
    return TextAnalyzer;
}());
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Main Text Analyzer program
function runTextAnalyzer() {
    var textAnalyzer = new TextAnalyzer();
    console.log('Welcome to the Text Analyzer!\n');
    rl.question('Enter a text to analyze: ', function (input) {
        textAnalyzer.setInputText(input);
        console.log('\nAnalysis Results:');
        console.log("Words: ".concat(textAnalyzer.countWords()));
        console.log("Characters: ".concat(textAnalyzer.countCharacters()));
        rl.close();
    });
}
// Run the Text Analyzer program
runTextAnalyzer();
