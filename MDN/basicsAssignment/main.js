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

  newImage.onclick = function(event) {
    target = event.target.getAttribute('src');
    displayedImage.setAttribute('src', target);
  }
}

/* Wiring up the Darken/Lighten button */
btn.onclick = function (event) {
  target = event.target;
  if(target.getAttribute('class', "dark")) {
    btn.setAttribute('class', "light");
    btn.textContent = 'Светлее';
    overlay.style.backgroundColor = rgba(0,0,0,0.5);
  } else {
    btn.setAttribute('class', "dark");
    btn.textContent = 'Темнее';
    overlay.style.backgroundColor = rgba(0,0,0,0);
  }
}