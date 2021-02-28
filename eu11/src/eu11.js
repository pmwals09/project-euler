const { input } = require("./input");

function forwardTotal(startRow, startCol) {
  let total = 1;
  let row = startRow;
  let col = startCol;
  for (let i = 0; i < 4; i++) {
    if (input[row] && input[row][col]) {
      total *= input[row][col];
      col++;
    } else {
      return false;
    }
  }
  return total;
}

function downRightTotal(startRow, startCol) {
  let total = 1;
  let row = startRow;
  let col = startCol;
  for (let i = 0; i < 4; i++) {
    if (input[row] && input[row][col]) {
      total *= input[row][col];
      row++;
      col++;
    } else {
      return false;
    }
  }
  return total;
}

function downTotal(startRow, startCol) {
  let total = 1;
  let row = startRow;
  let col = startCol;
  for (let i = 0; i < 4; i++) {
    if (input[row] && input[row][col]) {
      total *= input[row][col];
      row++;
    } else {
      return false;
    }
  }
  return total;
}

function downLeftTotal(startRow, startCol) {
  let total = 1;
  let row = startRow;
  let col = startCol;
  for (let i = 0; i < 4; i++) {
    if (input[row] && input[row][col]) {
      total *= input[row][col];
      row++;
      col--;
    } else {
      return false;
    }
  }
  return total
}

function findMax() {
  let max = 0;
  const directions = [
    forwardTotal,
    downRightTotal,
    downTotal,
    downLeftTotal,
  ];
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length; j++) {
      max = Math.max(max, ...directions.map(ea => ea(i, j)));
    }
  }
  return max
}

module.exports = { forwardTotal, downRightTotal, downTotal, downLeftTotal, findMax };
