function Box (h, w, d, m) {
  this.height = h;
  this.width = w;
  this.depth = d;
  this.material = m;

  this.volume = function () {
    return this.height * this.width * this.depth;
  }
}

Box.prototype.equals = function (otherBox) {
  return this.material === otherBox.material;
}

let box1 = new Box(20, 5, 4, 'steel');
let box2 = new Box(10, 20, 3, 'wood');

let sameMaterial = box1.equals(box2);
let boxVolume = box2.volume();

// console.log(`Одинаковый материал: ${sameMaterial}`);
// console.log(boxVolume);


/*
 Разработать функ-констр, которая будет создавать объект Human (человек). Создать массив объектов и реализовать функцию, которая будет сортировать элементы массива по значению свойства Age по возрастанию или убыванию.
*/
function Human(f, l, a, h) {
  this.firstName = f;
  this.lastName = l;
  this.age = a;
  this.hobby = h;

  this.sayHi = function () {
    console.log(`Hi, i'm ${this.firstName}!`);
  }
}

let people = [];

people.push(
  new Human ('Vovka', 'Morkovka', 36, 'RC cars'),
  new Human ('Yulyashka', 'Barabashka', 31, 'Nails'),
  new Human ('Andru', 'Fokin', 38, 'Footboll')
);

people.sort (function (n, m) {
  let f = n.age;
  let s = m.age;
  if(f < s) {
    return -1;
  }
  else if(f > s) {
    return 1;
  }
  else {
    return 0;
  }
});

console.log(people);