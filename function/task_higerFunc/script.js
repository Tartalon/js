// Создать функции:
// - первая функция принимает массив и колбэк (одна для всех вызовов)
// - вторая функция (колбэк) обрабатывает каждый элемент массива (для каждого вызова свой callback)

// Первая функция возвращает строку “New value: ” и результат обработки:
// firstFunc(['my', 'name', 'is', 'trinity'], handler1) -> “New value: MyNameIsTrinity”
// firstFunc([10, 20, 30], handler2) -> “New value: 100, 200, 300”
// firstFunc([{age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}], handler3) -> “New value: Jhon is 45, Aaron is 20”

// Подсказка: secondFunc должна быть представлена функцией, которая принимает один аргумент (каждый элемент массива) и возвращает результат его обработки


// 1
function firstFunc(arr, fn) {
  let res = 'New value: ';

  for(let i = 0; i < arr.length; i++) {
    res += fn(arr[i]);
  }
  return res.trim();
}

function handler1(el) {
  return el[0].toUpperCase() + el.slice(1);
}

console.log(firstFunc(['my', 'name', 'is', 'Trinity'], handler1));

// function handler2(el) {

// }

// console.log(firstFunc([10, 20, 30], handler2) )

// function handler3(el) {

// }

// console.log(firstFunc([{age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}], handler3));

// function handler4(el) {

// }

// console.log(firstFunc(['abs', '123'], handler4));