//using selectors inside the element
// traversing the dom

const items = document.querySelectorAll('.question');
const btns = document.querySelectorAll('.question-btn');

// btns.forEach((btn) =>
//   btn.addEventListener('click', (e) => {
//     e.currentTarget.parentElement.parentElement.classList.toggle('show-text');
//   })
// );

items.forEach((item) => {
  const btn = item.querySelector('.question-btn');
  btn.addEventListener('click', () => {
    item.classList.toggle('show-text');
    items.forEach((question) => {
      if (question !== item) question.classList.remove('show-text');
    });
  });
});
