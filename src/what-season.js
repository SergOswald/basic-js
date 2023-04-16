const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
  // function UserException(message) {
  //   this.message = message;
  // }

  function getSeason( date ) {

  // if( !(d instanceof Date) ) {
  //   return "Invalid date!" ;
  // };

  // if( date === undefined ) {
  //   return "Invalid date!" ;
  // };

  if( date === undefined || date === null ) {
    return "Unable to determine the time of year!" ;
  };

  if( typeof date === "number" ) {
    return "Invalid date!" ;
  };

  // if( typeof date === "function" ) {
  //   return "Invalid date!" ;
  // };

  // if( date instanceof Object ) {
  //   return "Invalid date!" ;
  // }; 

  // if( typeof date !== "string"  ) {
  //   return "Invalid date!" ;
  // };

  // if( Date.parse( date ) === NaN  ) {
  //   throw new UserException( "Invalid date!" ) ;
  // };

  // if( !(date instanceof Date) ) {
  //   return "Invalid date!" ;
  // };
  
  // if( !isNaN(date.getTime() ) ) {
  //  return "Invalid date!" ;
  // };


  let a = date.getMonth() + 1 ;
  if( a === 1 || a === 2 || a === 12 ) {
    return "winter" ;
  };
  if( a === 3 || a === 4 || a === 5 ) {
    return "spring" ;
  };
  if( a === 6 || a === 7 || a === 8 ) {
    return "summer" ;
  } ;
  if( a === 9 || a === 10 || a === 11 ) {
    return "autumn" ;
  };

//  throw new UserException( "Invalid date!" ) ;
} ;



module.exports = {
  getSeason
};
