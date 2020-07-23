// Function declaration - можем візвать когда угодно
const user = {
  name: 'Vovka',
  age: 35
};

function getObj(obj) {
  console.log(obj);
  obj.name = 'Vov';
}
getObj(user);
console.log(user);



// Function expresion - Не можем вызвать до присвоения в переменную + не везде можно объявить.
const square = function(x) {
  return x * x;
};



// самовызывающеяся ф-ция + анонимная. Сразу вызывается и выполняется. В них могут завернуть весь код (инкапсулировать и закрыть доступ в глобальное пространство).
// (function (параметр) {
      // тело
// })(передаваемый параметр);
(function (msg) {
  console.log(msg);
}) ("Hello world");