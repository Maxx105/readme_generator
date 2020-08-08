function generateMarkdown(data) {
  return `
# ${data.title} \n
## Description \n ${data.description}
## Table of Contents \n* [Installation](#Installation)\n* [Usage](#Usage)\n* [License](#License)\n* [Contributing](#Contributing)\n* [Badges](#Badges)\n* [Tests](#Tests)
## Installation \n ${data.installation}
## Usage \n ${data.usage}
## License \n ${data.license}
## Contributing \n ${data.contributing}
## Badges \n ![languages badge](https://img.shields.io/github/languages/top/${data.userName}/${data.repoName})
## Tests \n ${data.tests}
`;
}

module.exports = generateMarkdown;


