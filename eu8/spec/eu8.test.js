const eu8 = require("../src/eu8")
describe("eu8 - largest product in a series", () => {
  test("4", () => {
    expect(eu8.largestProduct(4)).toBe(5832)
  })
})