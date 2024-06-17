const getAge = function( p ) {
  p.yearOfDeath ??= new Date().getFullYear();
  return p.yearOfDeath - p.yearOfBirth;
}

const findTheOldest = function( p ) {
  return p.reduce( 
    ( oldestPerson, currentPerson ) => {
      const oldestPersonAge = getAge( oldestPerson );
      const currentPersonAge = getAge( currentPerson );
      return oldestPersonAge < currentPersonAge ? currentPerson : oldestPerson;
    }
  );  
};

// Do not edit below this line
module.exports = findTheOldest;
