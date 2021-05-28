
const car = {
  brand: 'Audi',
  year: 2020,

  get age() {
    return `Авто произведено в ${this.year}`;
  },

  //seter должен называться как и гетер
  set age(value) {
    this.year = value;
  },
};

// Object.defineProperty(car, 'year', {
//   configurable: false, // теперь не можем удалить (delete car.year) и конфигурировать (изменять), только перезаписать;
//   enumerable: false, //делает не итерируемым (можно изменять). Object.keys(car) -> ['brand]. Не будет видно в for in
//   writable: false, //запрещает перезаписать (можно удалить)
// });


// Object.defineProperty(car, 'age', {
//   get: function() {
//     return `Авто произведено в ${this.year}`;
//   }
// });
// console.log(car.age);

car.age = 2060;
// console.log(car, car.age);

// гетеры и сетеры не копируются



