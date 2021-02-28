// Определить количество цифр в введенном числе.
const calcNum = document.querySelector('#calcNum');
const checkQuantity = document.querySelector('.checkQuantity');
const calcNumAnswer = document.querySelector('.calcNumAnswer');

checkQuantity.addEventListener('click', function (e) {
  e.preventDefault();
  calcNumAnswer.textContent = '';
  calcNumAnswer.textContent = calcNum.value.length;
  calcNum.value = '';
})

// =================================================

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
    if(+evenOddInputs[i].value === 0) {
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
        if(+evenOddInputs[i].value % 2 === 0) {
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

// ==========================================

// Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока пользователь не откажется.
/*
const resultButton = document.querySelector('.math__result');

resultButton.addEventListener('click', getInputs());

function getInputs() {
  const firstNum = +prompt('Введите первое число'),
  secondtNum = +prompt('Введите второе число'),
  signInput = prompt('Введите знак')

  switch (signInput) {
  case '-':
    alert(`Result: ${firstNum - secondtNum}`);
    break;
  case '+':
    alert(`Result: ${firstNum + secondtNum}`);
    break;
  case '*':
    alert(`Result: ${firstNum * secondtNum}`);
    break;
  case '/':
    alert(`Result: ${firstNum / secondtNum}`);
    break;

  default:
    alert('Вы не верно заполнили поле');
    break;
  };
  const next = confirm('Хотите продолжить?');
  if (next) {
    getInputs();
  }
}
*/

// =====================================

// Запросить у пользователя число и на сколько цифр его сдвинуть. Сдвинуть цифры числа и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).

const numberInput = document.querySelector('#number__input'),
  shiftInput = document.querySelector('#shift__input'),
  shiftResult = document.querySelector('.shift__result'),
  shiftButton = document.querySelector('.shift__button');

shiftButton.addEventListener('click', function () {
  let numbers = numberInput.value;
  let shift = shiftInput.value;
  let shiftNum = '';
  let res = '';

  for (let i = 0; i < shift; i++) {
    shiftNum += numbers[i];
  }
  res = numbers.replace(shiftNum, '') + shiftNum;

  shiftResult.textContent = `Результат: ${res}`;
  console.log(numbers);
});