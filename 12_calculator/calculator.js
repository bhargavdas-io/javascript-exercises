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

const multiply = function (num5, num6) {
  let product = parseInt(num5) * parseInt(num6);
  return product;
};

const power = function () {};

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
