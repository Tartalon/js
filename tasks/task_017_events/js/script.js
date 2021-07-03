'use strict';

// Реализовать примитивный дропдаун. Изначально все dropdown-menu скрыты через класс .d-none. При клике на dropdown-item должен отображаться блок dropdown-menu который вложен именно в тот dropdown-item на котором произошел клик. При повторном клике на этот же dropdown-item блок dropdown-menu должен закрыться. При клике на любой другой dropdown-item уже открытый dropdown-menu должен закрываться а на тот который кликнули открываться.

// const dropdownMenu = document.querySelectorAll('.dropdown-menu');
const [...dropdownItem] = document.querySelectorAll('.dropdown-item');
const [...dropdownMenu] = document.querySelectorAll('.dropdown-menu');

dropdownItem.forEach((item, index) => {
  item.addEventListener('click', (e) => {
    dropdownMenu[index].classList.toggle('d-none');
  });
});
