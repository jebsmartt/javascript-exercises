const removeFromArray = function(array,...values) {
    // get the array
    let userArray = array
    // remove items from the array
    for (let i = 0; i < values.length; i++) {
        userArray = userArray.filter((item) => item !== values[i])
    }
    // return the array
    return userArray
};

// Do not edit below this line
module.exports = removeFromArray;
