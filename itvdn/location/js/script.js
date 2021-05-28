console.log(document.location);
console.log(document.location.protocol);
console.log(document.location.host);
console.log(document.location.pathname);
console.log(document.location.host.search);

// распарсить значения которые передаются через адресную строку
// Функ чтения данных при GET запросе (в адресной строке)
function getQuertyString() {

  let args = {};                                    // Пустой объект

  let query = location.search.substring(1);        // Получение строки запроса
  let pairs = query.split('&');                  // Разделение строки по амперсанду
  
  for (let i = 0; i < pairs.length; i++) {

    let pos = pairs[i].indexOf('=');               // Проверка пары "name=value"
    if (pos == -1) {                               // Если не найдено - пропустить
      continue;
    }

    let argName = pairs[i].substring(0, pos);      // Получение имени
    let value = pairs[i].substring(pos + 1);       // Получение значения

    args[argName] = value;                         // Сохранение как свойства
  }
  return args;
}

//Для теста перейти по URL текущей страницы + ?login=admin&password=123
function print() {
  let args = getQuertyString();
  let e = document.createElement('p');

  e.innerHTML = 'Login' + args.login + '<br/>';
  e.innerHTML = 'Password' + args.password;

  document.body.appendChild(e);
}