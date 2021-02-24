const {num} = require("./num")
function largestProduct(length){
  let max = 0
  for(let i = 0; i < num.length - length; i++){
    const product = num.slice(i, i + length).split("").reduce((out, curr) => out * parseInt(curr),1)
    max = Math.max(max, product)
  }
  return max
}

module.exports = {largestProduct}