const repeatString = function( str, num ) {
  
  if( num < 0 ) {
    return "ERROR";
  }

  if( 0 === str.length ) {
    return str;
  }
  
  return str.repeat(num);
};

// Do not edit below this line
module.exports = repeatString;
