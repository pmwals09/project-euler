const eu11 = require("../src/eu11")
describe("eu-11 - Largest product in a grid", () => {
  test("diagonal", () => {
    expect(eu11.downRightTotal(6,8)).toBe(1788696);
  })
});

describe("forwardTotal", () => {
  test("0,0", () => {
    expect(eu11.forwardTotal(0, 0)).toBe(8 * 2 * 22 * 97);
  });
  test("0,1", () => {
    expect(eu11.forwardTotal(0, 1)).toBe(2 * 22 * 97 * 38);
  });
  test("1,0", () => {
    expect(eu11.forwardTotal(1, 0)).toBe(49 * 49 * 99 * 40);
  });
  test("0,16", () => {
    expect(eu11.forwardTotal(0, 16)).toBe(50 * 77 * 91 * 8);
  });
  test("16,0", () => {
    expect(eu11.forwardTotal(16, 0)).toBe(4 * 42 * 16 * 73);
  });
  test("0,17", () => {
    expect(eu11.forwardTotal(0, 17)).toBe(false);
  });
  test("17,0", () => {
    expect(eu11.forwardTotal(17, 0)).toBe(20 * 69 * 36 * 41);
  });
})

describe("diagonal total", () => {
  test("0,0", () => {
    expect(eu11.downRightTotal(0,0)).toBe(8 * 49 * 31 * 23)
  })
  test("0,1", () => {
    expect(eu11.downRightTotal(0,1)).toBe(2 * 99 * 73 * 4)
  })
  test("1,0", () => {
    expect(eu11.downRightTotal(1, 0)).toBe(49 * 49 * 95 * 71)
  })
  test("0,16", () => {
    expect(eu11.downRightTotal(0,16)).toBe(50 * 56 * 36 * 91)
  })
  test("16,0", () => {
    expect(eu11.downRightTotal(16,0)).toBe(4 * 69 * 35 * 71)
  })
  test("0,17", () => {
    expect(eu11.downRightTotal(0,17)).toBe(false)
  })
  test("17,0", () => {
    expect(eu11.downRightTotal(17,0)).toBe(false)
  })
})

describe("downTotal", () => {
  test("0,0", () => {
    expect(eu11.downTotal(0, 0)).toBe(8 * 49 * 81 * 52);
  });
  test("0,1", () => {
    expect(eu11.downTotal(0, 1)).toBe(2 * 49 * 49 * 70);
  });
  test("1,0", () => {
    expect(eu11.downTotal(1, 0)).toBe(49 * 81 * 52 * 22);
  });
  test("0,16", () => {
    expect(eu11.downTotal(0, 16)).toBe(50 * 4 * 49 * 37);
  });
  test("16,0", () => {
    expect(eu11.downTotal(16, 0)).toBe(4 * 20 * 20 * 1);
  });
  test("0,17", () => {
    expect(eu11.downTotal(0, 17)).toBe(77 * 56 * 13 * 2);
  });
  test("17,0", () => {
    expect(eu11.downTotal(17, 0)).toBe(false);
  });
})

describe("downLeftTotal", () => {
  test("0,0", () => {
    expect(eu11.downLeftTotal(0, 0)).toBe(false);
  });
  test("0,1", () => {
    expect(eu11.downLeftTotal(0, 1)).toBe(false);
  });
  test("1,0", () => {
    expect(eu11.downLeftTotal(1, 0)).toBe(false);
  });
  test("0,16", () => {
    expect(eu11.downLeftTotal(0, 16)).toBe(50 * 48 * 30 * 32);
  });
  test("16,0", () => {
    expect(eu11.downLeftTotal(16, 0)).toBe(false);
  });
  test("0,17", () => {
    expect(eu11.downLeftTotal(0, 17)).toBe(77 * 4 * 3 * 56);
  });
  test("17,0", () => {
    expect(eu11.downLeftTotal(17, 0)).toBe(false);
  });
})