'use strict';

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => reject('error'), 3000);
// });

// // console.log(promise);
// promise
//   .then(x => {
//     // console.log(x);
//     return x;
//   })
//   .then(y => console.log(y))
//   .catch(err => console.log(err));

// // promise.then(z => console.log(z));

// Part 2
const myHttp = http();

function getPost(id) {
  return new Promise((resolve, reject) => {
    myHttp.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      }
    );
  });
}

function getPostComments(post) {
  const { id } = post;
  return new Promise((resolve, reject) => {
    myHttp.get(
      `https://jsonplaceholder.typicode.com/comments?postId=${id}`,
      (err, res) => {
        if (err) {
          reject(err);
        }
        resolve({ post, comments: res });
      }
    );
  });
}

function getUserCreatedPost(data) {
  const {
    post: { userId },
  } = data;
  return new Promise((resolve, reject) => {
    myHttp.get(
      `https://jsonplaceholder.typicode.com/users/${userId}`,
      (err, res) => {
        if (err) {
          reject(err);
        }
        resolve({ ...data, user: res });
      }
    );
  });
}

getPost(5) // Вернет promise
  .then(post => getPostComments(post))
  .then(data => getUserCreatedPost(data))
  .then(fullData => console.log(fullData))
  .catch(err => console.log(err));
