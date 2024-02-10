class Quiz {
  private questions: string[];
  private answers: string[];

  constructor() {
    this.questions = ["Question 1?", "Question 2?", "Question 3?"];
    this.answers = ["Answer 1", "Answer 2", "Answer 3"];
  }

  startQuiz(): void {
    console.log("Welcome to the Quiz!");

    for (let i = 0; i < this.questions.length; i++) {
      console.log(`\n${this.questions[i]}`);
      const userAnswer = prompt("Your answer: ");

      if (userAnswer === this.answers[i]) {
        console.log("Correct!");
      } else {
        console.log(`Incorrect! The correct answer is: ${this.answers[i]}`);
      }
    }

    console.log("\nQuiz completed. Goodbye!");
  }
}

// Run the Quiz
const quiz = new Quiz();
quiz.startQuiz();
