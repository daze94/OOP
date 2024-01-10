const inquirer = require('inquirer');
const fs = require('fs');


// Main application logic
function main() {
  inquirer.prompt([ /* Your questions */ ])
    .then(answers => {
      
    })
    .catch(error => {
      console.error('An error occurred:', error);
    });
}

main();
