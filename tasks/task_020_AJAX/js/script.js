'use strict';

// Получить пользователей (users) от сервера https://jsonplaceholder.typicode.com. Получив ответ от сервера вывести имена пользователей на страницу. При клике на имя пользователя в произвольном месте должна появиться подробная информация о нем. Для визуальной части можно использовать bootstrap или другие фреймворки.

const list = document.querySelector('.list');
const btn = document.querySelector('.btn');

function getUsers(cb) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
  xhr.addEventListener('load', () => {
    const responce = JSON.parse(xhr.responseText);
    cb(responce);
  });
  xhr.addEventListener('error', (e) => {
    console.log('Error');
  });

  xhr.send();
}

function renderUsers(responce) {
  const fragment = document.createDocumentFragment();
  responce.forEach((user) => {
    const li = document.createElement('li');
    li.classList.add('list__item');
    const card = document.createElement('div');
    card.classList.add('card');
    const cardBody = document.createElement('div');
    card.classList.add('card-body');
    const title = document.createElement('h5');
    card.classList.add('card-title');
    title.textContent = user.name;
    const text = document.createElement('p');
    text.classList.add('card-text');
    text.textContent = `
      Address: street - ${user.address.street}, city - ${user.address.city}.
      Company: name - ${user.company.name}.
      Username - ${user.username}.
      Phone - ${user.phone}
    `;

    cardBody.appendChild(title);
    cardBody.appendChild(text);
    card.appendChild(cardBody);
    li.appendChild(card);
    fragment.appendChild(li);
  });
  list.appendChild(fragment);
}

btn.addEventListener('click', (e) => {
  getUsers(renderUsers);
});
