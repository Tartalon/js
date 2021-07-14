'use strict';

// Получить пользователей (users) от сервера https://jsonplaceholder.typicode.com. Получив ответ от сервера вывести имена пользователей на страницу. При клике на имя пользователя в произвольном месте должна появиться подробная информация о нем. Для визуальной части можно использовать bootstrap или другие фреймворки.

// 1. Запрос получения пользователей
// 2. Реализовать обработчик ответа от сервера
// 3. Рендер списка пользователей

const apiURL = 'https://jsonplaceholder.typicode.com';
const usersListEl = document.querySelector('.users-list');

function getUsersHTTP(cb) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', `${apiURL}/users`);

  xhr.addEventListener('load', () => {
    if (xhr.status !== 200) {
      console.log('Error', xhr.status);
      return;
    }

    const res = JSON.parse(xhr.responseText);

    cb(res);
  });

  xhr.send();
}

function onGetUsersCallback(users) {
  if (!users.length) {
    return;
  }

  renderUsersList(users);
}

function renderUsersList(users) {
  const fragment = users.reduce(
    (acc, user) => acc + userListItemTemplate(user),
    ''
  );
}

function userListItemTemplate(user) {
  return `
    <button type="button" class="list-group-item list-group-item-action">
      ${user.name}
    </button>
  `;
}

getUsersHTTP(onGetUsersCallback);
