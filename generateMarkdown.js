function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![github license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return '';
}

function renderLicenseLink(license) {
  if (license !== 'None') {
    return `\n* [License](#license)\n`;
  }
  return '';
}

function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License
This project is licensed under the ${license} license.`;
  }
  return '';
}

function generateMarkdown(data) {
  return `## ${data.title}

${renderLicenseBadge(data.license)}

# Description
${data.description}

# Table of Contents
[Installation](#installation)

[Usage](#usage)

[Contribution](#contribution)

${renderLicenseLink(data.license)}

# Installation 
${data.installation}

# Usage
${data.usage}

# Contribution
${data.contribution}

# License
${renderLicenseSection(data.license)}
${data.license}

# Tests
${data.test}

# Questions
[${data.username}](https://github.com/${data.username}/)

${data.email}`
    ;
}

module.exports = generateMarkdown;
