function clearInp() {
  for (let i = 0; i < arguments.length; i++) {
    arguments[i].value = '';
  }
}

// Определить количество цифр в введенном числе.
const calcNum = document.querySelector('#calcNum');
const checkQuantity = document.querySelector('.checkQuantity');
const calcNumAnswer = document.querySelector('.calcNumAnswer');

checkQuantity.addEventListener('click', function (e) {
  e.preventDefault();
  calcNumAnswer.textContent = '';
  calcNumAnswer.textContent = calcNum.value.length;
  calcNum.value = '';
});

// 5 ==============

const evenOddInputs = document.querySelectorAll('.evenOdd_input');
const positive = document.querySelector('.evenOdd__positive'),
  negative = document.querySelector('.evenOdd__negative'),
  zero = document.querySelector('.evenOdd__zero'),
  even = document.querySelector('.evenOdd__even'),
  odd = document.querySelector('.evenOdd__odd'),
  evenOddButton = document.querySelector('.evenOdd__button');

evenOddButton.addEventListener('click', function (e) {
  e.preventDefault();
  let positiveNum = 0,
    negativeNum = 0,
    zeroNum = 0,
    evenNum = 0,
    oddNum = 0;
  for (let i = 0; i < evenOddInputs.length; i++) {
    zeroNum++;
  }
  if (+evenOddInputs[i].value > 0) {
    positiveNum++;
    if (+evenOddInputs[i].value % 2 === 0) {
      evenNum++;
    } else {
      oddNum++;
    }
  }

  if (+evenOddInputs[i].value < 0) {
    negativeNum++;
    if (+evenOddInputs[i].value % 2 === 0) {
      evenNum++;
    } else {
      oddNum++;
    }
  }

  positive.textContent = `Положительных: ${positiveNum}`;
  negative.textContent = `Отрицательных: ${negativeNum}`;
  zero.textContent = `Нолей: ${zeroNum}`;
  even.textContent = `Четных: ${evenNum}`;
  odd.textContent = `Не четных: ${oddNum}`;
});

// 6 ==============

const calculatorFirstNum = document.querySelector('.calculator__first-num');
const calculatorSecondNum = document.querySelector('.calculator__second-num');
const calculatorSign = document.querySelector('.calculator__sign');
const calculatorButton = document.querySelector('.calculator__button');
const calculatorResult = document.querySelector('.calculator__result-span');

calculatorButton.addEventListener('click', e => {
  e.preventDefault();
  let firstNum = +calculatorFirstNum.value;
  let secondNum = +calculatorSecondNum.value;
  let sign = calculatorSign.value;
  let result;

  console.log(firstNum, secondNum, sign);

  switch (sign) {
    case '+':
      result = firstNum + secondNum;
      break;
    case '-':
      result = firstNum - secondNum;
      break;
    case '*':
      result = firstNum * secondNum;
      break;
    case '/':
      result = firstNum / secondNum;
      break;
    case '%':
      result = firstNum % secondNum;
      break;
    default:
      result = 'Вы ввели не верный знак';
  }

  calculatorResult.textContent = `${firstNum} ${sign} ${secondNum} = ${result}`;

  clearInp(calculatorFirstNum, calculatorSecondNum, calculatorSign);
});

// 7 =================

// a ==============

// const numberInput = document.querySelector('#number__input'),
//   shiftInput = document.querySelector('#shift__input'),
//   shiftResult = document.querySelector('.shift__result'),
//   shiftButton = document.querySelector('.shift__button');

// shiftButton.addEventListener('click', function () {
//   let numbers = numberInput.value;
//   let shift = shiftInput.value;
//   let shiftNum = '';
//   let res = '';

//   for (let i = 0; i < shift; i++) {
//     shiftNum += numbers[i];
//   }
//   res = numbers.replace(shiftNum, '') + shiftNum;

//   shiftResult.textContent = `Результат: ${res}`;
//   console.log(numbers);
// });

//  b ==================

const inputNumber = document.querySelector('.inputNumber');
const shiftNum = document.querySelector('.shiftNumber');
const shiftNumButton = document.querySelector('.shift-num__button');
const shiftNumResultSpan = document.querySelector('.shift-num__result-span');

shiftNumButton.addEventListener('click', e => {
  e.preventDefault();

  let inputNum = inputNumber.value;
  let inputShift = shiftNum.value;
  let shift = '';
  let res = '';

  for (let i = 0; i < inputShift; i++) {
    shift += inputNum[i];
  }

  res = inputNum.replace(shift, '') + shift;
  shiftNumResultSpan.textContent = res;

  clearInp(inputNumber, shiftNum);
});

// 8 ============================

// const weekDays = document.querySelector('.weekDays');

// weekDays.addEventListener('click', () => {
//   let date = new Date();
//   let day = date.getDay();
//   let askDay;

//   function getDay() {
//     checkNonExistentDay();
//     switch (day) {
//       case 0:
//         (today = 'Воскресенье'), day++;
//         break;
//       case 1:
//         (today = 'Понедельник'), day++;
//         break;
//       case 2:
//         (today = 'Вторник'), day++;
//         break;
//       case 3:
//         (today = 'Среда'), day++;
//         break;
//       case 4:
//         (today = 'Четверг'), day++;
//         break;
//       case 5:
//         (today = 'Пятница'), day++;
//         break;

//       default:
//         (today = 'Суббота'), day++;
//         break;
//     }
//   }

//   function checkNonExistentDay() {
//     if (day > 6) day = 0;
//   }

//   getDay();

//   askDay = confirm(`День недели ${day}. Хотите увидеть следующий день?`);
//   if (askDay) {
//     getDay();
//   }
//   console.log(day);
// });

// 9 =================
for (let i = 2; i <= 9; i++) {
  for (let k = 1; k <= 10; k++) {
    // console.log(`${i} * ${k} = ${k * i}`);
  }
}

// 10 =============

const guessNumberButton = document.querySelector('.guess-number__button');

guessNumberButton.addEventListener('click', e => {
  e.preventDefault();

  let max = 100;
  let mid = 50;
  let min = 0;
  let sign;

  do {
    mid = Math.floor(min + (max - min) / 2);

    sign = prompt(
      `Загаданное число больше (>) ${mid}, меньше (<) ${mid} или = ${mid}? /nВведите знак:`
    );

    if (!sign) {
      alert('Вы не ввели знак');
      return;
    }

    if (sign === '>') {
      min = mid;
    } else if (sign === '<') {
      max = mid;
    } else if (sign === '=') {
      alert(`Мы его нашли: ${mid}`);
    } else {
      alert(`${sign} - не верный знак`);
    }
  } while (sign != '=');
});
