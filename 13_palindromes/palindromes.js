const palindromes = function (str) {
  let cleanstring = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  let reversedstring = cleanstring.split("").reverse().join("");
  if (reversedstring === cleanstring) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
