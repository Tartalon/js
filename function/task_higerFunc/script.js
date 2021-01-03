// Создать функции:
// - первая функция принимает массив и колбэк (одна для всех вызовов)
// - вторая функция (колбэк) обрабатывает каждый элемент массива (для каждого вызова свой callback)

// Первая функция возвращает строку “New value: ” и результат обработки:
// firstFunc(['my', 'name', 'is', 'trinity'], handler1) -> “New value: MyNameIsTrinity”
// firstFunc([10, 20, 30], handler2) -> “New value: 100, 200, 300”
// firstFunc([{age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}], handler3) -> “New value: Jhon is 45, Aaron is 20”
// firstFunc([‘abc’, ‘123’], handler4) → “New value: cba, 321,” // строки инвертируются

// Подсказка: secondFunc должна быть представлена функцией, которая принимает один аргумент (каждый элемент массива) и возвращает результат его обработки


// 1
function firstFunc(arr, fn) {
  let res = 'New value: ';
  for (let i = 0; i < arr.length; i++) {
    res += fn(arr[i]);
  }
  return res.trim();
}

function handler1(el) {
  return el.replace(el[0], el[0].toUpperCase());
}

console.log(firstFunc(['my', 'name', 'is', 'Trinity'], handler1));

function handler2(el) {
  return Number(el) * 10 + ', ';
}

console.log(firstFunc([10, 20, 30], handler2) )

function handler3(el) {
  return `${el.name} is ${el.age}, `;
}

console.log(firstFunc([{age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}], handler3));

function handler4(el) {
  return el.split('').reverse().join('') + ', ';
}

console.log(firstFunc(['abs', '123'], handler4));




// Написать аналог метода every. Создайте функцию every, она должна принимать первым аргументом массив чисел (обязательно проверьте что передан массив) вторым аргументом callback (обязательно проверьте что передана функция). Если передан один из аргументов не удовлетворяет условию то функция должна вернуть new Error("с произвольным сообщением.") функция должна возвращать true или false в зависимости от результата вызова callback (проверить число больше 5). Callback должен принимать один элемент массива, его индекс в массиве и весь массив.

function every(arr, fn) {

}