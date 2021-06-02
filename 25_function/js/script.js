'use strict';

//  1 ==================
// Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.
function checkMorOrLess(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
}
// console.log(checkMorOrLess(4, 4));

// 2 ==================
// Написать функцию, которая вычисляет факториал переданного ей числа.

function factorial(x) {
  let fuct;

  if (x === 0 || x === 1) return 1;

  fuct = x * factorial(x - 1);
  return fuct;
}
// console.log(factorial(5));

// 3 =================
// Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.

const combineNumbers = (a, b, c) => {
  let number = '';

  number = String(a) + b + c;
  return +number;
};
// console.log(combineNumbers(2, 4, 1));

//  4 ==================
// Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.

function getSquare(a, b) {
  if (!a || a === 0 || a < 0 || b < 0) return 'No or wrong arguments';

  if (b === undefined) return a * a;
  if (b === 0) return 'cannot be multiplied by 0';

  return a * b;
}
// console.log(getSquare(2, 9));

// 5 =====================
// Написать функцию, которая проверяет, является ли переданное ей число совершенным.
