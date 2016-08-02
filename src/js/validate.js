var visa = 4417123467899113;

function consolidate(number) {
  for ( var i = 0; i < number.length; i++ ) {
    var digits = (""+number[i]).split("");
    if (digits.length > 1) {
      number[i] = sum(digits)
    }
  }
  return number;
}

function double(number) {
  var number = number.map(function(num) {
    return num + num;
  })
  return number;
}

function sum(number) {
  var summed = number.reduce(function (a, b) {
    return Number(a) + Number(b)
  })
  return summed
}

function evenIndexed(number) {
  var evens = [];
  for (var i = 0; i < number.length; i += 2) {
    evens.push(Number(number[i]))
  }
  return evens
}

function oddIndexed(number) {
  var odds = []
  for (var i = 1; i <= number.length; i += 2) {
    odds.push(Number(number[i]))
  }
  return odds
}

// Version one, litteral step by step

// function validate(cc) {
//   var digits = (""+cc).split(""); //split digits
//   var odds = oddIndexed(digits); // get all odd indexes
//   var evens = evenIndexed(digits); // get all even idexes
//   var summedEvens = sum(evens); // sum evens
//   var doubledOdds = double(odds); //dobule odds
//   var doubledOddsConsolidated = consolidate(doubledOdds) //consolidate double digit numbers
//   var summedOddsConsolidated = sum(doubledOddsConsolidated) //add sum the newly consolidated digits
//   var total = summedOddsConsolidated + summedEvens; // sum even and odd manipulated
//   if (total % 10 === 0) { // divisible by 10 valid check
//     return true
//   } else {
//     return false
//   }
// }

//Version two, functions stringed together - easier to read

function validate2(cc) {
  var digits = (""+cc).split("");
  var odds = oddIndexed(digits);
  var evens = evenIndexed(digits);

  var total = sum(evens) + sum(consolidate(double(odds)))
  return total % 10 === 0 ? true : false
}

export { validate2 }