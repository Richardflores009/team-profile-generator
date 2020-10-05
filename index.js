const inquirer = require('inquirer')
const generatePage = require("./src/generate-page");
const fs = require('fs')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')


const teamArray = []
const newTeam = function() {
  const employeeManager = () => {
 
    console.log(`
    ====================
    New Team Add Manager
    ====================
    `);
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
          teamArray.push(manager)
          console.log(teamArray)
          employeeCreation()
      })
    };
    
    const employeeCreation = () => {
      
      console.log(`
      ====================
      Add New Team Member
      ====================
      `);
      return inquirer.prompt([
        {
          type: "list",
          name: "type",
          message: "Which type of team member would you like to add?",
          choices: ["Engineer", "Intern", "Neither"]
        },
      ])
      .then(({ type }) => {
        if (type === "Engineer") {
          teamEngineer();
        } else if (type === "Intern") {
          teamIntern();
        } else {
          finishTeam();
        }
      })
}


 const teamEngineer = () => {
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
    name: "github",
    message: "Enter your GitHub username: ",
    validate: (githubInput) => {
      if (githubInput) {
        return true;
      } else {
        console.log("Please enter your GitHub username");
        return false;
      }
    },
  }, 
])
.then(({ name, id, email, github}) => {
    const engineer = new Engineer(name, id, email, github)
    teamArray.push(engineer)
    console.log(teamArray)
    employeeCreation()
})
 }

 const teamIntern = () => {
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
      name: "school",
      message: "Enter school name: ",
      validate: (githubInput) => {
        if (githubInput) {
          return true;
        } else {
          console.log("Please enter school name");
          return false;
        }
      },
    }, 
  ])
  .then(({ name, id, email, school}) => {
      const intern = new Intern(name, id, email, school)
      teamArray.push(intern)
      console.log(teamArray)
      employeeCreation()
  })
 }

const finishTeam = function() {
  const teamStuff = generatePage(teamArray)

  writeToFile(teamStuff)
}


 
const writeToFile = (team) => {
  fs.writeFile('./dist/README.md', team , err =>{
    if (err) {
      throw err;
    } else {
      console.log('file Created')
    }
  })
}

 employeeManager()

};

newTeam()
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