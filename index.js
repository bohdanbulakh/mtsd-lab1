const {fromConsole, fromFile} = require('./src/equationReader');
const {getRoots} = require('./src/equations');

async function main() {
  const fileName = process.argv[2];
  const params = fileName ?
    fromFile(fileName) :
    await fromConsole();

  solveEquation(params.a, params.b, params.c);
}

main();

function solveEquation(a, b, c) {
  const result = getRoots(a, b, c);

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

