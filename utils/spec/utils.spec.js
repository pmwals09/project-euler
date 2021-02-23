const utils = require("../src/utils")

describe("utils", () => {
  describe("populateArray", () => {
    test("1-10", () => {
      expect(utils.populateArray(1, 10)).toEqual([1,2,3,4,5,6,7,8,9,10])
    })
    test("10-1", () => {
      expect(utils.populateArray(10, 1)).toEqual([10,9,8,7,6,5,4,3,2,1])
    })
    test("-1--10", () => {
      expect(utils.populateArray(-1, -10)).toEqual([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10])
      
    })
    test("-10--1", () => {
      expect(utils.populateArray(-10, -1)).toEqual([-10,-9,-8,-7,-6,-5,-4,-3,-2,-1])
    })
  })
})