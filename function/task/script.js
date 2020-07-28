// Создать ф-цию multiply, которая будет принимать любое количество чисел и возвращать их произведение
// Пример вызова:
// multiply(1,2,3) => результат 6 (1*2*3);
// Если нет ни одного аргумента, вернуть ноль: multiply() // 0

// function multiply() {
//   let result = 1;
//   if (!arguments.length) {
//     result = 0;
//   } else {
//     for (let i = 0; i < arguments.length; i++) {
//       result *= arguments[i];
//     }
//   }
//   return result;
// }
// console.log(multiply(2, 4, 5, 6));



// Создать функцию, которая принимает строку и возвращает строку-перевертыш:
// reverseString('test'); // 'tset'
// reverseString(''); // ''
// reverseString(null); // llun
// reverseString(undefined); // denifednu
// reverseString(); // denifednu

function reverseString(str) {
  let newStr = String(str);
  let revStr = '';
  for (let i = newStr.length - 1; i >= 0; i--) {
    revStr += newStr[i];
  }
  console.log(revStr);
}

// function reverseString(str) {
//   newStr = str.toString();
//   return newStr;
// }

// reverseString('test');
// reverseString('');
// reverseString(null);
// reverseString(undefined);
// reverseString();
console.log(reverseString(''));