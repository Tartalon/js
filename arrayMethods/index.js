const numArr = [2, 4, 34, 987, 42];

let value;

value = numArr.length;

value = Array.isArray(numArr);
value = numArr[2];
numArr[2] = 12;
value = numArr.indexOf(12);

value = numArr.push(100);
value = numArr.pop();
value = numArr.unshift(124);
value = numArr.shift();
value = numArr.slice(0, 2); // не изменяет исходный масив. Если ничего не передать - вернет копию масива
value = numArr.splice(1, 2, 'one', 'to');
value = numArr.splice(1, 0, 'one', 'two'); // с 2 индекса удалить 0 и добавить...
value = numArr.reverse();
value = numArr.concat(numArr); // копирует масив и добавляет передаваемое
value = [].concat(1, 2, 3);
value = numArr.join(); // вернет строку с указанным разделителем
value = 'hello world'.split(); //из строки масив(без параметра - один элемент масива)
value = 'hello world'.split(''); // каждый символ элемент масива
value = 'hello world'.split(' '); // каждое слово элемент масива

console.log(value, numArr);