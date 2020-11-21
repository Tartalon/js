var output = document.querySelector('.output');
output.innerHTML = '';

var i = 10;

//================================================
// while (i >= 0) {
//   var para = document.createElement('p');

//   para.textContent = i;
//   if (para.textContent == 10) {
//     para.textContent = 'Обратный отсчет 10';
//   }
//   if (para.textContent == 0) {
//     para.textContent = 'Пуск';
//   }
//   output.appendChild(para);
//   i--;
// }

//==================================================

while (i >= 0) {
  var para = document.createElement('p');
  if(i === 10) {
    para.textContent = `Обратный отсчет ${i}`;
  } else if(i === 0) {
    para.textContent = `Пуск`;
  } else {
    para.textContent = i;
  }

  output.appendChild(para);
  i--;
}

// var para = document.createElement('p');
// para.textContent = ;
// output.appendChild(para);
