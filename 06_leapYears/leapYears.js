const leapYears = function(year) {
    
    //safety checks
    if (!Number.isInteger(year) || year < 0) return "ERROR";
    // exception: years divisible by 100 unless also divisible by 400
    if (year % 400 == 0) {
        return true
    } else if (year % 4 == 0 && year % 100 != 0) {
        return true
    } else {
        return false
    }
};

// Do not edit below this line
module.exports = leapYears;
