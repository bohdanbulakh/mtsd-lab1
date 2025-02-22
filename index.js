const {getSquareEquationRoots} = require('./src/solver');

function main() {

}

main();

function solveEquation(a, b, c) {
  const result = getSquareEquationRoots(a, b, c);

  const rootsCount = result === null ? 0 : result.x1 === result.x2 ? 1 : 2;
  console.log(`There are ${rootsCount} roots`)

  switch (rootsCount) {
    case 1:
      console.log(`x1 = ${result.x1}`)
      break;
    case 2:
      console.log(`x1 = ${result.x1}\nx2 = ${result.x2}`)
      break;
  }

}

