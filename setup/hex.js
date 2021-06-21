const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
  let hexStr = '#';
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * hex.length);
    hexStr += hex[index];
  }
  color.textContent = hexStr;
  document.body.style.backgroundColor = hexStr;
});
