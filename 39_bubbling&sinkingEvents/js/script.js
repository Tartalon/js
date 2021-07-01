const btn = document.querySelektor('.btn');
const wrap = document.querySelektor('.wrap');

btn.addEventListener('click', (e) => {
  // e.stopPropagation();
  console.log('click btn');
});

wrap.addEventListener('click', (e) => {
  console.log('click wrap');
});

document.body.addEventListener('click', (e) => {
  console.log('click body');
});

wrap.addEventListener(
  'click',
  (e) => {
    console.log('click wrap');
  },
  { capture: true }
);

document.body.addEventListener(
  'click',
  (e) => {
    console.log('click body');
  },
  true
);
