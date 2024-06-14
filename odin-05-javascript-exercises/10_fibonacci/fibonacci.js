const fibonacci = function( f ) {
  const fibSeq = [ 1, 1 ];
  let fibEnd = +f;

  if ( fibEnd < 0 ) {
    return "OOPS";
  }
  
  if( 0 === fibEnd ) {
    return 0;
  }

  if( 1 === fibEnd || 2 === fibEnd ) {
    return 1;
  }

  for( let i = 2; i < fibEnd; i++ ) {
    fibSeq.push( fibSeq[ i-2 ] + fibSeq[ i-1 ] );
  }

  return fibSeq[ fibSeq.length - 1 ];
};

// Do not edit below this line
module.exports = fibonacci;
