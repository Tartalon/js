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

  clearInp(calculatorFirstNum, calculatorSecondNum, calculatorSign);
});

// ==========================================

// 6. Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока пользователь не откажется.
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

// 7. Запросить у пользователя число и на сколько цифр его сдвинуть. Сдвинуть цифры числа и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).

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

//=============================================

// 8. Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK.

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

// 9 Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10.

for (let i = 2; i <= 9; i++) {
  for (let k = 1; k <= 10; k++) {
    // console.log(`${i} * ${k} = ${k * i}`);
  }
}

// 10 Игра «Угадай число». Предложить пользователю загадать число от 0 до 100 и отгадать его следующим способом: каждую итерацию цикла делите диапазон чисел пополам, записываете результат в N и спрашиваете у пользователя «Ваше число > N, < N или == N?». В зависимости от того, что указал пользователь, уменьшаете диапазон. Начальный диапазон от 0 до 100, поделили пополам и получили 50. Если пользователь указал, что его число > 50, то изменили диапазон на от 51 до 100. И так до тех пор, пока пользователь не выберет == N.

const guessNumberButton = document.querySelector('.guess-number__button');
const guessNumberText = document.querySelector('.guess-number__text');
const guessNumberLabelSpans = document.querySelectorAll(
  '.guess-number__label-span'
);
const guessNumberInputs = document.querySelectorAll('.guess-number__input');

guessNumberButton.onclick = function (e) {
  e.preventDefault();

  let max = 100;
  let mid = 50;
  let min = 0;
  let checked;

  mid = Math.floor(min + (max - min) / 2);

  suggestNumber();
  getChecked();
  changeButtonText();

  if (checked === 0) {
    min = mid;
    guessNumberText.textContent = ` min ${min}, max ${max}`;
  } else if (checked === 1) {
    max = mid;
    guessNumberText.textContent = ` min ${min}, max ${max}`;
  } else {
    guessNumberText.textContent = ` Вы загадали ${checked.value}`;
  }

  function changeButtonText() {
    guessNumberButton.textContent = 'Еще разок';
  }

  function suggestNumber() {
    for (let item of guessNumberLabelSpans) {
      item.textContent = mid;
    }
  }

  function getChecked() {
    for (let i = 0; i < guessNumberInputs.length; i++) {
      if (guessNumberInputs[i].checked) {
        checked = i;
      }
    }
    return checked;
  }
};
