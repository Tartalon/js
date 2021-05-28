let countStart = document.querySelector('.countStart'),
  count = document.querySelector('.count');
  let counterIntervalHeadler;

countStart.addEventListener('click', () => {
  counterIntervalHeadler = setInterval(counter, 1000);
});

function counter () {
  if (count.textContent == 1) {
    clearInterval(counterIntervalHeadler);
  }
  count.textContent = +count.textContent - 1;
}