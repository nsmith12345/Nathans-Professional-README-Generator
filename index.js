// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter your title');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'githubUserName',
        message: 'What is your GitHub user name? (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else { 
                console.log('Please enter your Github username');
                return false;
            }    
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address? (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your email address');
                return false;
            }
        } 
    },
    {
        type: 'input',
        name: 'what',
        message: 'What is your project and what problem does it solve? (Required)',
        validate: githubInput => {
            if (whatInput) {
                return true;
            } else {
                console.log('Please enter what your project is');
            }
        }
    },    
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide instructions and examples for use. (Required)',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please enter your instructions for use');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license will you use for your project?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None',]
    },
    {
        type: 'confirm',
        name: 'confirmContributers',
        message: 'Would you like to allow other developers to contribute?',
        default: true
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Please provide guidelines for contributing. (Required)',
        when: ({ confirmContributers }) => {
            if (confirmContributers) {
                return true;
            } else {
                return false;
            }
        },
        validate: contributerInput => {
            if (contributerInput) {
                return true;
            } else {
                console.log('Please enter contributer guidelines');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please provide instructions on how to test the app. (Required)',
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('Please enter your use test instructions');
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
