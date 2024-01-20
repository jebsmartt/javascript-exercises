const findTheOldest = function(people) {
    return people.reduce ((oldestPerson, currentPerson) => {
        let calculatedAge = (currentPerson) => {
            if (currentPerson.yearOfDeath === undefined) {
                const currentYear = new Date().getFullYear();
                return (currentYear - currentPerson.yearOfBirth)
            } else {
                return (currentPerson.yearOfDeath - currentPerson.yearOfBirth)
            }
        }
        const oldestPersonAge = calculatedAge(oldestPerson)
        const currentPersonAge = calculatedAge(currentPerson)

        return currentPersonAge > oldestPersonAge ? currentPerson : oldestPerson;
    }, people[0])
};

// Do not edit below this line
module.exports = findTheOldest;
