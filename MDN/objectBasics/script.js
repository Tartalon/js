const person = {
  name: {
    first: 'Bob',
    last: 'Smith'
  },
  age: 32,
  gender: 'male',
  interests: ['music', 'skiing'],
  bio: function() {
    alert(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
  },
  greeting: function() {
    alert('Hi! I\'m ' + this.name.first + '.');
  }
};
person.age  = 45;
person['name']['last'] = 'Cratchit';

person['eyes'] = 'hazel';
person.farewell = function() {
  alert("Bye everybody!");
}

let myDataName ='height';
let myDataValue = '1.75m';
person[myDataName] = myDataValue;

function createNewPerson (name) {
  let obj = {};
  obj.name = name;
  obj.greeting = function() {
    alert('Hi! I\'m ' +this.name + '.');
  };
  return obj;
}

// Функция-конструктор===================
function Person(name) {
  this.name = name;
  this.greeting = function() {
    alert('Hi! I\'m ' + this.name + '.');
  };
}

let person1 = new Person('Bob');
let person2 = new Person('Sarah');