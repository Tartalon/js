// Your goal is to return multiplication table for number that is always an integer from 1 to 10.

function multiTable(number) {
  // good luck
  let str = '';
  for (let i = 1; i <= 10; i++) {
    if (i === 10) {
      str += `${i} * ${number} = ${i * number}`;
      return str;
    }
    str += `${i} * ${number} = ${i * number}\n`;
  }
  return str;
}
console.log(multiTable(9));

// const multiTable = (number) => {
//   let table = '';

//   for(let i = 1; i <= 10; i++) {
//     table += `${i} * ${number} = ${i * number}${i < 10 ? '\n' : ''}`;
//   }

//   return table;
// }