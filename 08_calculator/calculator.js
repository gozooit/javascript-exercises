const isNumber = function(value) {
  return typeof value === 'number' && isFinite(value);
}

const add = function(a, b) {
	if (isNumber(a) && isNumber(b)) {
    return a + b;
  } else return "Error";
};

const subtract = function(a, b) {
  if (isNumber(a) && isNumber(b)) {
    return a - b;
  } else return "Error";
};

const sum = function(numberArray) {
  let res = 0;
  if (!numberArray) return res;
  for (let i = 0; i < numberArray.length; i++) {
    if (isNumber(numberArray[i])) {
      res +=numberArray[i];
    } else return "Error";
  }
  return res;
};

const multiply = function(numberArray) {
  let res = 1;
  if (!numberArray) return res;
  for (let i = 0; i < numberArray.length; i++) {
    if (isNumber(numberArray[i])) {
      res *=numberArray[i];
    } else return "Error";
  }
  return res;
};

const power = function(a, b) {
  if (isNumber(a) && isNumber(b)) {
    return Math.pow(a, b);
  } else return "Error";
};

const factorial = function(a) {
  let res = 1;
  if (isNumber(a) && (a >= 0)) {
    if (a === 0) {
      return 1;
    } else {
      for (a; a > 0; a--) {
        res *= a;
      };
      return res;
    };
  } else return "Error";
};

console.log(factorial(-1));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
