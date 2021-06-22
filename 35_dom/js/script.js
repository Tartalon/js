/*
Зная структуру html, с помощью изученных методов получить (в консоль):
1. head
2. body
3. все дочерние элементы body и вывести их в консоль.
4. первый div и все его дочерние узлы
а) вывести все дочерние узлы в консоль
б) вывести в консоль все дочерние узлы, кроме первого и последнего
Для навигации по DOM использовать методы, которые возвращают только элементы
*/

const head = document.querySelector("head");
const body = document.body;
const firstDiv = document.body.firstElementChild;
const div = firstDiv.children;

console.log(head);
console.log(firstDiv);
console.log(body.children);
console.log(firstDiv.children);
console.log(div);

let filtered = [...firstDiv.children].filter(
  (child) =>
    child !== firstDiv.firstElementChild && child !== firstDiv.lastElementChild
);

console.log(filtered);

// 2=================
/*
Создать функцию, которая принимает два элемента. Функция проверяет, является ли первый элемент родителем для второго:
isParent(parent, child);
isParent(document.body.children[0], document.querySelector('mark'));
// true так как первый див является родительским элементом для mark
isParent(document.querySelector('ul'), document.querySelector('mark'));
// false так как ul НЕ является родительским элементом для mark
Функция принимает только DOM объекты. Обязательно проверяйте это.
*/

function isParent(parent, child) {}

// isParent(document.body.children[0], document.querySelector("mark"));
