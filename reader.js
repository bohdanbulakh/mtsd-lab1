const readline = require('node:readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function readStringLine(text) {
  return new Promise((resolve, reject) => {
    reader.question(text, (answer) => {
      reader.close()
      resolve(answer);
    })
  })
}

module.exports = readStringLine;
