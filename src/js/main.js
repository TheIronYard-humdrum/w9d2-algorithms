var visa = 4417123467899113;

function checkForDoubleDigits(number) {
  for ( var i = 0; i < number.length; i++ ) {
    let digits = (""+number[i]).split("");
    if (digits.length > 1) {
      number[i] = sum(digits)
    }
  }
  return number;
}

function double(number) {
  number = number.map(function(num) {
    return num + num;
  })
  return number;
}

function sum(number) {
  summed = number.reduce(function (a, b) {
    return Number(a) + Number(b)
  })
  return summed
}

function evenIndexed(number) {
  evens = [];
  for (var i = 0; i < number.length; i += 2) {
    evens.push(Number(number[i]))
  }
  return evens
}

function oddIndexed(number) {
  odds = []
  for (var i = 1; i <= number.length; i += 2) {
    odds.push(Number(number[i]))
  }
  return odds
}

// add a simplifier to check if any of the summed
// or doubled numbers resulted in double digit numbers

function validate(cc) {
  let digits = (""+cc).split(""); //split digits
  odds = oddIndexed(digits); // get all odd indexes
  evens = evenIndexed(digits); // get all even idexes
  summedEvens = sum(evens); // sum evens
  doubledOdds = double(odds); //dobule odds
  doubledOddsConsolidated = checkForDoubleDigits(doubledOdds) //consolidate double digit numbers
  summedOddsConsolidated = sum(doubledOddsConsolidated) //add sum the newly consolidated digits
  let total = summedOddsConsolidated + summedEvens; // sum even and odd manipulated
  if (total % 10 === 0) { // divisible by 10 valid check
    return true
  } else {
    return false
  }
}