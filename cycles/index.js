// while, do while, for, for of (ES6), for in.

// let i = 0;
// while (i <= 10) {
//   console.log(i);
//   i++;
// };

// let a = 0
// while (a++ < 10) {
//   console.log(a);
// };

// let c = 10;
// // while (c--) {
// //   console.log(c);
// // };



// // do while

// do {
//   console.log('action');
// } while (c-- > 0);



// for (инициализация; условие; шаг)
// for (let v = 0; v < 10; v++) {
//   if (v === 5) {
//     continue;
//   }
//   console.log(v);
// }
// пропуск на 5


// for (let d = 0; d < 10; d++) {
//   if (d === 5) {
//     break;
//   }
//   console.log(d);
// }
// остановится на указанном месте



// let str = 'Hello';
// let res = '';

// for (let i = 0; i < str.length; i++) {
//   console.log(str[i] + '!');
// }

// for (let i = 0; i < str.length; i++) {
//   res += str[i] + '*';
// };
// console.log(res);




// let colors = ['white', 'green', 'orange', 'grey'];

// for (let j = 0; j < colors.length; j++) {
//   console.log(colors[j]);
//   colors[j] = colors[j].toUpperCase();
// }

// console.log(colors);




// массив об'эктов
const users = [
  {
    name: 'Vladimir',
    age: 35
  },
  {
    name: 'Yuliya',
    age: 30
  },
  {
    name: 'Oleg',
    age: 32
  },
  {
    name: 'Lidiya',
    age: 46
  }
]

const usersObj = {};

// for (k = 0; k < users.length; k++) {
//   console.log(users[k].name);
// }


for (f = 0; f < users.length; f++) {
  usersObj[users[f].name] = users[f];
}

console.log(usersObj['Oleg']);





// for in
const usersIn = {
  name: 'Vovka',
  age: 35
};
// слово key можно заменить на любое другое
for (let key in usersIn) {
  console.log(key);
  console.log(usersIn[key]);
}




// for of (имеет break)
for (let value of users) {
  console.log(value);
}