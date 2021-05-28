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

// 5. Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.

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
    if (+evenOddInputs[i].value === 0) {
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
  }
  positive.textContent = `Положительных: ${positiveNum}`;
  negative.textContent = `Отрицательных: ${negativeNum}`;
  zero.textContent = `Нолей: ${zeroNum}`;
  even.textContent = `Четных: ${evenNum}`;
  odd.textContent = `Не четных: ${oddNum}`;
});

// 6. Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока пользователь не откажется.

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

  // if (sign !== '+' || sign !== '-' || sign !== '*' || sign !== '/') {
  //   calculatorResult.textContent = 'Вы ввели не верный символ'
  // }

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

  clearInputs = () => {
    calculatorFirstNum.value = '';
    calculatorSecondNum.value = '';
    calculatorSign.value = '';
  };

  clearInputs();
});
