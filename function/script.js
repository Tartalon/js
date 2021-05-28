// Function declaration - можем вызвать когда угодно
const user = {
  name: 'Vovka',
  age: 35
};

function getObj(obj) {
  // console.log(obj);
  obj.name = 'Vov';
}
getObj(user);
// console.log(user);



// Function expresion - Не можем вызвать до присвоения в переменную + не везде можно объявить.
const square = function(x) {
  return x * x;
};



// самовызывающеяся ф-ция + анонимная. Сразу вызывается и выполняется. В них могут завернуть весь код (инкапсулировать и закрыть доступ в глобальное пространство).
// (function (параметр) {
      // тело
// })(передаваемый параметр);
(function (msg) {
  // console.log(msg);
}) ("Hello world");



// Аргументы ф-ции.
function foo(x) {
  // console.log(x);
  // console.log(arguments);

  for (let i = 0; i < arguments.length; i++) {
    // console.log(arguments[i]);
  }
}
foo(11, "some string", [1, 2, 3]);



// Функции выщего порядка==================================
// в качестве параметра принимают или возвращают другие функции

const names = ['Denis', 'Ivan', 'Maks', 'Olga'];

function mapArray(arr, fn) {
  const res = [];
  // В массив пушим один элемент, который сразу уже и обработали при помощи fn()
  for (let i = 0; i < arr.length; i++) {
    res.push(fn(arr[i]));
  }
  return res;
}

// Выводим длину каждого елемента массива names
function nameLength(el) {
  // console.log(el);
  return el.length;
}

// Каждый элемент массива в верхнем регистре
function nameToUppercase(el) {
  return el.toUpperCase();
}

const result = mapArray(names, nameLength);
const result2 = mapArray(names, nameToUppercase);
// console.log(result);
// console.log(result2);



function greating(firstName) {
  return function (lastName) {
    return `Hello, ${firstName} ${lastName}!`;
  };
}

// const testGreating = greating('Vovka');
// const fullName = testGreating('Solodovnik');
const fullName = greating('Vovka')('Solodovnik');
console.log(fullName);



// function question(job) {
//   if(job === 'developer') {
//     return function (name) {
//       return `${name}, что такое JS?`;
//     }
//   } else if (job === 'teacher') {
//     return function(name) {
//       return `${name}, какой предмет вы ведете?`;
//     };
//   }
// }

function question(job) {
  const jobDictionary = {
    developer: 'что такое js',
    teacher: 'какой предмет вы ведете',
  };

  return function (name) {
    return `${name}, ${jobDictionary[job]}?`;
  }
}

const developerQuestion = question('developer');
console.log(developerQuestion('Vovka'));
const teacherQuestion = question('teacher');
console.log(teacherQuestion('Yulka'));

