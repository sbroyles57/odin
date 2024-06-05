const leapYears = function( year ) {

    if( 0 === year % 4 ) {        // A leap year is a year that is divisible by 4
      if( 0 !== year % 100 ) {    // but not divisible by 100
        return true;
      } else {                    // unless
        if( 0 === year % 400 ) {  // it's divisible by 400
          return true;
        }
      }
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
