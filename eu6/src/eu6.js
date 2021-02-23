const utils = require("../../utils/src/utils")
function sumSquareDiff(n){
  const sumOfSquares = sumSquares(n)
  const squareOfSum = squareSum(n)
  return squareOfSum - sumOfSquares
}

function sumSquares(n) {
  let nums = utils.populateArray(1,n)
  return nums.reduce((out, curr) => {
    return out + curr ** 2
  }, 0)
}

function squareSum(n){
  let nums = utils.populateArray(1, n);
  return nums.reduce((out, curr) => out + curr) ** 2
}

module.exports = {
  sumSquareDiff,
  sumSquares,
  squareSum
};