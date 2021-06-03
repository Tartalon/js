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
// Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это число, равное сумме всех своих собственных делителей.

function checkPerfectNumber(x) {
  let res = 0;

  for (let i = 1; i < x; i++) {
    if (x % i === 0) {
      res += i;
    }
  }
  return res === x ? true : false;
}
// console.log(checkPerfectNumber(496));

// 6 =====================
// Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и выводит только те числа из диапазона, которые являются совершенными. Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет.

function perfectNumbers(min, max) {
  let res = '';
  for (let i = min; i <= max; i++) {
    if (checkPerfectNumber(i)) {
      res += `${i} `;
    }
  }
  return res;
}
// console.log(perfectNumbers(2, 500));

// 7 ====================
// Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.

function displayTime(h, m, s) {
  let hour = h,
    minutes = m,
    seconds = s;

  if (!m) minutes = '00';
  if (!s) seconds = '00';

  return `Time is: ${hour}:${minutes}:${seconds}`;
}

// 8 =====================
// Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.
function getTimeInSeconds(h, m, s) {
  return (h * 60 + m) * 60 + s;
}
// console.log(getTimeInSeconds(2, 35, 10));

// 9 =====================
// Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».
function getSecondsInTime(s) {
  let hour = Math.floor(s / 3600) % 24;
  let sec = s % 60;
  let min = Math.round(s / 60) % 60;

  if (hour < 10) hour = '0' + hour;
  if (min < 10) min = '0' + min;
  if (sec < 10) sec = '0' + sec;

  return `Time is: ${hour}:${min}:${sec}`;
}
// console.log(getSecondsInTime(5326));

// 10 ====================
// Написать функцию, которая считает разницу между датами. Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс». При выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс»

function getTimeDifference(h1, m1, s1, h2, m2, s2) {
  const firstTime = getTimeInSeconds(h1, m1, s1);
  const secondTime = getTimeInSeconds(h2, m2, s2);
  let difference;

  if (firstTime === secondTime) {
    return (difference = 0);
  } else if (firstTime > secondTime) {
    difference = firstTime - secondTime;
  } else {
    difference = secondTime - firstTime;
  }

  return getSecondsInTime(difference);
}
// console.log(getTimeDifference(23, 35, 40, 12, 20, 55));
