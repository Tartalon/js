'use strict';

// 1 ====================
// Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта, необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.
// Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
// Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую.
// Покупка продукта. Функция принимает название продукта и отмечает его как купленный

let products = [
  {
    name: 'apple',
    quantity: 3,
    bought: true,
  },
  {
    name: 'banana',
    quantity: 4,
    bought: false,
  },
  {
    name: 'bread',
    quantity: 1,
    bought: false,
  },
  {
    name: 'meat',
    quantity: 1,
    bought: false,
  },
];

const productInput = document.querySelector('.product__input');
const productAddBtn = document.querySelector('.product__add');
const productsList = document.querySelector('.products__list');
const productsAllBtn = document.querySelector('.products__all');

function createLi(product) {
  let li = document.createElement('li');
  li.classList.add('products__item');

  let p = document.createElement('p');
  p.classList.add('product__name');
  p.textContent = product.name;

  let span = document.createElement('span');
  span.classList.add('product__quantity');
  span.textContent = product.quantity;

  let checkbox = document.createElement('checkbox');
  checkbox.classList.add('product__check');

  let buyBtn = document.createElement('button');
  buyBtn.classList.add('product__buy');

  li.append(p, span, checkbox, buyBtn);
  return li;
}

productsAllBtn.addEventListener('click', function () {
  products.forEach(product => productsList.append(createLi(product)));
});
