// Создать ф-цию multiply, которая будет принимать любое количество чисел и возвращать их произведение
// Пример вызова:
// multiply(1,2,3) => результат 6 (1*2*3);
// Если нет ни одного аргумента, вернуть ноль: multiply() // 0

function multiply(arguments) {
  if (!arguments) {
    return 0;
  } else {
    return arguments.length;
  }
}
console.log(multiply(1, 2, 3));