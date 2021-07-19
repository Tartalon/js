'use strict';

// Создать форму добавления пользователя состоящую из следующих полей name, email, phone, website. При сабмите формы сделать POST запрос на сервер https://jsonplaceholder.typicode.com/users После ответа от сервера добавлять полученного пользователя на страницу в список. Для визуализации формы и спискаможете использовать произвольные стили.

const submit = document.querySelector('.btn-submit');
const inputName = document.querySelector('.input-name');
const inputEmail = document.querySelector('.input-email');
const inputTel = document.querySelector('.input-tel');
const inpuWebsite = document.querySelector('.inpu-website');
const out = document.querySelector('.users-list');
const apiURL = 'https://jsonplaceholder.typicode.com';

function getUsers(cb) {
  const xhr = XMLHttpRequest();
  xhr.open('POST', `${apiURL}/users`);

  xhr.addEventListener('load', () => {
    const response = JSON.parse(xhr.responseText);
    cb(response);
  });

  xhr.addEventListener('error', () => {
    console.log('Error');
  });
}

function renderUsers(response) {}
