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

  describe("primeSieve", () => {
    test("10", () => {
      expect(utils.primeSieve(10)).toEqual([2, 3, 5, 7])
    })
    test("11", () => {
      expect(utils.primeSieve(11)).toEqual([2, 3, 5, 7, 11])
    })
    test("20", () => {
      expect(utils.primeSieve(20)).toEqual([2, 3, 5, 7, 11, 13, 17, 19])
    })
  })

  describe("isPrime", () => {
    test("2", () => {
      expect(utils.isPrime(2)).toBe(true)
    })
    test("3", () => {
      expect(utils.isPrime(3)).toBe(true)
    })
    test("9", () => {
      expect(utils.isPrime(9)).toBe(false)
    })
    test("10", () => {
      expect(utils.isPrime(10)).toBe(false)
    })
    test("11", () => {
      expect(utils.isPrime(11)).toBe(true)
    })
  })

  describe("primeFactorization", () => {
    test("10", () => {
      expect(utils.primeFactorization(10)).toEqual({ 2: 1, 5: 1 });
    });
    test("13", () => {
      expect(utils.primeFactorization(13)).toEqual({ 13: 1 });
    });
    test("2520", () => {
      expect(utils.primeFactorization(2520)).toEqual({ 2: 3, 3: 2, 5: 1, 7: 1 });
    });
  })
})