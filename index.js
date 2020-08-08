const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

const questions = [
    {
        type: "input",
        message: "What is your Project Title?",
        name: "title"
    },
    {
        type: "input",
        message: "What is your Description?",
        name: "description"
    },
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
        const { title } = response;
        const { description } = response;
        writeToFile("READMETEST.md", 
        generateMarkdown(response));
    });
}

init();


