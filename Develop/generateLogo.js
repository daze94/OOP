const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters for the logo:',
    validate: input => input.length <= 3 || 'Text can only be up to 3 characters long.'
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter the text color keyword or hexadecimal number:',
    default: 'white'
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape for the logo:',
    choices: ['circle', 'triangle', 'square']
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter the color for the shape keyword or hexadecimal number:',
    default: 'black'
  }
];


function generateSVG(data) {
  const { text, textColor, shapeColor } = data;

  return `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="100" r="80" fill="${shapeColor}" />
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>
  `;
}

function init() {
  inquirer.prompt(questions).then(answers => {
    const svgContent = generateSVG(answers);
    const filename = 'logo.svg';
    fs.writeFile(filename, svgContent, (err) => {
      if (err) throw err;
      console.log(`Generated ${filename}`);
    });
  });
}

init();
