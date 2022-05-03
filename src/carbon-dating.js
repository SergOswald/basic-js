const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
 function dateSample( sampleActivity ) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  if( isNaN( sampleActivity ) /* || isFinite( sampleActivity )*/ || Number( sampleActivity ) <= 0 || sampleActivity <= 0 || typeof sampleActivity !== "string" 
  || sampleActivity === undefined || sampleActivity  === null || typeof sampleActivity === "boolean"  ) {
    return false ; 
  }else{
    return Math.round( 10000 * Math.log( 15 / Number( sampleActivity ) ) / 1.2096298 ) ; 
  } ;

  //if( typeof sampleActivity !== "string" || Number( sampleActivity ) <= 0
  //|| sampleActivity === undefined || sampleActivity  === null 
  //||  typeof sampleActivity === "number" || typeof sampleActivity === "boolean" 
  // 
  
  
} ;

module.exports = {
  dateSample
};
