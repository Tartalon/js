function Person(first, last, age, gender, interests, pet) {
  this.name = {
    first: first,
    last: last
  };
  this.age = age;
  this.gender = gender;

  this.interests = interests.join(', ');

  this.pet = pet;
  this.bio = function() {
    let genderWho = '';
    if(gender === 'mail') {
      genderWho = 'He';
    } else if(gender === 'femail') {
      genderWho = 'She';
    } else {
      genderWho = 'This person';
    }
    alert(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. ' + genderWho + ' likes ' + interests + '.');
  };
  this.greeting = function() {
    alert('Hi! I\'m ' + this.name.first + '.');
  };
  this.animals = function() {
    alert(this.name.first + ' have a ' + this.pet);
  };
}

let person1 = new Person('Bob', 'Smith', '32', 'fema', ['music', 'skiing'], 'cat');