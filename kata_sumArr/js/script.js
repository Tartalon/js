'use strict';
// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.
// Examples

// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398

function sum(numbers) {
  let summ = 0;
  if (numbers.length === 0) {
    summ = 0;
  } else if (numbers.length === 1) {
    summ = numbers[0];
  } else {
    for (let i = 0; i < numbers.length; i++) {
      summ += numbers[i];
    }
  }
  return summ;
}
// console.log(sum([4, 15, 4]));

// sum = function (numbers) {
//   return numbers.reduce(function(t, n){
//     return t + n;
//   }, 0);
// };

// ===========================================
// 1

let input = [[1, 5], [2], [-1, -3]];

function smallestProduct(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(
      arr[i].reduce(function (acc, current) {
        return acc * current;
      })
    );
  }
  let res = newArr[0];
  for (let elem of newArr) {
    res = elem < res ? elem : res;
  }
  return res;
}

// 2
const smallestProduct = a => Math.min(...a.map(e => e.reduce((p, c) => p * c)));
