const eu11 = require("../src/eu11")

describe("eu-11 - Largest product in a grid", () => {
  test("diagonal", () => {
    expect(eu11.diagonalProduct()).toBe(1788696)
  })
})