'use strict';

// ============= 1 ==============
// Найти в коде список ul и добавить класс “list”
const ul = document.querySelector('ul');

ul.classList.add('list');

// ============= 2 ==============
// Найти в коде ссылку, находящуюся после списка ul, и добавить id=link
// 2.1
let link;
let nextElement = ul.nextElementSibling;
while (!link || !nextElement) {
  if (!nextElement) break;

  if (nextElement.tagName === 'A') {
    link = nextElement;
  }
  nextElement = nextElement.nextElementSibling;
}

// 2.2
const link2 = document.querySelector('ul ~ a');
link2.id = 'link';

// ============= 3 ==============
// На li через один (начиная с самого первого) установить класс “item”
const [...allLi] = document.querySelectorAll('li');
allLi.forEach((li, index) => {
  if (!(index % 2)) {
    li.classList.add('item');
  }
});

const [...liN2] = document.querySelectorAll('li:nth-child(odd)');
liN2.forEach(li => li.classList.add('item'));

// ============= 4 ==============
// На все ссылки в примере установить класс “custom-link”
const [...links] = document.links;
links.forEach(link => link.classList.add('custom-link'));
