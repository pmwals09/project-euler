function pythagoreanTripletProd(sum){
  for(let i = 1; i < sum; i++){
    for(let j = i+1; j < sum; j++){
      let a = j**2 - i**2
      let b = 2*i*j
      let c = j**2 + i**2
      if(a**2 + b**2 === c**2 && a + b + c === sum){
        return a * b * c
      }
    }
  }
}

module.exports = {pythagoreanTripletProd}