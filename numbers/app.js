// Получить число pi из Math и округлить его до 2 - х знаков после точки
let pi = Math.PI;
console.log(pi.toFixed(2));

// Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51
console.log(Math.max(15, 11, 16, 12, 51, 12, 13, 51));
console.log(Math.min(15, 11, 16, 12, 51, 12, 13, 51));

// Работа с Math.random:
// a.Получить случайное число и округлить его до двух цифр после запятой
// b.Получить случайное целое число от 0 до X. X - любое произвольное число.
let num1 = Math.random().toFixed(2);
console.log(+num1);
let num2 = Math.floor(Math.random() * 10);
console.log(+num2);

// Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду(1.3)?
let c = 0.6;
let d = 0.7;
let sum = (c * 10 + d * 10) / 10;
console.log(sum);
let sum2 = c + d;
console.log(Number(sum2.toFixed(1)));

// Получить число из строки ‘ 100 $’
let strNum = '100$';
console.log(parseInt(strNum, 10));