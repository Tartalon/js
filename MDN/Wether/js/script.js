var select = document.querySelector('select'); 
var list = document.querySelector('ul'); 
var h1 = document.querySelector('h1'); 

select.onchange = function() {
  var choice = select.value;

  // ДОБАВЬТЕ СЮДА УСЛОВНОЕ ВЫРАЖЕНИЕ
  let days = 0;
  if (choice === 'Февраль' || choice === 'Апрель' || choice === 'Июнь' || choice === 'Сентябрь' || choice === 'Ноябрь') {
    days = 30;
  } else {
    days = 31;
  }
  console.log(days);
  createCalendar(days, choice); 
} 

function createCalendar(days, choice) {
  list.innerHTML = ''; 
  h1.textContent = choice; 
  for (var i = 1; i <= days; i++) {
    var listItem = document.createElement('li'); 
    listItem.textContent = i; 
    list.appendChild(listItem); 
   } 
} 

createCalendar(31,'Январь'); 