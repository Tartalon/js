const user = {
  name: 'Vladimir',
  age: 35,
  head: 1,
  play: {
    ball: 1,
    bowls: 12
  },
  // в кавыяках т.к. используем дефис
  'user-address': {
    city: 'Svetlovodsk'
  },
  skills: ['html', 'css', 'js']
};

user.age = 30;
user.play.heand = 2;
user['user-address'].street = 'Robochaya';

// усли в квадратных скобках то в кавычках т.к. будет воспринята как переменная
user['play']['bowls'] = 8;

// если использовать квадратные скобки то можем подставлять переменные
let prop = 'skills';
let value = user[prop];

console.log(user);
console.log(value);