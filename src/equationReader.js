const readline = require('node:readline/promises');
const fs = require('node:fs');

function createReader() {
  return readline.createInterface({
    input: process.stdin,
    output: process.stdout,
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
  let input = await readStringLine(text);
  let num = parseFloat(input);

  while (!isParamValid(num, text[0] !== 'a')) {
    console.log(num === 0 ?
      'Error. "a" cannot be 0' :
      `Error. Expected a valid real number, got "${input}" instead`);

    input = await readStringLine(text);
    num = parseFloat(input);
  }

  return num;
}

function isParamValid(value, zeroAllowed) {
  return !(!zeroAllowed && value === 0) && !isNaN(value);
}

async function fromConsole() {
  return {
    a: await readNumberLine('a: '),
    b: await readNumberLine('b: '),
    c: await readNumberLine('c: '),
  };
}

function fromFile(filename) {
  let file = fs.readFileSync(filename).toString();

  const input = file.split(/\r?\n/)[0];
  if (!input) {
    throw new Error('Invalid file format');
  }

  const params = input
    .split(/\s+/)
    .slice(0, 3)
    .map((param) => parseFloat(param));

  if (
    params.length !== 3 ||
    !params.every((param, index) =>
      isParamValid(param, index !== 0))
  ) {
    throw new Error(params[0] === 0 ?
      'Error. "a" cannot be 0' :
      'Invalid file format');
  }

  const [a, b, c] = params;
  return {a, b, c};
}

module.exports = {
  fromFile,
  fromConsole,
};
