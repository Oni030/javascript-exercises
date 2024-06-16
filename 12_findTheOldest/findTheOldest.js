const findTheOldest = function(array) {
  const currentYear = new Date().getFullYear();

  let oldestPerson = array.reduce((oldest, person) => {
    if (!person.yearOfDeath) {
      person.yearOfDeath = currentYear;
    };
    const personAge = person.yearOfDeath - person.yearOfBirth;
    if (!oldest || personAge > oldest.age) {
      return { ...person, age: personAge };
    };
    return oldest;
  }, null);

  return oldestPerson
};

// Do not edit below this line
module.exports = findTheOldest;
