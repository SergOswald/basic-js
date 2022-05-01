const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats( matrix ) {
 // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let len1 = matrix.length ;

  var sumtotal = 0 ;
  for( let i = 0 ; i < len1 ; i++ ) {
    var len2 = matrix[ i ].length ;
    var sum = 0 ;
    for( let j = 0 ; j < len2 ; j++ ) {
      if( matrix[ i ][ j ] === '^^' ) {
        var a = 1 ;
      }else{
        a = 0 ;
      } ;
      sum = sum + a ;
    } ;
    sumtotal = sumtotal + sum ;
  } ;
  return sumtotal ;
} ;



module.exports = {
countCats
} ;
