const readline = require('node:readline/promises');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function readStringLine(text) {
  return reader.question(text).then(
    (answer) => {
      reader.close();
      return answer;
    });
}

module.exports = readStringLine;
