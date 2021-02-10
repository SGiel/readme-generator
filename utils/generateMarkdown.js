// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

const renderLicenseBadge = license => {
  
  switch(license) {
    case 'No license':
      badge = '';
      break;
    case 'Apache License 2.0':
      badge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]';
      break;
    case 'NU General Public License v3.0':
      badge = '';
      break;
    case 'MIT License':
      badge = '';
      break;
    case 'BSD 2-Clause "Simplified" License':
      badge = '';
      break;
    case 'BSD 3-Clause "New" or "Revised" License':
      badge = '';
      break;
    case 'Boost Software License 1.0':
      badge = '';
      break;
    case 'Creative Commons Zero v1.0 Universal':
      badge = '';
      break;
    case 'Eclipse Public License 2.0':
      badge = '';
      break;
    case 'GNU Affero General Public License v3.0':
      badge = '';
      break;
    case 'GNU General Public License v2.0':
      badge = '';
      break;
    case 'GNU Lesser General Public License v2.1':
      badge = '';
      break;
    case 'Mozilla Public License 2.0':
      badge = '';
      break;
    case 'The Unlicense':
      badge = '';
      break;
    
    default:
      badge = '';
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

//function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

//function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
  return `# ${data.title} ${renderLicenseBadge(data.license)}

## Description
  ${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)

## Installation
  ${data.installation}

## Usage
  ${data.usage}
    
## License  
  
Licensed under the ${data.license} (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

(https://opensource.org/licenses/Apache-2.0)

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

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
