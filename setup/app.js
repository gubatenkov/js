const value = document.getElementById('value');
const buttons = document.querySelectorAll('.btn');
// const inc = document.querySelector('.increase');
// const dec = document.querySelector('.decrease');
// const res = document.querySelector('.reset');
let count = 0;

// inc.addEventListener('click', () => {
//   count += 1;
//   value.innerHTML = count;
// });

// dec.addEventListener('click', () => {
//   count -= 1;
//   value.innerHTML = count;
// });

// res.addEventListener('click', () => {
//   count = 0;
//   value.innerHTML = count;
// });

buttons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const classList = e.target.classList;
    if (classList.contains('decrease')) {
      count--;
      value.innerText = count;
    }
    if (classList.contains('increase')) {
      count++;
      value.innerText = count;
    }
    if (classList.contains('reset')) {
      count = 0;
      value.innerText = count;
    }
  });
});
