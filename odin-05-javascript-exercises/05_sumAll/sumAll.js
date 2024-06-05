const sumAll = function( start, end ) {

    let result = 0;

    if( !( Number.isInteger( start ) && start > 0 ) ) {
      return "ERROR";
    }

    if( !( Number.isInteger( end ) && end > 0 ) ) {
      return "ERROR";
    }

    if( start < end ) {
      [start, end] = [end, start];
    }

    for( let i = start; i <= end; i++ ) {
      result += i; 
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
