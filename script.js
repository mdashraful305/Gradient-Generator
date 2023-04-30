const form = document.querySelector('form');
const gradientContainer = document.querySelector('.gradient-container');
const gradient = document.querySelector('.gradient');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const color1 = document.querySelector('#color1').value;
  const color2 = document.querySelector('#color2').value;
  
  gradient.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
    $('#ct1').text(color1);
    $('#ct2').text(color2);
});
