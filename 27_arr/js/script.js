'use strict';

// 1 ====================
// Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта, необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.
// Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
// Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую.
// Покупка продукта. Функция принимает название продукта и отмечает его как купленный

const productsAll = document.querySelector('.products__all');
const productsBuy = document.querySelector('.products__buy');
const productsList = document.querySelector('.products__list');
const formAddingInput = document.querySelector('.form-adding__input');
const formAddingButton = document.querySelector('.form-adding__button');
const productBuy = document.querySelector('.product-buy');

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

productsAll.addEventListener('click', e => {
  e.preventDefault();

  sortByBought();
  showProducts();
  bought();
});

formAddingButton.addEventListener('click', e => {
  e.preventDefault();

  addProduct();
  sortByBought();
});

function showProducts() {
  productsList.textContent = '';

  for (let i = 0; i < shoppingList.length; i++) {
    const product = shoppingList[i];
    const bought = product.bought === true ? 'Yes' : 'No';
    const quantity = 0;

    productsList.insertAdjacentHTML(
      'beforeend',
      `<li class="product__list-inner">
          <span class="product__title product__span">${product.productsName}</span>
          <span class="product__quantity product__span">${product.quantity}</span>
          <div class="product__bought product__span">
          <span class="bought-span">${bought}</span>
          <button class="product-buy products-button">Buy</button>
        </div>
      </li>`
    );
  }
}

function addProduct() {
  const inputValue = formAddingInput.value;
  let newProduct;

  if (inputValue === '') {
    return;
  } else {
    newProduct = {
      productsName: inputValue,
      quantity: 1,
      bought: false,
    };
  }

  shoppingList.push(newProduct);
  const bought = newProduct.bought === true ? 'Yes' : 'No';

  sortByBought();

  productsList.insertAdjacentHTML(
    'afterbegin',
    `<li class="product__list-inner">
          <span class="product__title product__span">${newProduct.productsName}</span>
          <span class="product__quantity product__span">${newProduct.quantity}</span>
          <div class="product__bought product__span">
          <span class="bought-span">${bought}</span>
          <button class="product-buy products-button">Buy</button>
        </div>
      </li>`
  );

  clearInput();
}

function sortByBought() {
  return shoppingList.sort((a, b) => (a.bought > b.bought ? 1 : -1));
}

function clearInput() {
  formAddingInput.value = '';
}

function bought() {
  productBuy.addEventListener('click', e => {
    console.log(e.target);
  });
}
