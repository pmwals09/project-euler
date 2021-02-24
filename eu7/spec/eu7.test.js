const eu7 = require("../src/eu7")

describe("eu7 - 10001st prime", () => {
  test("6", () => {
    expect(eu7.ordinalPrime(6)).toEqual(13)
  })
})

