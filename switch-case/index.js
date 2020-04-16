let a = 1;
let b = 0;

// выражение ? если true : если false;
// выражение ? если true ? выражение ? если true : если false;

b = a > 0 ? a : b + 1;
b = a > 0 ? 2 : a < 0  ? 3 : 0;



let color = 'orange';

switch (color) {
  case 'yellow':
    console.log('yellow');
    break;
  case 'orange':
    console.log('orange');
    break;
  default:
    'default';
};

// Если нужно выполнить одно и тоже действие для разных кейсов

switch (a) {
  case 'block':
  case 'none':
  case 'inline':
    console.log(a);
    break;
  default:
    console.log('other');
};