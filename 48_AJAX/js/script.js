'use strict';

const btn = document.querySelector('button');
const out = document.querySelector('.container-out');

function getPosts(cb) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
  xhr.addEventListener('load', () => {
    // console.log(xhr.responseText);
    const responce = JSON.parse(xhr.responseText);
    cb(responce);
  });
  xhr.addEventListener('error', () => {
    console.log('error');
  });

  xhr.send();
}

function renderPosts(responce) {
  const fragment = document.createDocumentFragment();
  responce.forEach((post) => {
    const card = document.createElement('div');
    card.classList.add('card');
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    const title = document.createElement('h5');
    title.classList.add('card-title');
    title.textContent = post.title;
    const article = document.createElement('p');
    article.classList.add('card-text');
    article.textContent = post.body;
    cardBody.appendChild(title);
    cardBody.appendChild(article);
    card.appendChild(cardBody);
    fragment.appendChild(card);
  });
  out.appendChild(fragment);
}

btn.addEventListener('click', (e) => {
  getPosts(renderPosts);
});
