function generateMarkdown(data) {
  return `
# ${data.title} \n
# Description \n ${data.description}
# Table of Contents \n* [Installation](#Installation)\n* [Usage](#Usage)\n* [License](#License)\n* [Contributing](#Contributing)\n* [Badges](#Badges)\n* [Tests](#Tests)
# Installation \n
# Usage \n
# License \n
# Contributing \n
# Badges \n
# Tests \n


`;
}

module.exports = generateMarkdown;


