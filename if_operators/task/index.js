let a, v;
a = 1 && 'string';
a = null || 25; /* запинается на true */
a = null && 25; /* запинается на false */
a = null && 0 && 35; /* запинается на false */

a = 12 + 14 + '12'; /* 2612 */
a = 3 + 2 - '1'; /* 4 */
a = '3' + 2 - 1; /* 31 */
a = true + 2; /* 3 */
a = undefined + 2; /* при любый математических операциях с undefined кроме сложения со строкой, результат будет NaN */
a = null + 5; /* 5 */
a = true + undefined; /* NaN */

console.log(a);


let modal = 'visible';
if (modal === 'hidden') {
  modal = 'visible';
} else {
  modal = 'hidden';
};

console.log(modal);


let b = 3;
if (b === 0) {
  b = 1;
} else if (b < 0) {
  b = 'less then zero';
} else {
  b *= 10;
};

console.log(b);


// Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }. Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false.

let car = {
  name: 'Lexus',
  age: 10,
  create: 2008,
  needRepair: false 
};

if (car.age > 5) {
  console.log('Need Repair');
  car.needRepair = true;
};

console.log(car);



// Дан объект let item = { name: 'Intel core i7', price: '100$', discount: '15%' }.Написать условие если у item есть поле discount и там есть значение которое не NaN а также есть поле price значение которого также не NaN то в объекте item создать поле priceWithDiscount и записать туда цену с учетом скидки и вывести ее в консоль, обратите внимание что поля discount и price это строки и вам из них нужно получить числа чтобы выполнить расчет.иначе если поля discount нет то вывести просто поле price в консоль.

let item = {
  name: 'Intel core i7',
  price: '100$',
  discount: '15%'
};
// мы выносим цену и скидку в отдельные переменные что бы несколько раз не вызывать parseFloat
let discount = parseFloat(item.discount);
let price = parseFloat(item.price);

// проверяем что цена и скинда не являются NaN так как это важно при расчетах
if(!isNaN(discount) && !isNaN(price)) {
  item.priceWithDiscount = price - (price / 100 * discount) + '$';
  console.log(item.priceWithDiscount);
} else {
  console.log(item.price);
}



// Дан следующий код:
// let product = {
//   name: “Яблоко”,
//   price: “10$”
// };

// let min = 10; // минимальная цена
// let max = 20; // максимальная цена

// Написать условие если цена товара больше или равна минимальной цене и меньше или равна максимальной цене то вывести в консоль название этого товара, иначе вывести в консоль что товаров не найдено.

let product = {
  name: 'Яблоко',
  price: '10$'
};
let min = 10;
let max = 20;

if (parseFloat(product.price) >= min && parseFloat(product.price) <= 20) {
  console.log(product.name);
} else {
  console.log('product not found');
};



let value = "hidden";
if (value != "hidden") {
  console.log('value');
} else if (value === "hidden") {
  value = 'visible';
  console.log(value);
}