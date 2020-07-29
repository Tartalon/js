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

// function reverseString(str) {
//   let newStr = String(str);
//   let revStr = '';
//   for (let i = newStr.length - 1; i >= 0; i--) {
//     revStr += newStr[i];
//   }
//   return revStr;
// }

// Создайте ф-ю, которая в качестве аргумента может принять строку, числа, null или undefined и возвращает строку, где каждый символ расделен пробелом и заменен на юникод-значение символа:
// getCodeStringFromText("hello") // “104 101 108 108 111”
// подсказка: в решении задачи вам помогут методы charCodeAt и trim

// function reverseString(str) {
//   let newStr = String(str);
//   let revStr = '';
//   for (let i = 0; i < newStr.length; i++) {
//     revStr += newStr.charCodeAt([i]) + ' ';
//   }
//   return revStr.trim();
// }
// console.log(reverseString('hello'));

// Создать функцию угадай число. Она принимает число от 1-10 (обязательно проверить что число не больше 10 и не меньше 0). Если число не соответствует условию то верните ошибку return new Error("Please provide number in range 0 - 10"). Если переданно не число то верните ошибку return  new Error("Please provide a valid number");
// Далле функция генерирует рандомное число от 1-10 и сравнивает с заданным числом если они совпали то возвращает строку "You win!". Eсли нет то строку "You are lose, your number is 8, the random number is 5". Числа в строке указаны как пример вы подставляете реальные числа.
// Если переданно число в виде строки оно должно быть преобразованно к числу.

function guessTheNumber(num) {
  num = +num;
  let randomNumber = Math.floor(Math.random() * 10 + 1);
  let unswer = "";
  if (num <= 10 && num >= 0) {
    console.log(randomNumber);
    if (num === randomNumber) {
      unswer = "You win!";
    } else if (typeof num !== "number") {
      unswer = new Error("Please provide a valid number");
      console.log(num);
    } else {
      unswer =
        "You are lose, your number is " +
        num +
        " the random number is " +
        randomNumber;
    }
    return unswer;
  } else {
    return new Error("Please provide number in range 0 - 10");
  }
}

console.log(guessTheNumber("12"));
