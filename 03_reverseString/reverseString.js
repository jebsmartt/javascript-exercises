const reverseString = function(string) {
    let characters = string.split("")
    let newOrder = []
    while (characters.length > 0) {
        newOrder.push(characters.pop())
    }
    const reversedString = newOrder.join("")
    return reversedString
};

// Do not edit below this line
module.exports = reverseString;
