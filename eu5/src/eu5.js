function smallestMultiple(n){
  const combinedFactorization = combineFactorizations(n)
  return Object.keys(combinedFactorization).reduce((out, curr) => {
    return out * curr**combinedFactorization[curr]
  }, 1)
}

function combineFactorizations(n){
  let factors = []
  let combinedFactorization = {}
  for(let i = 2; i <= n; i++){
    factors.push(i)
  }

  factors.forEach(factor => {
    let factorFactorization = primeFactorization(factor)
    for(let factor in factorFactorization){
      if(combinedFactorization[factor]){
        combinedFactorization[factor] = Math.max(factorFactorization[factor], combinedFactorization[factor])
      } else {
        combinedFactorization[factor] = factorFactorization[factor]
      }
    }
  })

  return combinedFactorization
}

function primeFactorization(n){
  const primeCandidates = primesLimit(n)
  let remainder = n
  let factorization = {}
  for(let i = 0; i < primeCandidates.length; i++){
    while(remainder % primeCandidates[i] === 0){
      factorization[primeCandidates[i]]
        ? factorization[primeCandidates[i]]++
        : factorization[primeCandidates[i]] = 1; 
      remainder = remainder / primeCandidates[i]
    }
  }

  return factorization
}

function primesLimit(n) {
  let isPrimes = [];
  let primes = [];
  for (let i = 0; i <= n; i++) {
    isPrimes.push(true);
  }
  for (let i = 2; i < isPrimes.length; i++) {
    if (isPrimes[i]) {
      primes.push(i);
      for (let j = i + 1; j < isPrimes.length; j++) {
        if (j % i === 0) {
          isPrimes[j] = false;
        }
      }
    }
  }
  return primes;
}

module.exports = {
  smallestMultiple,
  combineFactorizations,
  primeFactorization,
  primesLimit
}