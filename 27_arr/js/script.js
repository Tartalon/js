'use strict';

// 1 ====================
// Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта, необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.
// Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
// Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую.
// Покупка продукта. Функция принимает название продукта и отмечает его как купленный

const sectionProducts = document.querySelector('.section__products');
const productsAll = document.querySelector('.products__all');
const productsBuy = document.querySelector('.products__buy');
const productsList = document.querySelector('.products__list');
const formAddingInput = document.querySelector('.form-adding__input');
const formAddingButton = document.querySelector('.form-adding__button');
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

  sortByBought();
  for (let i = 0; i < shoppingList.length; i++) {
    const product = shoppingList[i];
    const bought = product.bought === true ? 'Yes' : 'No';

    productsList.insertAdjacentHTML(
      'beforeend',
      `<p class="product__list-inner">
        <span class="product__title product__span">${product.productsName}</span>
        <span class="product__quantity product__span">${product.quantity}</span>
        <span class="product__bought product__span">${bought}</span>
      </p>`
    );
  }
});

formAddingButton.addEventListener('click', e => {
  e.preventDefault();

  addProduct();
  sortByBought();
});

function addProduct() {
  const inputValue = formAddingInput.value;
  shoppingList.push({
    productsName: inputValue,
    quantity: 0,
    bought: false,
  });
  sortByBought();
  console.log(shoppingList);
}

function sortByBought() {
  return shoppingList.sort((a, b) => (a.bought > b.bought ? 1 : -1));
}
