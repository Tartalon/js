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
const productsWrapper = document.querySelector('.products__wrapper');
const productListInner = document.querySelector('.product__list-inner');
const formAddingInput = document.querySelector('.form-adding__input');
const formAddingButton = document.querySelector('.form-adding__button');

let shoppingList = [
  {
    productsName: 'apple',
    quantity: 1,
    bought: false,
  },
  {
    productsName: 'pear',
    quantity: 1,
    bought: false,
  },
  {
    productsName: 'carrot',
    quantity: 1,
    bought: true,
  },
  {
    productsName: 'melon',
    quantity: 1,
    bought: false,
  },
];

productsAll.addEventListener('click', (e) => {
  e.preventDefault();

  sortByBought();
  showProducts();
});

formAddingButton.addEventListener('click', (e) => {
  e.preventDefault();

  addProduct();
  sortByBought();
});

function showProducts() {
  productsWrapper.textContent = '';

  for (let i = 0; i < shoppingList.length; i++) {
    const product = shoppingList[i];
    const bought = product.bought === true ? 'Yes' : 'No';
    const quantity = 0;

    productsWrapper.insertAdjacentHTML(
      'beforeend',
      `<div class="product__list-inner">
          <span class="product__title product__span">${product.productsName}</span>
          <span class="product__quantity product__span">${product.quantity}</span>
          <div class="product__bought product__span">
          <span class="bought-span">${bought}</span>
          <button class="product-buy products-button">Buy</button>
        </div>
      </div>`
    );
  }
}

function addProduct() {
  const inputValue = formAddingInput.value;
  if (inputValue === '') {
    return;
  } else {
    shoppingList.push({
      productsName: inputValue,
      quantity: 1,
      bought: false,
    });
  }

  productsWrapper.insertAdjacentHTML(
    'afterbegin',
    `<div class="product__list-inner">
          <span class="product__title product__span">${inputValue}</span>
          <span class="product__quantity product__span">1</span>
          <div class="product__bought product__span">
          <span class="bought-span">no</span>
          <button class="product-buy products-button">Buy</button>
        </div>
      </div>`
  );

  sortByBought();
  clearInput();
  console.log(shoppingList);
}

function sortByBought() {
  return shoppingList.sort((a, b) => (a.bought > b.bought ? 1 : -1));
}

function clearInput() {
  formAddingInput.value = '';
}
