"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var Student = /** @class */ (function () {
    function Student(name, grade) {
        Student.studentCount++;
        this.id = Student.studentCount;
        this.name = name;
        this.grade = grade;
    }
    Student.prototype.getDetails = function () {
        return "ID: ".concat(this.id, ", Name: ").concat(this.name, ", Grade: ").concat(this.grade);
    };
    Student.studentCount = 0;
    return Student;
}());
var StudentManagementSystem = /** @class */ (function () {
    function StudentManagementSystem() {
        this.students = [];
    }
    StudentManagementSystem.prototype.addStudent = function (name, grade) {
        var newStudent = new Student(name, grade);
        this.students.push(newStudent);
        console.log("Student added: ".concat(newStudent.getDetails()));
    };
    StudentManagementSystem.prototype.viewStudentDetails = function (studentId) {
        var student = this.findStudentById(studentId);
        if (student) {
            console.log("Student Details: ".concat(student.getDetails()));
        }
        else {
            console.log('Student not found.');
        }
    };
    StudentManagementSystem.prototype.listAllStudents = function () {
        if (this.students.length === 0) {
            console.log('No students in the system.');
        }
        else {
            console.log('\nAll Students:');
            this.students.forEach(function (student) {
                console.log(student.getDetails());
            });
        }
    };
    StudentManagementSystem.prototype.findStudentById = function (studentId) {
        return this.students.find(function (student) { return student.id === studentId; });
    };
    return StudentManagementSystem;
}());
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Main Student Management System program
function runStudentManagementSystem() {
    var studentSystem = new StudentManagementSystem();
    console.log('Welcome to the Student Management System!\n');
    function promptUser() {
        console.log('Student Management Menu:');
        console.log('1. Add Student');
        console.log('2. View Student Details');
        console.log('3. List All Students');
        console.log('4. Exit');
        rl.question('Select an option (1-4): ', function (input) {
            var option = parseInt(input, 10);
            switch (option) {
                case 1:
                    rl.question('Enter the student name: ', function (name) {
                        rl.question('Enter the student grade: ', function (grade) {
                            studentSystem.addStudent(name, grade);
                            promptUser();
                        });
                    });
                    break;
                case 2:
                    rl.question('Enter the student ID to view details: ', function (idInput) {
                        var studentId = parseInt(idInput, 10);
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
