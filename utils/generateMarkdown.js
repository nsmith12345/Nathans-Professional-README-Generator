function renderContributingSection(_confirmContributers, data) {
  if (!_confirmContributers) {
    return `
    Thank you for wanting to help out; I will not be accepting contributions from anyone`;
  } else {
    return `
    ${data}`;
  }
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'no license') {
    return `
  ![badge](![APM](https://img.shields.io/apm/l/vim-mode?color=blue))`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'no license') {
    return `
    [${license}](https://choosealicense.com/licenses/$){license})`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'no license') {
    return `
    ## [License](#table-of-contents)

    Utilizes the following license:

    ${renderLicenseLink(license)}`;
  } else {
    return '';
  }
}

//Function that returns the license section of README
//If there is no license, return an empty string
function renderLicenseTOC(license) {
  if (license !== 'no license') {
    return `
    * [License]('#license') {`;
  } else {
    return '';
    } 
  }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}
  ## Table-of-Contents

  *[Description](#description)
  *[Installation-instructions](#installation-intructions)
  *[Usage](#usage)
  ${renderLicenseTOC(data.license)}
  *[COntributing](#contributing)
  *[Tests](#tests)
  *[Questions](#questions)

  ## [Description](#table-of-contents)
  ${data.what}
  ${data.why}
  ${data.how}
  ## [Installation](#table-of-contents)
  ${data.installation}
  ## [Usage](#table-of-contents)
  ${data.usage}
  
  ${renderLicenseSection(data.license)}
  ## [Contributing](#table-of-contents)

  ${renderContributingSection(data.confirmContributers, data.contribute)}
  ## [Tests](#table-of-contents)
  ${data.test}
  ## [Questions](#table-of-contents)
  Contact me using the following links:
  [Github](https://github.com/${data.githubUsername})

  [email: ${data.email}](emailto:${data.email})
    
`;
}

module.exports = generateMarkdown;
