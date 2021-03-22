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
console.log(newObj.info === obj1.info); //true