const add = function( a, b ) {
	return a + b;
};

const subtract = function( a, b ) {
	return a - b;
};

const sum = function( a ) {
	
  if( !Array.isArray( a ) ) {
    return 0;
  }

  let result = 0;

  for( let i = 0; i < a.length; i++ ) {
    result += a[i];
  }

  return result;
};

const multiply = function( a ) {

  if( !Array.isArray( a ) ) {
    return 0;
  }

  let result = 1;

  for( let i = 0; i < a.length; i++ ) {
    result *= a[i];
  }

  return result;
};

const power = function( a, b ) {
	
  let result = 1;

  for( let i = 1; i <= b; i++ ) {
    result *= a;
  }

  return result;
};

const factorial = function( a ) {
		
  let result = 1;

  for( let i = a; i > 0; i-- ) {
    result *= i;
  }

  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
