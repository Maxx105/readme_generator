const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");
const generateMarkdown = require("./utils/generateMarkdown.js");

const installSteps = [
    {
        type: "input",
        message: "Step",
        name: 'step'
    },
    {
        type: "confirm",
        message: "Add another Step?",
        name: ''
    },
];


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
        message: "What is your README Project Title?",
        name: "title"
    },
    {
        type: "input",
        message: "Please enter a description for your project.",
        name: "description"
    },
    {
        type: "input",
        message: "Would you like to add step by step installation instructions?",
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
        console.log("SUCCESS");
        
    })
}

function init() {
    
    inquirer.prompt(questions).then(async function(response){
        const queryUrl = `https://api.github.com/users/${response.userName}/events/public?per_page=1`;
        await axios.get(queryUrl).then(function(res) {
            console.log(res.data[0].actor.avatar_url);
            response.picture = res.data[0].actor.avatar_url
            //console.log(res.data.payload.commits[0].author.email);
        });
        await writeToFile("READMETEST.md", generateMarkdown(response));
    });

}

init();

 // let data = {};
    
    // for (i = 0; i < questions.length; i++){
    //     await inquirer.prompt(questions[i]).then(function(response){
    //         let questionKey = questions[i].name;
    //         console.log(questionKey);
    //         data.questionKey = response.questionKey;
    //         //data.userName = response.userName
    //         console.log(data);
    //     });
    // }

    // await inquirer.prompt(questions[1]).then(function(response){
    //     data.repoName = response.repoName;
    //     console.log(data);
    // });

    // await inquirer.prompt(questions[2]).then(function(response){
    //     data.title = response.title;
    //     console.log(data);
    // });

    // await inquirer.prompt(questions[3]).then(function(response){
    //     data.description = response.description;
    //     console.log(data);
    // });

    // await inquirer.prompt(questions[4]).then(function(response){
    //     data.installation = response.installation;
    //     console.log(data);
    // });

    // await inquirer.prompt(questions[5]).then(function(response){
    //     data.usage = response.usage;
    //     console.log(data);
    // });

    // await inquirer.prompt(questions[6]).then(function(response){
    //     data.license = response.license;
    //     console.log(data);
    // });

    // await inquirer.prompt(questions[7]).then(function(response){
    //     data.contributing = response.contributing;
    //     console.log(data);
    // });

    // await inquirer.prompt(questions[8]).then(function(response){
    //     data.tests = response.tests;
    //     console.log(data);
    // });

    // await writeToFile("READMETEST.md", generateMarkdown(data));

