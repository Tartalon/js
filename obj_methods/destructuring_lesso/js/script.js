const user = {
  firstName: 'Vovka',
  lastName: 'Solodovnik',
  age: 34,
  info: {
    work: 'Fobos',
    skills: ['html', 'css', 'js']
  }
}

// const {firstName, lastName, age = 36} = user; //Названия как ключи в объекте
// console.log(firstName, lastName, age);

// даем свои названия переменным
const {firstName: name, lastName: last} = user;
// console.log(name, last);
const {
  info: {work, skills}
} = user;
// console.log(work, skills);


// Массивы
const colors = ['white', 'black', 'red'];
const [white, bl, r, green = 'green'] = colors; //название соответствует месту в массиве
// console.log(white, bl, r, green);

// пропуск значения
const names = ['Vovka', 'Max', 'Ivan'];
const [, , thirdElem] = names;
// console.log(thirdElem);

const nestedArr = ['hellow', ['key', 'value']];
const [, [key, value]] = nestedArr;
// console.log(key, value);


//REST====================
// дает возможность получить остаток от массива или копирование массива. Должен идти всегда в конце чтобы забрать остаток
const [name1, ...otherNames] = names;
// console.log(name1, otherNames);

//копируем (не глубокое)
const [...newNames] = names;
// console.log(newNames);
const newNames2 = [...names]; //Вкладывает каждый элемент массива в новый массив
// console.log(newNames2);
// console.log(...newNames2);//Вывод в консоль как отдельные элементы массива


//два массива вместе
const colorsNames = ['glob', ...colors, ...names];
// console.log(colorsNames);

//не полное копирование объэкта
const newUser = {...user, age: 26};
// console.log(newUser);


//смешаная деструктуризация
const {
  info: {
    skills: [html, css],
  },
} = newUser;
// console.log(html, css);


function myPerson({
  lastName = '&',
  firstName,
  info: {skills},
} = {}) { //Присваиваем пустой объект по умолчанию
  // console.log(lastName, firstName, skills);
};
// myPerson(newUser);
// myPerson();



// аргументы функции в массив (объект)
function foo(x, y, ...others) {
  console.log(arguments);
  console.log(Array.prototype.slice.call(arguments));
  console.log([].slice.call(arguments));
  const [...args] = arguments;
  console.log(args);
  console.log(others);
}

foo(12, 4, 6, 87);