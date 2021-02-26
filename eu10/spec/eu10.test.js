const eu10 = require("../src/eu10")

describe("eu-10 - summation of primes", () => {
  test("10", () => {
    expect(eu10.sumPrimesBelow(10)).toBe(17)
  })
})