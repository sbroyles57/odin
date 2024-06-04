const convertToCelsius = function( degF ) {
  return Math.round( (( degF - 32 ) * 5 / 9) * 10 ) / 10;
};

const convertToFahrenheit = function( degC ) {
  return Math.round( (degC * 9 / 5 + 32) * 10 ) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
