const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */

for (let i = 1; i <= 5; i++) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `images/pic${i}.jpg`);
  thumbBar.appendChild(newImage);
  console.log(newImage.getAttribute('src'));
  // newImage.onclick = function () {

  // }
}


/* Wiring up the Darken/Lighten button */