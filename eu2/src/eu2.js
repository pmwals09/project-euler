function evenFibSum(limit){
  let sum = 0
  for(let i = 1, h = 1, g = 0; i < limit; g = h, h = i, i = g + h){
    if(i % 2 === 0){
      sum += i
    }
  }
  return sum
}

module.exports = {evenFibSum}