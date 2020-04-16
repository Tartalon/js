let value;

// как узнать числовое значение символа (только одного символа)
value = 'a'.charCodeAt();

// null NaN в булевом представлении false

console.log(value);

// преобразовываем не булевое значение в булевое
value = null;
console.log(!!value);

// в js пустой массив считается true
value = [];
// проверить есть ли что-то в массиве
if (value.length) {
  console.log(value);
} else {
  console.log('array is empty');
}


// проверяем масив или нет
value = [];
if (Array.isArray(value)) {
  console.log('is array');
} else {
  console.log('not array');
}


// логические операторы
// && запинается на лжи, каждое значение пытается преобразоавать к false (если все false - возвращает последний false)
value = 1 && 0 && 2;
console.log(value);



// || каждое значение пытается преобразовать к true (если все true - возвращает последний true)
value = 0 || 0 || 3;
console.log(value);

let serverNickname = '';
let nickname = serverNickname || 'default nickname';
console.log(nickname);