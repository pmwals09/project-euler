const { evenFibSum } = require("../src/eu2")

describe("eu2 - even fibonacci numbers", () => {
  test("even fibs under 5", () => {
    expect(evenFibSum(5)).toBe(2)
  })

  test("even fibs under 90", () => {
    expect(evenFibSum(90)).toBe(2 + 8 + 34)
  })
})