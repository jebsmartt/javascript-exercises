const sumAll = function(number1, number2) {
    function typeCheck(number) {
        if (typeof number === 'number' && number % 1 === 0 && number > -1) {
            return true
        } else {
            return false
        }
    }

    if (typeCheck(number1) && typeCheck(number2)) {
        let highNumber = Math.max(number1,number2)
        let lowNumber = Math.min(number1,number2)
        let sum = 0

        for (i = lowNumber;i <= highNumber; i++) {
            sum += i
        }
        
        return sum

    } else {
        return "ERROR"
    }
};

// Do not edit below this line
module.exports = sumAll;
