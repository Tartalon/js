// Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).
// let age = prompt('Ваш возраст?');
// if (age < 0) {
//   alert('Еще не родился')
// } else if (age > 100) {
//   alert('Так вы долгожитель!');
// } else {
//   if (age < 13) {
//     alert('Ребенок')
//   } else if (age >= 13 && age < 18) {
//     alert('Подросток')
//   } else if (age >= 18 && age < 60) {
//     alert ('Взрослый');
//   } else {
//     alert('Пенсионер')
//   }
// }


// Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).
// let num = prompt('Введите число от 0 до 9');
// switch (num) {
//   case '0':
//   alert(')')
//   break;
//   case '1':
//   alert('!')
//   break;
//   case '2':
//   alert('@')
//   break;
//   case '3':
//   alert('#')
//   break;
//   case '4':
//   alert('$')
//   break;
//   case '5':
//   alert('%')
//   break;
//   case '6':
//   alert('^')
//   break;
//   case '7':
//   alert('&')
//   break;
//   case '8':
//   alert('*')
//   break;
//   case '9':
//   alert('(')
// }

// Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.
// let num2 = prompt('Введите трехзначное число');
// if (num2.length !== 3) {
//   alert ('Введено не трехзначное число');
// } else if (!Number(num2)) {
//  alert ('Введено не число');
// } else {
//   if (num2[0] === num2[1] || num2[0] === num2[2] || num2[1] === num2[2]) {
//   alert ('Есть одинаковые числа');
//   } else {
//     alert('Нет одинаковых чисел');
//   }
// }

// Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.
// let year = prompt('Введите год');
// if ((year % 4) === 0 && (year % 100) !== 0) {
//   alert ('Год высокосный');
// } else {
//   alert('Год НЕ высокосный');
// }

// Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.
// let num5 = prompt('Введите пятизначное число');
// if (num5 === num5.split('').reverse().join('')) {
//   alert('число палиндром');
// } else {
//   alert('Число НЕ палиндром');
// }

// function palindrom(str) {
//   const len = Math.floor(str.length / 2);
//   for (let i = 0; i < len; i++) {
//     if (str[i] !== str[str.length - i -1]) {
//       return false;
//     }
//   }
//   return true;
// }

// Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.
// const covertLab = document.querySelector('.covert-lab'),
// convertInp = document.querySelector('.convert-inp'),
// convertButton = document.querySelector('.convert-button'),
// answerSpan = document.querySelector('.answer__span'),
// convertErr = document.querySelector('.error'),
// eur = document.querySelector('.eur'),
// uan = document.querySelector('.uan'),
// azn = document.querySelector('.azn');

// convertButton.addEventListener('click', (event) => {
//   event.preventDefault();
//   convertErr.textContent = '';
//  if (convertInp.value === '' || convertInp.value === '0') {
//    convertErr.textContent = 'Error, Вы ввели не верное значение';
//    convertInp.value = '';
//  } else {
//   convertErr.textContent = convertInp.value + 'usd';
//   eur.textContent = convertInp.value * 0.85;
//   uan.textContent = convertInp.value * 27.34;
//   azn.textContent = convertInp.value * 1.7;
//   convertInp.value = '';
//  }
// });

// Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.
// const buyInp = document.querySelector('.buy__inp'),
//   buyButton = document.querySelector('.buy__button'),
//   buyAnswerSpan = document.querySelector('.buy__answer-span'),
//   buyError = document.querySelector('.buy__error');

// buyButton.addEventListener('click', (event) => {
//   event.preventDefault();
//   if (buyInp.value === '' || buyInp.value === '0') {
//     buyError.textContent = 'Не верное значение';
//   }
//   if (buyInp.value < 200) {
//     buyAnswerSpan.textContent = buyInp.value;
//   } else if (buyInp.value < 300 && buyInp.value >= 200) {
//     buyAnswerSpan.textContent = buyInp.value - (buyInp.value * 0.03);
//   } else if (buyInp.value >= 300 && buyInp.value < 500) {
//     buyAnswerSpan.textContent = buyInp.value - (buyInp.value * 0.05);
//   } else if (buyInp.value >= 500) {
//     buyAnswerSpan.textContent = buyInp.value - (buyInp.value * 0.07);
//   }
//   buyInp.value = '';
// });

// Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.
const perimeterInpSquare = document.querySelector('.perimeter__inp--square'),
  perimeterInpCircle = document.querySelector('.perimeter__inp--circle'),
  perimeterButton = document.querySelector('.perimeter__button'),
  perimeterAnswer = document.querySelector('.perimeter__answer');

perimeterButton.addEventListener('click', (event) => {
  const diameter = perimeterInpCircle.value / Math.PI,
    length = perimeterInpSquare.value / 4;
  event.preventDefault();
  if (perimeterInpSquare.value === '' || perimeterInpSquare.value <= 0 || perimeterInpCircle.value === '' || perimeterInpCircle.value <= 0) {
    perimeterAnswer.textContent = 'Не коректное значение';
  }
  
  if ()
});

// Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.

// Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите возможность перехода на следующий месяц, год, а также високосный год.