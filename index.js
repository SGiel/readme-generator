// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

const generateMarkdownPage = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [];

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of your project'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide information for use.',
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Provide information on contributors to your project or third party assets that require attribution.',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Provide any information on tests for your project',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a license for your project',
            choices: ['No license', 'Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'The Unlicense']
        },
        {
            type: 'input',
            name: 'github',
            message: 'Provide your GitHub username',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Provide your email address',
        },
    ]);
};



// TODO: Create a function to write README file
const writeFile = (fileName, fileContent) => {
    return new Promise((resolve, reject) => {
      fs.writeFile(fileName, fileContent, err => {
        // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
        if (err) {
          reject(err);
          // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
          return;
        }
  
        // if everything went well, resolve the Promise and send the successful data to the `.then()` method
        resolve({
          ok: true,
          message: 'File created!'
        });
      });
    });
};

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();

promptUser()
    .then(userInput => {
        console.log(userInput.license);
        return generateMarkdownPage(userInput);
    })
    .then(pageContent => {
        return writeFile('README.md', pageContent);
      })
    .catch(err => {
        console.log(err);
    });
