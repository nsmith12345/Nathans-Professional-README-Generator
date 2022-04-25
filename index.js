// Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// Create an array of questions for user input
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
        validate: whatInput => {
            if (whatInput) {
                return true;
            } else {
                console.log('Please enter what your project is');
            }
        }
    },    
    {
        type: 'input',
        name: 'why',
        message: 'Why did you create this project? (Required)',
        validate: whyInput => {
            if (whyInput) {
                return true;
            } else {
                console.log('Please enter why you created this project');
                return false;
            }
        }
    },
    {
        type: 'input',
        name:'how',
        message: 'How will someone use this? (Required)',
        validate: howInput => {
            if (howInput) {
                return true;
            } else {
                console.log('Please enter what your projet is');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installationInstructions',
        message: 'Provide step by step install instructions for your project (Required)',
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log('Please type in your install instructions');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
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

// Create a function to write README file
const writeToFile = fileName => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./nathans-professional-README-generator.md', fileName, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File created'
            });
        });
    });
}; 

// Create a function to initialize app
const init = () => {

    return inquirer.prompt(questions)
    .then(readmeData => {
        return readmeData;
    })
}


// Function call to initialize app
init() 
.then(readmeData => {
    console.log(readmeData);
    return generateMarkdown(readmeData);
})
.then(pageMD => {
    return writeToFile(pageMD);
})  
.then(writeToFileResponse => {
    console.log(writeToFileResponse.message);
})
.catch(err => {
    console.log(err);
})
   