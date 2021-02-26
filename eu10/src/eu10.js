const utils = require("../../utils/src/utils")

function sumPrimesBelow(limit){
  const primes = utils.primeSieve(limit)
  return primes.reduce((out, curr) => out + curr)
}

module.exports = {sumPrimesBelow}