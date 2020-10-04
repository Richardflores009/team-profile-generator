const fs = require('fs')
const inquirer = require('inquirer')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')


const employeeManager = () => {
    return inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter your name");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Enter your employee id",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter your employee id");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Enter your email address: ",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter your email address");
            return false;
          }
        },
      }, 
      {
        type: "input",
        name: "officenum",
        message: "Enter your office number: ",
        validate: (officeInput) => {
          if (officeInput) {
            return true;
          } else {
            console.log("Please enter your office number");
            return false;
          }
        },
      }, 
    ])
    .then(({ name, id, email, officenum}) => {
        const manager = new Manager(name, id, email, officenum)
        console.log(manager)
    })
  };
  

  employeeManager()

// var allEmployees = []

// var firstName = 'bob'
// var fistEmail = 'email'
// var firstId = 4
// var specific = 59
// var specific2 = 'richardflores009'
// var manager = new Manager(firstName, firstId, fistEmail, specific)
// var intern = new Intern(firstName, firstId, fistEmail, specific2)
// var engineer = new Engineer(firstName, firstId, fistEmail, specific2)
// // firstEmployee.getRole = () => {return 'Manager'}
// // console.log(firstEmployee.getRole(), firstEmployee.name)
// // allEmployees.push(firstEmployee)

// console.log(intern.name, intern.id)
// console.log('intern: ', intern.getRole(), 'manager:', manager.getRole(), 'engineer: ', engineer.getRole())