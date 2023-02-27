const inquirer = require("inquirer")
const fs = require("fs")
const path = require("path")
const generateMarkdown = require("./generateMarkdown")
const questions = [
    {
        message: 'What is the title of your project?',
        type: 'input',
        name: 'title'
    },
    {
        message: 'What is a description about your project?',
        type: 'input',
        name: 'description'
    },
    {
        message: 'What are the installation instructions for your project?',
        type: 'input',
        name: 'installation'
    },
    {
        message: 'What is the usage information of your project?',
        type: 'input',
        name: 'usage'
    },
    {
        message: 'What are the contribution guidelines of your project?',
        type: 'input',
        name: 'contribution'
    },
    {
        message: 'What are the test instructions of your project?',
        type: 'input',
        name: 'test'
    },
    {
        message: 'What license are you using for your project?',
        type: 'list',
        choices: ['Apache', 'BSD_3--Clause', 'GPL', 'MIT', 'None'],
        name: 'license'
    },
    {
        message: 'What is your GitHub username?',
        type: 'input',
        name: 'username'
    },
    {
        message: 'What is your email address for additional questions to be asked?',
        type: 'input',
        name: 'email'
    },

]

function writeToFile(fileName, data) {
    fs.writeFile(path.join(process.cwd(), fileName), data, err => console.log(err))

}

function init() {
    inquirer.prompt(questions)
        .then(answers => {
            console.log(answers)
            writeToFile('./output/README.md', generateMarkdown(answers))
        })
}

init();