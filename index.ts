import * as readline from 'readline';

class Todo {
  private tasks: string[];

  constructor() {
    this.tasks = [];
  }

  addTask(task: string): void {
    this.tasks.push(task);
    console.log(`Task "${task}" added to the Todo list.`);
  }

  markTaskAsComplete(taskIndex: number): void {
    if (taskIndex >= 0 && taskIndex < this.tasks.length) {
      const completedTask = this.tasks.splice(taskIndex, 1);
      console.log(`Task "${completedTask}" marked as complete.`);
    } else {
      console.log('Invalid task index.');
    }
  }

  displayTasks(): void {
    if (this.tasks.length === 0) {
      console.log('No tasks in the Todo list.');
    } else {
      console.log('\nTodo List:');
      this.tasks.forEach((task, index) => {
        console.log(`${index + 1}. ${task}`);
      });
    }
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Main TodoList program
function runTodoList() {
  const todoList = new Todo();

  console.log('Welcome to the Todo List App!\n');

  function promptUser(): void {
    console.log('Todo List Menu:');
    console.log('1. Add Task');
    console.log('2. Mark Task as Complete');
    console.log('3. View Tasks');
    console.log('4. Exit');

    rl.question('Select an option (1-4): ', (input: string) => {
      const option = parseInt(input, 10);

      switch (option) {
        case 1:
          rl.question('Enter the task to add: ', (task: string) => {
            todoList.addTask(task);
            promptUser();
          });
          break;
        case 2:
          rl.question('Enter the task index to mark as complete: ', (indexInput: string) => {
            const taskIndex = parseInt(indexInput, 10) - 1;
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
