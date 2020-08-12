function generateMarkdown(data, install) {
  
  return `
# ${data.title} \n
## Description \n ${data.description}
## Table of Contents \n* [Installation](#Installation)\n* [Usage](#Usage)\n* [License](#License)\n* [Contributing](#Contributing)\n* [Badges](#Badges)\n* [Tests](#Tests)\n* [Questions](#Questions)
## Installation \n* ${install}
## Usage \n ${data.usage}
## License \n ${data.license}
## Contributing \n ${data.contributing}
## Badges \n ![languages badge](https://img.shields.io/github/languages/top/${data.userName}/${data.repoName})
## Tests \n ${data.tests}
## Questions \n For any questions, contact me at [${data.email}](mailto:${data.email}).
#### [![Profile Pic](${data.picture})](https://github.com/${data.userName})
`;
}


module.exports = generateMarkdown;


