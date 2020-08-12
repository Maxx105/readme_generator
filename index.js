const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");
const generateMarkdown = require("./utils/generateMarkdown.js");

const questions1 = [
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
        message: "What is your README Project Title?",
        name: "title"
    },
    {
        type: "input",
        message: "Please enter a description for your project.",
        name: "description"
    },
    {
        type: "confirm",
        message: "Would you like to add installation steps?",
        name: "installation"
    },
];

const questions2 = [
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
    },
    {
        type: "input",
        message: "What is your contact email address?",
        name: "email"
    }
];

const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, function(err) {
        if (err) {
            return console.log(err);
        }
    })
}

let questionsObject = {};
let allData = {};
let installStepCount = 1;

let installStepsObject = {};

let installArray = [];
let install = '';

async function init() {
    
    await inquirer.prompt(questions1).then(async function(response){
        const queryUrl = `https://api.github.com/users/${response.userName}/events/public?per_page=1`;

        await axios.get(queryUrl).then(res => response.picture = res.data[0].actor.avatar_url);

        questionsObject = response;

        const stepPrompts = (confirmValue, inputName, confirmName) => {
            installStepCount++;
            
            const installQuestions = [
                {
                    type: "input",
                    message: `Step ${installStepCount - 1}:`,
                    name: inputName
                },
                {
                    type: "confirm",
                    message: "Would you like to add another step?",
                    name: confirmName
                },
            ];
            if (confirmValue) {
                inquirer.prompt(installQuestions).then(function(response){

                    questionsObject[inputName] = response[inputName];
                    installStepsObject[inputName] = response[inputName];

                    confirmValue = response.stepConfirm;
                    stepPrompts(confirmValue, `step${installStepCount}`, `stepConfirm`);
                    writeToFile("READMETEST.md", generateMarkdown(questionsObject, install));
                });
            } else {
                inquirer.prompt(questions2).then(function(response2){
                    allData = {
                        ...questionsObject,
                        ...response2
                    }

                    Object.entries(installStepsObject).forEach(item => installArray.push(item[1]));
                    install = installArray.join('\n* ');

                    writeToFile("READMETEST.md", generateMarkdown(allData, install));
                });
            }  
        }

        stepPrompts(response.installation, `step${installStepCount}`, `stepConfirm`);

    });

}

init();

