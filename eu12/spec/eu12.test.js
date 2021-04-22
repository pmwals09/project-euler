const eu12 = require("../src/eu12")
describe("eu-12 - Highly divisible triangular number", () => {
  test("5", () => {
    expect(eu12.triangleNumFactorsOver(5)).toBe(28)
  })
});

describe("triangleNumsUpToLimit", () => {
  expect(eu12.triangleNumsLimit(10)).toEqual([1, 3, 6, 10, 15, 21, 28, 36, 45, 55]);
});

describe("factorization", () => {
  test("1", () => {
    expect(eu12.factorization(1)).toEqual([1])
  })
  test("3", () => {
    expect(eu12.factorization(3)).toEqual([1, 3])
  })
  test("6", () => {
    expect(eu12.factorization(6)).toEqual([1, 2, 3, 6])
  })
  test("10", () => {
    expect(eu12.factorization(10)).toEqual([1, 2, 5, 10])
  })
  test("15", () => {
    expect(eu12.factorization(15)).toEqual([1, 3, 5, 15])
  })
  test("21", () => {
    expect(eu12.factorization(21)).toEqual([1, 3, 7, 21])
  })
  test("28", () => {
    expect(eu12.factorization(28)).toEqual([1, 2, 4, 7, 14, 28])
  })
})