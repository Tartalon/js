'use strict';
// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.
function removeDuplicateWords(s) {
  // let newStr = [];

  // for (const word of arrayFromS) {
  //   if (!newStr.includes(word)) {
  //     newStr.push(word);
  //   }
  // }
  // return newStr;

  // let arrayFromS = s.split(' ');
  return Array.from(new Set(s.split(' '))).join(' ');
}

// const removeDuplicateWords2 = s => [...new Set(s.split(' ')).join(' ')];
console.log(
  removeDuplicateWords(
    'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
  )
);
