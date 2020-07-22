// В данных задачах старайтесь не использовать методы массивов.Используйте циклы и условия.
// Вопросы к этому заданию
// На основе строки“ i am in the easycode” сделать новую строку где первые буквы каждого слова будут в верхнем регистре.Использовать for или while.

let str = 'i am in the easycode';
let res = '';
// for (let i = 0; i < str.length; i++) {
// if(i === 0 || str[i - 1] === ' ') {
//   res += str[i].toUpperCase();
// } else {
//   res += str[i];
// }
//   res = (i === 0 || str[i - 1] === ' ') ? res += str[i].toUpperCase() : res += str[i];
// }
// console.log(res);



// Дана строка“ tseb eht ma i”.Используя циклы, сделать строку - перевертыш(то есть последняя буква становится первой, предпоследняя - второй итд).
// let str2 = 'tseb eht ma i';
// let res2 = '';
// for (let i = str2.length - 1; i >= 0; i--) {
//   res2 += str2[i];
// }
// console.log(res2);



// Факториал числа - произведение всех натуральных чисел от 1 до n включительно: 3! = 3 * 2 * 1, 5! = 5 * 4 * 3 * 2 * 1. С помощью циклов вычислить факториал числа 10. Использовать for.
// let num = 10;
// let factor = 1;
// for (let i = num; i >= 1; i--) {
//   factor *= i;
// }
// console.log(factor);




// На основе строки“ JavaScript is a pretty good language” сделать новую строку, где каждое слово начинается с большой буквы, а пробелы удалены.Использовать for.
// let str = 'JavaScript is a pretty good language';
// let newStr = '';
// for (let i = 0; i < str.length; i++) {
//   if (str[i] === ' ') {
//     continue;
//   } else {
//     newStr += str[i].toLowerCase();
//   }
// }
// console.log(newStr);



// Найти все нечетные числа в массиве от 1 до 15 включительно и вывести их в консоль.Массив[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] Использовать for of.
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let oddNum = [];
for (let num of arr) {
  if (num % 2 !== 0) {
    oddNum.push(num);
  }
}
console.log(oddNum);



// Дан объект:
//   let list = {
//     name: ‘denis’,
//     work: ‘easycode’,
//     age: 29
//   }
// Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре.Использовать for in .
let list = {
  name: 'denis',
  work: 'easycode',
  age: 29
}

for ()