const removeFromArray = function (array, ...args) {
  const myArr = array;
  return myArr.filter((item) => !args.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
