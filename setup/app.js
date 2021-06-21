const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
  const randomColor = Math.floor(Math.random() * colors.length);
  color.innerHTML = colors[randomColor];
  document.body.style.backgroundColor = colors[randomColor];
});
