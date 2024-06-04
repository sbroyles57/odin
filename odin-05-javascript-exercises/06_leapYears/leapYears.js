const leapYears = function( year ) {

    if( 0 === year % 4 ) {
      if( 0 != year % 100 ) {
        return true;
      } else {
        if( 0 === year % 400 ) {
          return true;
        }
      }
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
