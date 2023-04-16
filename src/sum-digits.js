const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */

function sum( nk ) {
  let sum = 0 ;
  for ( let i = 0 ; i < nk.length ; i++ ) {
    sum = sum + nk[ i ] ;
  } ;
  return sum ;
  } ;

function getSumOfDigits( n ) {
 // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
   let sum = 0, tmp ;
  if( n === 10 ) {
    return 1 ;
  } ;
  if( n < 10 ) {
    return n ;
  }else{
    while( n ) {
        tmp = n % 10 ;
        n = ( n - tmp ) / 10 ;
        sum += tmp ;
    } ;
    return sum ;
  } ;
  
} ;


module.exports = {
  getSumOfDigits
};
