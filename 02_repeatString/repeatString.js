const repeatString = function(string, num) {
    let i = 0
    let newString = ""
    
    if (num > -1) {
        while (i < num) {
            newString += string
            i++
        }
        return newString
    } else {
        return "ERROR"
    }
    
};

// Do not edit below this line
module.exports = repeatString;
