const { describe, expect } = require("@jest/globals")
const eu5 = require("../src/eu5")

describe("eu5 - smallest multiple", () => {
  test("10", () => {
    expect(eu5.smallestMultiple(10)).toBe(2520)
  })
})

describe("primeFactorization", () => {
  test("10", () => {
    expect(eu5.primeFactorization(10)).toEqual({2: 1, 5: 1})
  })
  test("13", () => {
    expect(eu5.primeFactorization(13)).toEqual({13: 1})
  })
  test("2520", () => {
    expect(eu5.primeFactorization(2520)).toEqual({2: 3, 3: 2, 5: 1, 7: 1})
  })
})

describe("primesLimit", () => {
  test("10", () => {
    expect(eu5.primesLimit(10)).toEqual([2, 3, 5, 7])
  })
  test("12", () => {
    expect(eu5.primesLimit(12)).toEqual([2, 3, 5, 7, 11])
  })
})

describe("combineFactorizations", () => {
  test("10", () => {
    expect(eu5.combineFactorizations(10)).toEqual({ 2: 3, 3: 2, 5: 1, 7: 1 });
  })
})