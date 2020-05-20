// Получить первую и последнюю буквы строки
let string = "some test string";
console.log(string[0]);
console.log(string[string.length - 1]);

// Сделать первую и последнюю буквы в верхнем регистре
console.log(string[0].toUpperCase());
console.log(string[string.length - 1].toUpperCase());

// Найти положение слова ‘string’ в строке
console.log(string.indexOf("string"));

// Найти положение второго пробела(“вручную” ничего не считать)
console.log(string.lastIndexOf(" "));

// Получить строку с 5 - го символа длиной 4 буквы
console.log(string.substr(5, 4));

// Получить строку с 5 - го по 9 - й символы
console.log(string.slice(5, 9));

// Получить новую строку из исходной путем удаления последних 6-и символов(то есть исходная строка без последних 6-и символов)
console.log(string.slice(0, -7));

// Из двух переменных a = 20 и b = 16 получить переменную string, в которой будет содержаться текст “2016”
let a = 20;
let b = 16;
// let str = a.toString() + b.toString();
// console.log(str);
console.log(String(str));
