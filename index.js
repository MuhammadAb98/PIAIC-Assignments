"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var Todo = /** @class */ (function () {
    function Todo() {
        this.tasks = [];
    }
    Todo.prototype.addTask = function (task) {
        this.tasks.push(task);
        console.log("Task \"".concat(task, "\" added to the Todo list."));
    };
    Todo.prototype.markTaskAsComplete = function (taskIndex) {
        if (taskIndex >= 0 && taskIndex < this.tasks.length) {
            var completedTask = this.tasks.splice(taskIndex, 1);
            console.log("Task \"".concat(completedTask, "\" marked as complete."));
        }
        else {
            console.log('Invalid task index.');
        }
    };
    Todo.prototype.displayTasks = function () {
        if (this.tasks.length === 0) {
            console.log('No tasks in the Todo list.');
        }
        else {
            console.log('\nTodo List:');
            this.tasks.forEach(function (task, index) {
                console.log("".concat(index + 1, ". ").concat(task));
            });
        }
    };
    return Todo;
}());
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Main TodoList program
function runTodoList() {
    var todoList = new Todo();
    console.log('Welcome to the Todo List App!\n');
    function promptUser() {
        console.log('Todo List Menu:');
        console.log('1. Add Task');
        console.log('2. Mark Task as Complete');
        console.log('3. View Tasks');
        console.log('4. Exit');
        rl.question('Select an option (1-4): ', function (input) {
            var option = parseInt(input, 10);
            switch (option) {
                case 1:
                    rl.question('Enter the task to add: ', function (task) {
                        todoList.addTask(task);
                        promptUser();
                    });
                    break;
                case 2:
                    rl.question('Enter the task index to mark as complete: ', function (indexInput) {
                        var taskIndex = parseInt(indexInput, 10) - 1;
                        todoList.markTaskAsComplete(taskIndex);
                        promptUser();
                    });
                    break;
                case 3:
                    todoList.displayTasks();
                    promptUser();
                    break;
                case 4:
                    console.log('Thank you for using the Todo List App. Goodbye!');
                    rl.close();
                    break;
                default:
                    console.log('Invalid option. Please choose a number between 1 and 4.');
                    promptUser();
            }
        });
    }
    promptUser();
}
// Run the TodoList program
runTodoList();
