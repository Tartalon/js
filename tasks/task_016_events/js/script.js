'use strict';

// ================== 1 =================
// По нажатию на кнопку "btn-msg" должен появиться алерт с тем текстом который находится в атрибуте data-text у кнопки.
const btnMsg = document.querySelector('#btn-msg');
const btnGen = document.querySelector('#btn-generate');

btnMsg.addEventListener('click', (e) => {
  alert(btnMsg.getAttribute('data-text'));
  // alert(e.target.dataset.text);

  // alert(btnMsg.dataset.text);

  // alert(this.DataTransferItem.text);

  // alert(e.currentTarget.dataset.text);
});

// ================== 2 =================
// При наведении указателя мыши на "btn-msg", кнопка становится красной; когда указатель мыши покидает кнопку, она становится прежнего цвета. Цвет менять можно через добавление класса.
btnMsg.addEventListener('mouseover', () => {
  btnMsg.style.backgroundColor = 'red';
});

btnMsg.addEventListener('mouseleave', () => {
  btnMsg.style.backgroundColor = '';
});

// ================== 3 =================
// При нажатии на любой узел документа показать в элементе с id=tag имя тега нажатого элемента.
const body = document.querySelector('body');
const pStrong = document.querySelector('#tag');

body.addEventListener('click', (e) => {
  pStrong.textContent = 'Tag: ';
  let target = e.target;
  pStrong.textContent += target.tagName;

  // pStrong.textContent = `Tag: ${e.target.nodeName}`;
});

// ================== 4 =================
// При нажатии на кнопку btn-generate добавлять в список ul элемент списка Li с текстом Item + порядковый номер Li по списку, т.е Item 3, Item 4 и т.д
const list = document.querySelector('ul');
let count = 3;

// btnGen.addEventListener('click', () => {
//   let li = document.createElement('li');
//   li.textContent = 'Item ' + count;
//   list.appendChild(li);
//   count++;
// });

btnGen.addEventListener('click', () => {
  list.insertAdjacentHTML(
    'beforeend',
    `
      <li>
        Item ${count}
      </li>
    `
  );
  count++;
});
