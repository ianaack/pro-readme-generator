// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the name of your project? (Required)",
      validate: (inputTitle) => {
        if (inputTitle) {
          return true;
        } else {
          console.log("Please enter a name for your project!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "github",
      message: "Please enter your Github username. (Required)",
      validate: (inputGithub) => {
        if (inputGithub) {
          return true;
        } else {
          console.log("Please enter a Github username!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "Please enter your email. (Required)",
      validate: (inputEmail) => {
        if (inputEmail) {
          return true;
        } else {
          console.log("Please enter an email address!");
          return false;
        }
      },
    },
    {
      type: "list",
      name: "license",
      message:
        "What type of license would you like this project to use? (Required)",
      choices: ["MIT", "Apache 2.0", "GNU GPL v3", "BSD 3-Clause", "ISC"],
      validate: (choicePicked) => {
        if (choicePicked.length > 0) {
          return true;
        } else {
          console.log("Please select a license for your project.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "description",
      message:
        "(Required) Please provide a brief description for your project. Use the following questions as a guide: \n What was your motivation? \n Why did you build this project? \n What problem does it solve? \n What did you learn? \n",
      validate: (inputDescription) => {
        if (inputDescription) {
          return true;
        } else {
          console.log("Please enter a valid project description.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "installation",
      message:
        "Please provide the user with instructions on how to install your project. (Required)",
      validate: (inputInstallation) => {
        if (inputInstallation) {
          return true;
        } else {
          console.log("Please provide installation instructions.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "usage",
      message:
        "Provide instructions and examples for use of your project. (Required)",
      validate: (inputUsage) => {
        if (inputUsage) {
          return true;
        } else {
          console.log("Please provide usage instructions or examples.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "contribution",
      message:
        "Please provide how other developers can contribute to your project. (Optional)",
    },
    {
      type: "input",
      name: "tests",
      message: "Please provide how to test your project. (Optional)",
    },
    {
      type: "input",
      name: "questions",
      message:
        "Provide a description for how a user can reach out about questions regarding your project. (Optional)",
    },
  ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
// init();
promptUser();
