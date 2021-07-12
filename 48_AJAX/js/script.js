'use strict';

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

getPosts(responce => {
  console.log(responce);
});
