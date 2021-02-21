const chalk = require("chalk")

function primesLimit(n){
  let isPrimes = []
  let primes = []
  for(let i = 0; i <= Math.sqrt(n); i++){
    isPrimes.push(true)
  }
  
  for(let i = 2; i < isPrimes.length; i++){
    if(isPrimes[i] && n % i === 0){
      primes.push(i)
      for(let j = i + 1; j < isPrimes.length; j++){
        if(j % i === 0){
          isPrimes[j] = false
        }
      }
    }
  }  
  return primes[primes.length - 1]
}

module.exports = {primesLimit}