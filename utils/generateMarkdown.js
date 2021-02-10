// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

const renderLicenseBadge = license => {
  
  switch(license) {
    case 'No license':
      badge = '';
      break;
    case 'Apache License 2.0':
      badge = '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
      break;
    case 'GNU General Public License v3.0':
      badge = '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
      break;
    case 'The MIT License':
      badge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
      break;
    case 'The Unlicense':
      badge = '![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)';
      break;
    
    default:
      badge = '';
  }
  return badge;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = license => {
  switch(license) {
    case 'No license':
      badgeUrl = '';
      break;
    case 'Apache License 2.0':
      badgeUrl = '(https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'GNU General Public License v3.0':
      badgeUrl = '(https://www.gnu.org/licenses/gpl-3.0)';
      break;
    case 'The MIT License':
      badgeUrl = '(https://opensource.org/licenses/MIT)';
      break;
    case 'The Unlicense':
      badgeUrl = '(http://unlicense.org/)';
      break;
    
    default:
      badgeUrl = '';
  }
  return badgeUrl;
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

const renderLicenseSection = license => {
  if (license === "No license") {
    return '';
  } 
  return `
## License  
  
Licensed under the ${license} (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

${renderLicenseLink(license)}

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
  ` 
}

// adds in the License section in Table of Contents if License 
const renderLicenseTOC = license => {
  if (license === "No license") {
    return '';
  } 
  return `* [License](#license)` 
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
  return `# ${data.title} ${renderLicenseBadge(data.license)}

## Description
  ${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
${renderLicenseTOC(data.license)}

## Installation
  ${data.installation}

## Usage
  ${data.usage}
  ${renderLicenseSection(data.license)}
## Contributing
  ${data.contributing}

## Tests
  ${data.tests}

## Questions
    My GitHub profile is github.com/${data.github}
    If you have questions about my project I can be reached at ${data.email}
`;
};

module.exports = generateMarkdown;

// from - module - deconstructed variables module.exports = { writeFile, copyFile };
