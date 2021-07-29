'use strict';

async function getPost(id) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const data = await response.json();

    return data;
  } catch (err) {
    // console.log(err);
    // return Promise.reject(err);
    throw err;
  }
}
// getPost(2)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// =============================

async function getPost2(id) {
  try {
    const response1 = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    ).then(res => res.json());

    const response2 = await fetch(
      `https://jsonplaceholder.typicode.com/users`
    ).then(res => res.json());

    return [response1, response2];
  } catch (err) {
    // console.log(err);
    // return Promise.reject(err);
    throw err;
  }
}

// =========================

async function getAll() {
  const [res1, res2] = await Promise.all([getPost(1), getPost2(2)]);
  console.log(res1, res2);
}
getAll();
