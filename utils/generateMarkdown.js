const licenseBadgeLinks = require("./licenseBadges");

generateMarkdown = (data) => {
  data.licenseBadge = licenseBadgeLinks[data.license];

  return `# ${data.title}

  ${data.licenseBadge}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Contribution](#Contribution)
  - [Tests](#Tests)
  - [Questions](#Questions)

  ##
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contribution
  ${data.contribution}

  ## Tests
  ${data.tests}

  ## Questions
  ${data.questions}
  https://github.com.${data.github}

  How to reach me for additional questions: ${data.email}
  `;
};

module.exports = generateMarkdown;
