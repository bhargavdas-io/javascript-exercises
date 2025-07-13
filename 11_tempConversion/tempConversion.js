const convertToCelsius = function (tempf) {
  let inCelcius = ((tempf - 32) * 5) / 9;
  const roundedresult = parseFloat(inCelcius.toFixed(1));

  return roundedresult;
};

const convertToFahrenheit = function (tempc) {
  let inFahrenheit = (tempc * 9) / 5 + 32;
  const roundedresult = parseFloat(inFahrenheit.toFixed(1));

  return roundedresult;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
