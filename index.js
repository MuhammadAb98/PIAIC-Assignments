import inquirer from "inquirer";
import chalk from "chalk";
// Function to perform arithmetic operations
const performOperation = (num1, num2, operator) => {
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
        default:
            throw new Error("Invalid operator");
    }
};
// Function to display result with colored output
const displayResult = (result, operator) => {
    let color = chalk.greenBright;
    switch (operator) {
        case "+":
            color = chalk.green;
            break;
        case "-":
            color = chalk.red;
            break;
        case "*":
            color = chalk.yellow;
            break;
        case "/":
            color = chalk.blue;
            break;
    }
    console.log(color(`Result: ${result}`));
};
// Main calculator function
const calculator = async () => {
    const questions = [
        {
            type: "input",
            name: "num1",
            message: "Enter the first number:",
            validate: (value) => !isNaN(Number(value)) || "Please enter a valid number",
        },
        {
            type: "input",
            name: "num2",
            message: "Enter the second number:",
            validate: (value) => !isNaN(Number(value)) || "Please enter a valid number",
        },
        {
            type: "list",
            name: "operator",
            message: "Select an operation:",
            choices: ["+", "-", "*", "/"],
            // loop: true,
        },
    ];
    try {
        inquirer
            .prompt(questions)
            .then((answers) => {
            const { num1, num2, operator } = answers;
            // console.log("answer", answers);
            const result = performOperation(parseFloat(num1), parseFloat(num2), operator);
            displayResult(result, operator);
            console.log(result);
        })
            .catch((err) => console.error(chalk.yellowBright("Error:", err.message)));
    }
    catch (error) {
        console.error(chalk.red("Error:", error.message));
    }
};
// Run the calculator
calculator();
