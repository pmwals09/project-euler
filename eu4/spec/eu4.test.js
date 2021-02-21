const primes = require("../src/eu4")
describe("eu-4 - largest palindrome product", () => {
  test('9009', () => {
    expect(primes.largestPalindromeProduct(2)).toEqual(9009)
  })
}) 

describe("createLargestCandidate", () => {
  test("998001", () => {
    expect(primes.createLargestCandidate(998001)).toBe(997799)
  })
  
  test("9801", () => {
    expect(primes.createLargestCandidate(9801)).toBe(9779)
  })

  test("99980001", () => {
    expect(primes.createLargestCandidate(99980001)).toBe(99977999);
  });
})

describe("nextLowestCandidate", () => {
  test("989989", () => {
    expect(primes.nextLowestCandidate(989989)).toBe(988889)
  })

  test("988889", () => {
    expect(primes.nextLowestCandidate(988889)).toBe(987789);
  });

  test("980089", () => {
    expect(primes.nextLowestCandidate(980089)).toBe(979979)
  })

  test("900009", () => {
    expect(primes.nextLowestCandidate(900009)).toBe(899998)
  })
})