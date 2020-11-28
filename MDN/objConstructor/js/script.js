function Person(first, last, age, gender, interests, pet) {
  this.name = {
    first: first,
    last: last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
  this.pet = pet;
  this.bio = function() {
    alert(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + tis.interests[1] + '.');
  };
  this.greeting = function() {
    alert('Hi! I\'m ' + this.name.first + '.');
  };
  this.animals = function() {
    alert(this.name.first + ' have a ' + this.pet);
  };
}

let person1 = new Person('Bob', 'Smith', '32', 'male', ['music', 'skiing'], 'cat');