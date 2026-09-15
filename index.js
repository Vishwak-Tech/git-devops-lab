function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function isEven(number) {
  return number % 2 === 0;
}

if (require.main === module) {
  console.log("Git DevOps Lab is running inside Docker!");
  console.log("2 + 3 =", add(2, 3));
  console.log("4 × 3 =", multiply(4, 3));
  console.log("Is 10 even?", isEven(10));
}

module.exports = {
  add,
  subtract,
  multiply,
  isEven,
};
