const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

const questions = [
    {
        type: "input",
        message: "What is your Github username?",
        name: "userName"
    },
    {
        type: "input",
        message: "What Github repo would you like this README to be for?",
        name: "repoName"
    },
    {
        type: "input",
        message: "What is your Project Title?",
        name: "title"
    },
    {
        type: "input",
        message: "Please enter a description for your project.",
        name: "description"
    },
    {
        type: "input",
        message: "What are the steps required to install your project?",
        name: "installation"
    },
    {
        type: "input",
        message: "Provide instructions and examples for use.",
        name: "usage"
    },
    {
        type: "input",
        message: "What licenses are used for this project?",
        name: "license"
    },
    {
        type: "input",
        message: "Who contributed with this project?",
        name: "contributing"
    },
    {
        type: "input",
        message: "Include any tests for this application and how to run them.",
        name: "tests"
    }
];

const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("SUCCESS");
        
    })
}

const init = () => {
    inquirer.prompt(questions).then(function(response){
        writeToFile("READMETEST.md", 
        generateMarkdown(response));
    });
}

init();


