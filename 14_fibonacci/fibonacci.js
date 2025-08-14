const fibonacci = function (num) {
  if (num === 0 || num === "0") {
    return 0;
  } else if (num < 0) {
    return "OOPS";
  }
  let arr = [1, 1];

  for (let i = 2; i < num; i++) {
    let nxtnum = arr[i - 1] + arr[i - 2];
    arr.push(nxtnum);
  }

  return arr[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
