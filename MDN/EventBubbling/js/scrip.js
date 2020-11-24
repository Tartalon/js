const btn = document.querySelector('button');
const videoBox = document.querySelector('div');
const video = document.querySelector('video');

btn.onclick = function () {
  videoBox.setAttribute('class', 'showing');
};

videoBox.onclick = function () {
  videoBox.setAttribute('class', 'hidden');
};

video.onclick = function () {
  video.play();
};