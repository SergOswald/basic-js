const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam( members ) {
 // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  if( members === "number" || members === "boolean" || members === null || members === undefined || members === "object") {
    return false ;
  }else{
  var ar1 = members.filter( e => typeof e === "string" ).map( e => e[ 0 ] ).sort().join( "" ).toUpperCase() ;

  return ar1 ;
  } ;
}

module.exports = {
  createDreamTeam
};
