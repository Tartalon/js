'use strict';

// 1 ====================
// Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта, необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.
// Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
// Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую.
// Покупка продукта. Функция принимает название продукта и отмечает его как купленный

const sectionProducts = document.querySelector('.section__products');
const productsAll = document.querySelector('.products__all');
const productsAdding = document.querySelector('.products__adding');
const productsBuy = document.querySelector('.products__buy');
const productsList = document.querySelector('.products__list');

let shoppingList = [
  {
    productsName: 'apple',
    quantity: 0,
    bought: false,
  },
  {
    productsName: 'pear',
    quantity: 0,
    bought: false,
  },
  {
    productsName: 'carrot',
    quantity: 0,
    bought: true,
  },
  {
    productsName: 'melon',
    quantity: 0,
    bought: false,
  },
];

productsAll.addEventListener('click', e => {
  e.preventDefault();

  for (let i = 0; i < shoppingList.length; i++) {
    const product = shoppingList[i];

    productsList.insertAdjacentHTML(
      'beforeend',
      `<li clas="list__item">
        <ul class="product__fields">
          <li class="fields__text">
            Product name: ${product.productsName}
          </li>
          <li class="fields__text">
            Quantity: ${product.quantity}
          </li>
          <li class="fields__text">
            ${product.bought}
          </li>
        </ul>
      </li>`
    );
  }
});
