const palindromes = function (aString) {
    const filteredCharacters = aString.split('').filter(char => /[a-zA-Z0-9]/.test(char)).join('');
    const reversedCharacters = [...filteredCharacters].reverse().join('')
    return filteredCharacters === reversedCharacters
};

// const inputString = "Hello, World! 123";

// const filteredCharacters = inputString.split('').filter(char => /[a-zA-Z0-9]/.test(char)).join('');


// Do not edit below this line
module.exports = palindromes;
