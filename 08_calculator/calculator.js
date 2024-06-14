const add = function(x, y) {
  return x + y;	
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(arr) {
	let sum = 0;
  for(i = 0; i < arr.length; i++) {
    sum += arr[i];
  };
  return sum;
};

const multiply = function(arr) {
  let product = 1;
  for(i = 0; i < arr.length; i++) {
    product *= arr[i];
  };
  return product;
};

const power = function(x, y) {
	return Math.pow(x, y);
};

const factorial = function(x) {
	let fact = 1;
  if (x === 0) {
    return fact = 1;
  };
  for(let i = 1; i <= x; i++) {
    fact *= i;
  };
  return fact;
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
