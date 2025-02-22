const readline = require('node:readline/promises');

function createReader () {
  return readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
}

async function readStringLine(text) {
  const reader = createReader();

  return reader.question(text).then(
    (answer) => {
      reader.close();
      return answer;
    });
}

module.exports = readStringLine;
