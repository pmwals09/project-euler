const eu6 = require("../src/eu6")

describe("eu-6 - sum square difference", () => {
  test("10", () => {
    expect(eu6.sumSquareDiff(10)).toBe(2640)
  })
})

describe("sumSquares", () => {
  test("10", () => {
    expect(eu6.sumSquares(10)).toBe(385)
  })
})

describe("squareSum", () => {
  test("10", () => {
    expect(eu6.squareSum(10)).toBe(3025)
  })
})