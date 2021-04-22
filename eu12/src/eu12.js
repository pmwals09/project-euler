function triangleNumFactorsOver(limit){
  let maxFactors = 0
  let numWithMaxFactors = 0
  let triangleLimit = 1
  let triangleNums = [1]
  while(maxFactors <= limit){
    triangleNums.forEach(num => {
      let numFactors = factorization(num).length
      let newMaxFactors = Math.max(maxFactors, numFactors)
      if(maxFactors !== newMaxFactors){
        maxFactors = newMaxFactors
        numWithMaxFactors = num
      }
    })
    triangleNums.push(triangleNums[triangleNums.length - 1] + triangleLimit)
    triangleLimit++
    console.log("maxFactors", maxFactors)
  }
  return numWithMaxFactors
}

function triangleNumsLimit(limit){
  let triangleNumbers = [1]
  for(let i = 2; i <= limit; i++){
    triangleNumbers.push(triangleNumbers[triangleNumbers.length - 1] + i)
  }
  return triangleNumbers
}

function factorization(num){
  if(num === 1) return [1]
  let factors = []
  for(let i = 1; i <= num / 2 + 1; i++){
    if(num % i === 0) {
      factors.push(i)
      factors.push(num / i)
    }
  }
  return factors.sort((a, b) => a - b)
}

module.exports = { triangleNumFactorsOver, triangleNumsLimit, factorization };