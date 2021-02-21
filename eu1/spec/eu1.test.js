const {sumThreesFivesLimit} = require("../src/eu1")

describe("eu1 - sum of threes and fives below 1000", () => {
  test("numbers below 10", () => {
    expect(sumThreesFivesLimit(10)).toBe(23)
  })
})