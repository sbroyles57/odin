const sumAll = function( start, end ) {

    let result = 0;

    if( !( Number.isInteger( start ) && start > 0 ) ) {
      return "ERROR";
    }

    if( !( Number.isInteger( end ) && end > 0 ) ) {
      return "ERROR";
    }

    let tmpStart = ( start > end ) ? end : start; 
    let tmpEnd = ( start < end ) ? end : start;

    for( let i = tmpStart; i <= tmpEnd; i++ ) {
      result += i; 
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
