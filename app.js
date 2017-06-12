'use strict';
var numbers = [3,4,5];
var multipliedNumbers = ['potato'];

function timesNine() {
  for (var i = 0; i < numbers.length; i++){
    multipliedNumbers.push(numbers[i] * 9);
  }
}

timesNine();
console.log(multipliedNumbers);
