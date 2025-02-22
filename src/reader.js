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

async function readNumberLine(text) {
  let input = await readStringLine(text)
  let num = parseFloat(input);

  while (isNaN(num)) {
    console.log(`Error. Expected a valid real number, got ${input} instead`)
    input = await readStringLine(text);
    num = parseFloat(input);
  }

  return num;
}

module.exports.readStringLine = readStringLine;
module.exports.readNumberLine = readNumberLine;
