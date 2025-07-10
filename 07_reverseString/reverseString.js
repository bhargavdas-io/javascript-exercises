const reverseString = function (string) {
  let text = string;

  const reversed = text.split("").reverse().join("");

  return reversed;
};

// Do not edit below this line
module.exports = reverseString;
