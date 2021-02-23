function populateArray(start, end){
  let arr = []
  
  for(let i = start; start > end ? i >= end : i <= end; start > end ? i-- : i++){
    arr.push(i)
  }
  return arr
}

module.exports = {populateArray}