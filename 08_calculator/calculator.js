const add = function(a,b) {
	return a + b
};

const subtract = function(x,y) {
	return x - y
};

const sum = function(numbers) {
	return numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue, 0
    );
};

const multiply = function(...numbers) {
  return numbers.reduce(
    (acc, current) => acc * current, 1
  )
};

const power = function(x,y) {
	return x ** y
};

const factorial = function(x) {
  const numbers = Array.from({ length: x }, (_, index) => index + 1)

  return numbers.reduce(
  (acc, current) => acc * current, 1
  )
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
