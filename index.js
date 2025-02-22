const {readNumberLine} = require('./src/reader');
const {getSquareEquationRoots} = require('./src/solver');
const fs = require('node:fs');

async function main() {
  const params = await getEquationFromConsole()
  solveEquation(params.a, params.b, params.c);
}

main();

async function getEquationFromConsole() {
  return {
    a: await readNumberLine('a: '),
    b: await readNumberLine('b: '),
    c: await readNumberLine('c: '),
  }
}

function solveEquation(a, b, c) {
  const result = getSquareEquationRoots(a, b, c);

  const rootsCount = result === null ? 0 : result.x1 === result.x2 ? 1 : 2;
  console.log(
    `Equation is: (${a}) x^2 + (${b}) x + (${c}) = 0\n` +
    `There are ${rootsCount} roots`,
  );
  switch (rootsCount) {
    case 1:
      console.log(`x1 = ${result.x1}`);
      break;
    case 2:
      console.log(`x1 = ${result.x1}\nx2 = ${result.x2}`);
      break;
  }

}

function readNumberFile (filename) {
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
    params.some((param) => isNaN(param)) ||
    params.length !== 3
  ) {
    throw new Error('Invalid file format');
  }

  const [a, b, c] = params;
  return { a, b, c };
}

