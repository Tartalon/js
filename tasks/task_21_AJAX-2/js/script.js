'use strict';

// Создать форму добавления пользователя состоящую из следующих полей name, email, phone, website. При сабмите формы сделать POST запрос на сервер https://jsonplaceholder.typicode.com/users После ответа от сервера добавлять полученного пользователя на страницу в список. Для визуализации формы и спискаможете использовать произвольные стили.

const submit = document.querySelector('.btn-submit');
const inputName = document.querySelector('.input-name');
const inputEmail = document.querySelector('.input-email');
const inputTel = document.querySelector('.input-tel');
const inpuWebsite = document.querySelector('.inpu-website');
const out = document.querySelector('.card-wrapper');
const apiURL = 'https://jsonplaceholder.typicode.com';

function getUsers(cb) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `${apiURL}/users`);

  xhr.addEventListener('load', () => {
    const response = JSON.parse(xhr.responseText);
    cb(response);
  });

  xhr.addEventListener('error', () => {
    console.log('Error');
  });

  xhr.send();
}

function createUser(body, cb) {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', `${apiURL}/users`);

  xhr.addEventListener('load', () => {
    const response = JSON.parse(xhr.responseText);
    cb(response);
  });
}

function cardTemplate(user) {
  let card = `
    <div class="card mb-3">
      <div class="card-header">Name: ${user.name}</div>
      <ul class="list-group users-list">
        <li class="list-group-item">Email: ${user.email}</li>
        <li class="list-group-item">Phone: ${user.phone}</li>
        <li class="list-group-item">Website: ${user.website}</li>
      </ul>
    </div>
  `;
  return card;
}

function renderUsers(response) {
  response.forEach(user => {
    out.insertAdjacentHTML('afterbegin', cardTemplate(user));
  });
}

getUsers(renderUsers);
