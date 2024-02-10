import * as readline from 'readline';

class Student {
  private static studentCount: number = 0;

  private id: number;
  private name: string;
  private grade: string;

  constructor(name: string, grade: string) {
    Student.studentCount++;
    this.id = Student.studentCount;
    this.name = name;
    this.grade = grade;
  }

  getDetails(): string {
    return `ID: ${this.id}, Name: ${this.name}, Grade: ${this.grade}`;
  }
}

class StudentManagementSystem {
  private students: Student[];

  constructor() {
    this.students = [];
  }

  addStudent(name: string, grade: string): void {
    const newStudent = new Student(name, grade);
    this.students.push(newStudent);
    console.log(`Student added: ${newStudent.getDetails()}`);
  }

  viewStudentDetails(studentId: number): void {
    const student = this.findStudentById(studentId);
    if (student) {
      console.log(`Student Details: ${student.getDetails()}`);
    } else {
      console.log('Student not found.');
    }
  }

  listAllStudents(): void {
    if (this.students.length === 0) {
      console.log('No students in the system.');
    } else {
      console.log('\nAll Students:');
      this.students.forEach(student => {
        console.log(student.getDetails());
      });
    }
  }

  private findStudentById(studentId: number): Student | undefined {
    return this.students.find(student => student.id === studentId);
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Main Student Management System program
function runStudentManagementSystem() {
  const studentSystem = new StudentManagementSystem();

  console.log('Welcome to the Student Management System!\n');

  function promptUser(): void {
    console.log('Student Management Menu:');
    console.log('1. Add Student');
    console.log('2. View Student Details');
    console.log('3. List All Students');
    console.log('4. Exit');

    rl.question('Select an option (1-4): ', (input: string) => {
      const option = parseInt(input, 10);

      switch (option) {
        case 1:
          rl.question('Enter the student name: ', (name: string) => {
            rl.question('Enter the student grade: ', (grade: string) => {
              studentSystem.addStudent(name, grade);
              promptUser();
            });
          });
          break;
        case 2:
          rl.question('Enter the student ID to view details: ', (idInput: string) => {
            const studentId = parseInt(idInput, 10);
            studentSystem.viewStudentDetails(studentId);
            promptUser();
          });
          break;
        case 3:
          studentSystem.listAllStudents();
          promptUser();
          break;
        case 4:
          console.log('Thank you for using the Student Management System. Goodbye!');
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

// Run the Student Management System program
runStudentManagementSystem();
