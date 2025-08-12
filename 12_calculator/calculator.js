const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num3, num4) {
  return num3 - num4;
};

const sum = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

const multiply = function (arr) {
  let product = 1;
  for (let y = 0; y < arr.length; y++) {
    product *= arr[y];
  }
  return product;
};

const power = function (num7, num8) {
  return num7 ** num8;
};

const factorial = function () {};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
