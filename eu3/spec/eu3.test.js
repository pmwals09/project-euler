const {primesLimit} = require("../src/eu3")

describe("eu3 - largest prime factor", () => {
  test("13195", () => {
    expect(primesLimit(13195)).toBe(29);
  });
})