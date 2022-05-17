const round = function(value, precision) {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

const ftoc = function(t) {
  return round(((t - 32) / 1.8), 1)
};

const ctof = function(t) {
  return round((t * 1.8 + 32).toFixed(1), 1);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
