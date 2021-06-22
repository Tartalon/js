const div = document.querySelector('div');
const titles = document.querySelector('h1');

const divParent = div.parentElement;
const link = div.querySelector('.link');
const linkParent = link.parentElement; // Возвращает прямого родителя
const clos = link.closest('.content'); // Возвращает ближуйшего родителя

// div.classList.add('article', 'custom');
// div.classList.contains('custom');
// const linkHref = link.href;

// div.setAttribute('id', 'myId');

// div.dataset;
// div.dataset.myattr;
// div.getAttribute('data-myattr');

// DOM MANIPULATION
const title = document.querySelector('h1');
// title.innerHTML = '<span>text</span>';
// title.innerHTML += '<span>new text</span>';

// CREATE ELEMENTS
const span = document.createElement('span');
span.textContent = ' span created by createElement';
span.classList.add('myClass');
// title.appendChild(span);

const fragment = document.createDocumentFragment(); // Дом узел
const colors = ['black', 'yellow', 'orange'];
colors.forEach(color => {
  const item = document.createElement('div');
  item.classList.add(`bg-${color}`);
  item.style.background = color;
  item.textContent = color;
  fragment.appendChild(item);
});
document.body.appendChild(fragment);

// title.remove();
// title.parentElement.removeChild(title);
