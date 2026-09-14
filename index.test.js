const { add, subtract, multiply, isEven } = require("./index");

describe("Math utilities", () => {
  test("adds two numbers", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("subtracts two numbers", () => {
    expect(subtract(5, 3)).toBe(2);
  });

  test("multiplies two numbers", () => {
    expect(multiply(4, 3)).toBe(12);
  });

  test("checks if number is even", () => {
    expect(isEven(4)).toBe(true);
    expect(isEven(5)).toBe(false);
  });

  test("handles negative numbers", () => {
    expect(add(-2, -3)).toBe(-5);
    expect(isEven(-4)).toBe(true);
  });

  test("handles zero", () => {
    expect(add(0, 0)).toBe(0);
    expect(isEven(0)).toBe(true);
  });
});
