const leapYears = function (year) {
  // leap year if divisible by 4
  // leap year if NOT dividisble by 100
  // leap year if divisible by 400
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? true : false;
};

// Do not edit below this line
module.exports = leapYears;
