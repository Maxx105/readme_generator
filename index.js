const fs = require("fs");
const inquirer = require("inquirer");

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
    {
        type: "input",
        message: "What is your Table of Contents?",
        name: "contents"
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
        const { title } = response;
        const { description } = response;
        const { contents } = response;
        writeToFile("READMETEST.md", `Title: ${title}` + '\n' +  `Description: ${description}` + '\n' + `Table of Contents: ${contents}`);
    });
}

init();


