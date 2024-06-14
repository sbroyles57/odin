const palindromes = function ( pal ) {
    const pat = /[^A-Za-z0-9]/g;
    let lowerPal = pal.toLowerCase().replace( pat, '' );
    let revPal = lowerPal.split( '' ).reverse().join( '' );
    return revPal === lowerPal;
};

// Do not edit below this line
module.exports = palindromes;
