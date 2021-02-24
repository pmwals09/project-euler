function populateArray(start, end){
  let arr = []
  
  for(let i = start; start > end ? i >= end : i <= end; start > end ? i-- : i++){
    arr.push(i)
  }
  return arr
}

function primeSieve(upperLimit){
  let primes = []
  let sieve = populateArray(0, upperLimit).map(ea => true)
  for(let i = 2; i <= upperLimit; i++){
    if(sieve[i]){
      primes.push(i)
      for(let j = i; j <= upperLimit; j+=i){
        sieve[j] = false
      }
    }
  }
  return primes
}

// https://en.wikipedia.org/wiki/Primality_test#JavaScript_code
function isPrime(n){
    if (n <= 3) return n > 1;
    if (n % 2 === 0 || n % 3 === 0) return false;
    let count = 5;
    while (Math.pow(count, 2) <= n) {
      if (n % count === 0 || n % (count + 2) === 0) return false;
      count += 6;
    }
    return true;
}

module.exports = {populateArray, primeSieve, isPrime}