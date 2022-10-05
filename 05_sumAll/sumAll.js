const sumAll = function (a, b) {
  if (!Number.isInteger(a) || !Number.isInteger(b)) return 'ERROR';
  if (a < 0 || b < 0) return 'ERROR';
  return Array.from({ length: Math.abs(a - b) + 1 }, (_, i) => i + 1).reduce((a, b) => a + b, 0);
};

// Do not edit below this line
module.exports = sumAll;
