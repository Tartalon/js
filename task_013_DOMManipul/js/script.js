'use strict';

const ul = document.querySelector("ul");

// ================ 1 ============
// Найти параграф и получить его текстовое содержимое (только текст!)

const paragrText = document.querySelector('p').textContent;

// =============== 2 =============
// Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает информацию (в виде объекта) о типе узла, об имени узла и о количестве дочерних узлов (если детей нет - 0).

function getElementInfo(node) {
  return {
    nodeType: node.nodeType,
    tagName: node.tagName,
    childNodes: node.childNodes
  };
}
const elementInfo = getElementInfo(ul);
// console.log(getElementInfo(elementInfo));

// =============== 3 =============
// Получить массив, который состоит из текстового содержимого ссылок внутри списка: getTextFromUl(ul) ---> ["Link1", "Link2", "Link3"]

// function getTextFromUl(list) {
//   const textFromLi = [];
//   Array.from(list.children).forEach((item) => {
//     textFromLi.push(item.textContent);
//   })
//   return textFromLi
// }

function getTextFromUl (list) {
  if (!(list instanceof HTMLElement)) return;
  const [...links] = list.querySelectorAll('a') || [];
  return links.map(a => a.textContent);
}
console.log(getTextFromUl(ul));

// =============== 4 =============
// В параграфе заменить все дочерние текстовые узлы на “-text-” (вложенные теги должны остаться). Конечный результат:
// -text-<a href="#">reprehendunt</a>-text-<mark>nemore</mark>-text-

const paragraf = document.querySelector('p');
function removeText (p) {
  if (!(p instanceof HTMLElement)) return;
  const arr = Array.from(p.childNodes)
  arr.forEach((item) => {
    if (item.nodeName == '#text') {
      item.textContent = '-text-';
    };
  })
}
removeText(paragraf);

// const [...pChildNodes] = document.querySelector('p').childNodes;
// pChildNodes.forEach(child => {
//   if (child.nodeType === 3) {
//     child.textContent = '-text-'
//   }
// });