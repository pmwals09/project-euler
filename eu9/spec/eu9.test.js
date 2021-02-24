const eu9 = require("../src/eu9")
describe("eu9 - special pythagorean triplet", () => {
  test("12", () => {
    expect(eu9.pythagoreanTripletProd(12)).toBe(60)
  })
})