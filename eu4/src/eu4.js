function largestPalindromeProduct(digits){
  const minDigits = 10 ** (digits - 1)
  const maxDigits = (10 ** digits) - 1
  // find the largest candidate
  // iterate backward to find an even division from maxDigits until the result.length > digits
  // iterate candidate down
  const largestPalindromeCandidate = createLargestCandidate(maxDigits ** 2)
}

function createLargestCandidate(n){
  const numArr = n.toString().split('').map(ea => parseInt(ea))
  if(numArr[0] === numArr[numArr.length - 1]){
    return parseInt(numArr.join(''))
  } else {
    numArr[numArr.length - 1] = numArr[0]
    numArr.forEach((num, i) => {
      if(i !==0 && i !== numArr.length - 1){
        numArr[i] = numArr
      }
    })
  }
}

function nextLowestCandidate(n) {}

module.exports = {
  largestPalindromeProduct,
  createLargestCandidate,
  nextLowestCandidate,
};