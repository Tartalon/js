const div = document.querySelector('div');
const titles = document.querySelector('h1');

const divParent = div.parentElement;
const link = div.querySelector('.link');
const linkParent = link.parentElement; // Возвращает прямого родителя
const clos = link.closest('.content'); // Возвращает ближуйшего родителя

// div.classList.add('article', 'custom');
// div.classList.contains('custom');
const linkHref = link.href;

div.setAttribute('id', 'myId');

// div.dataset;
// div.dataset.myattr;
// div.getAttribute('data-myattr');
