const btn = document.getElementById('btn');
const menu = document.getElementById('mobile-menu');

const tombol = document.getElementById('menu');
const x = document.getElementById('x');

// add event listener
btn.addEventListener('click', () => {
  menu.classList.toggle('hidden');
  x.classList.toggle('invisible');
  tombol.classList.toggle('invisible');
});