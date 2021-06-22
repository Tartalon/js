'use strict';

// ================ 1 ============
// Найти параграф и получить его текстовое содержимое (только текст!)

const paragrText = document.querySelector('p').textContent;

// =============== 2 =============
// Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает информацию (в виде объекта) о типе узла, об имени узла и о количестве дочерних узлов (если детей нет - 0).

function getElementInfo(element) {
  const elem = {
    type:
    name:
    children:
  };
}

console.log(paragrText);
