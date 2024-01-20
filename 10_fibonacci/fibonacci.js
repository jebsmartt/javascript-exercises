const fibonacci = function(index) {
    let y
    if (typeof index !== 'number') {
        y = parseInt(index)
    } else {
        y = index
    }

    if (y < 0) return "OOPS";
    if (y == 0) return 0;
    
    let a = 0
    let b = 1

    for (let i=2; i <= y; i++) {
        let current = b + a
        a = b
        b = current
    }

    return b
}

// Do not edit below this line
module.exports = fibonacci;
