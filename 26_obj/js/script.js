function getSecondsInTime(s) {
  let hour = Math.floor(s / 3600) % 24;
  let sec = s % 60;
  let min = Math.round(s / 60) % 60;

  if (hour < 10) hour = '0' + hour;
  if (min < 10) min = '0' + min;
  if (sec < 10) sec = '0' + sec;

  return `Time is: ${hour}:${min}:${sec}`;
}

// 1 ================
// Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), и следующие функции для работы с этим объектом:
// Функция для вывода на экран информации об автомобиле;
// Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час

let car = {
  brand: 'Toyota',
  model: 'Prado',
  year: '2004',
  speed: '80',

  getCarInfo: function () {
    return `The car brand: ${this.brand}, model: ${this.model}, year: ${this.year}, speed: ${this.speed}`;
  },

  travelTime: function (distance) {
    let timeInSeconds = (distance / this.speed) * 3600;
    let rest = Math.floor(timeInSeconds / 14400);
    timeInSeconds += rest * 3600;

    return getSecondsInTime(timeInSeconds);
  },
};
console.log(car.getCarInfo());
console.log(car.travelTime(320));
