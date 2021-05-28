let obj1 = {
  name: 'Vovka',
  info: {
    skills: ['HTML5', 'CSS3', 'JS'],
  },
};

let obj2 = {
  name: 'Gogi',
  age: 48,
};

// Копирование
let newObj = Object.assign({}, obj1); //Поверхностное копирование (info скопирует только ссылку)
// console.log(newObj.info === obj1.info);

// можно совместить объекты:
let mergObj = Object.assign({}, obj1, obj2);
console.log(mergObj);

// Глубокое копирование при помощи JSON
let jsonObj = JSON.stringify(obj1); //загнали в JSON формат
newObj = JSON.parse(jsonObj); //распарсили
// newObj = JSON.parse(JSON.stringify(obj1));
// console.log(newObj);
// console.log(newObj.info === obj1.info); // теперь полная копия


// OBJECT.KEYS
let keys = Object.keys(obj2); //Возвращает массив ключей объекта

let values = Object.values(obj2); //Массив значений

let entries = Object.entries(obj1);// Возвращает массив массивов где каждый элемент массив из двух элементов (ключ, значение);
// console.log(entries);

let fromEntries = Object.fromEntries([['a', 'value'], ['b', 'b_Value']]); //обратный от Entries (создает объект).
console.log(fromEntries);
