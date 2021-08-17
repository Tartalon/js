'use strict';

// const person = {
//   surname: 'Starc',
//   knows: function (what, name) {
//     console.log(`Ты ${what} знаешь, ${name} ${this.surname}`);
//   },
// };

// const john = { surname: 'Snow' };

// person.knows('все', 'Бран');
// person.knows.call(john, 'ничего не', 'Джон');
// person.knows.applay(john, ['ничего не', 'Джон']);
// person.knows.call(john, ...['ничего не', 'Джон']);
// person.knows.bind(john, 'ничего не', 'Джон')(); // Не вызывается сразу а возвращает значение (можно записать в переменную)

// ===============

// function Person(name, age) {
//   this.name = name;
//   this.age = age;

//   console.log(this);
// }

// const elena = new Person('Elena', 20);

// // ================ Явный
// function logThis() {
//   console.log(this);
// }

// const obj = { num: 42 };
// logThis.apply(obj);
// logThis.call(obj);
// logThis.bind(obj)();

// // ================ Не явный

// const animal = {
//   legs: 4,
//   logThis: function () {
//     console.log(this);
//   },
// };

// animal.logThis();

function Cat(color) {
  this.color = color;
  console.log('This', this);
  (() => console.log('Arrow this', this))();
}
new Cat('red');
