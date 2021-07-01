'use strict';

// ================== 1 =================
// По нажатию на кнопку "btn-msg" должен появиться алерт с тем текстом который находится в атрибуте data-text у кнопки.
const btnMsg = document.querySelector('#btn-msg');
const btnGen = document.querySelector('#btn-generate');

btnMsg.addEventListener('click', (e) => {
  console.dir(btnMsg);
});
