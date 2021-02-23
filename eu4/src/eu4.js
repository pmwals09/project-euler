function largestPalindromeProduct(digits){
  const minDigits = 10 ** (digits - 1)
  const maxDigits = (10 ** digits) - 1
  let palindromeCandidate = maxDigits ** 2
  let success = false
  while(!success && palindromeCandidate > 0){
    palindromeCandidate = nextLowestCandidate(palindromeCandidate)
    for(let i = maxDigits; i > minDigits; i--){
      if(palindromeCandidate / i > maxDigits){
        break
      }
      if(palindromeCandidate % i === 0){
        success = true
        return palindromeCandidate
      }
    }
  }
}

function nextLowestCandidate(n) {
  const stringNum = n.toString()
  if(stringNum.length % 2 === 0){
    const frontHalf = stringNum.slice(0, stringNum.length / 2)
    const newFrontHalf = (parseInt(frontHalf) - 1).toString()
    const backHalf = newFrontHalf.split('').reverse().join('')
    return parseInt(`${newFrontHalf}${backHalf}`)
  } else {
    const frontHalf = stringNum.slice(0, Math.ceil(stringNum.length / 2))
    const newFrontHalf = (parseInt(frontHalf) - 1).toString()
    const backHalf = newFrontHalf.slice(0, -2).split('').reverse().join('')
    return parseInt(`${newFrontHalf}${backHalf}`)
  }
}

module.exports = {
  largestPalindromeProduct,
  nextLowestCandidate,
};