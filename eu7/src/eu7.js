const utils = require("../../utils/src/utils")
function ordinalPrime(nth){
  let ordinal = 0
  let candidate = 2
  while(ordinal < nth){
    if(utils.isPrime(candidate)){
      ordinal++
    }
    candidate++
  }
  return candidate - 1
}



module.exports = {ordinalPrime}