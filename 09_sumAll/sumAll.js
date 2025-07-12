const sumAll = function (num1, num2) {
  if (
    typeof num1 != "number" ||
    typeof num2 != "number" ||
    !Number.isInteger(num1) ||
    !Number.isInteger(num2) ||
    num1 < 0 ||
    num2 < 0
  ) {
    return "ERROR";
  }

  let integers = [];
  let totalsum = 0;
  let start = Math.min(num1, num2);
  let end = Math.max(num1, num2);

  for (let i = start; i <= end; i++) {
    integers.push(i);
  }

  for (let j = 0; j < integers.length; j++) {
    totalsum += integers[j];
  }

  return totalsum;
};
// Do not edit below this line
module.exports = sumAll;
