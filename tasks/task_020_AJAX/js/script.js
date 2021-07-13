'use strict';

// Получить пользователей (users) от сервера https://jsonplaceholder.typicode.com. Получив ответ от сервера вывести имена пользователей на страницу. При клике на имя пользователя в произвольном месте должна появиться подробная информация о нем. Для визуальной части можно использовать bootstrap или другие фреймворки.

// 1. Запрос получения пользователей
// 2. Реализовать обработчик ответа от сервера
// 3. Рендер списка пользователей

const apiURL = 'https://jsonplaceholder.typicode.com';

function getUsersHTTP(cb) {
  xhr = new XMLHttpRequest();

  xhr.open('GET', `${apiURL}/users`);

  xhr.addEventListener('onload', () => {
    console.log(xhr.responseText);
  });

  xhr.send();
}

getUsersHTTP();
