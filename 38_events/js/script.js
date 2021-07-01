'use strict';
const btn = document.querySelector('button');
// console.dir(btn);
// btn.onclick = function () {
//   log('click 2');
// };

// function clickHandler(e) {
//   console.log(e);
// }

// btn.addEventListener('click', clickHandler);
// btn.removeEventListener('click', clickHandler);

const container = document.querySelector('.container');

btn.addEventListener('click', e => {
  const div = document.createElement('div');
  const nestedBtn = document.createElement('button');
  div.textContent = Math.random();
  nestedBtn.textContent = 'button';
  div.appendChild(nestedBtn);
  container.appendChild(div);
});

container.addEventListener('click', e => {
  // console.dir(e.target);
  if (e.target.tagName === 'BUTTON') {
    console.log('button clicked');
  }
});
