'use strict';

// let a = 'Variable a';
// let b = 'Variable b';

// // Scope
// {
//   a = 'New Variable A';
//   let b = 'Local Variable B';
//   console.log('Scope A', a);
//   console.log('Scope B', b);
// }
// console.log('A:', a);
// console.log('B:', b);

// Const
const PORT = 8000;
// PORT = 8000;

const array = ['Javascript', 'is', 'Awesome'];
array.push('!');
array[0] = 'JS';
console.log(array);

const obj = {};
obj.name = 'Vovka';
obj.age = 32;

console.log(obj);

delete obj.name;
console.log(obj);
