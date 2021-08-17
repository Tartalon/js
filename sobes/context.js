'use strict';

const person = {
  surname: 'Starc',
  knows: function (what, name) {
    console.log(`Ты ${what} знаешь, ${name} ${this.surname}`);
  },
};

const john = { surname: 'Snow' };

person.knows('все', 'Бран');
person.knows.call(john, 'ничего не', 'Джон');
person.knows.applay(john, ['ничего не', 'Джон']);
person.knows.call(john, ...['ничего не', 'Джон']);
person.knows.bind(john, 'ничего не', 'Джон'); // Не вызывается сразу а возвращает значение (можно записать в переменную)
