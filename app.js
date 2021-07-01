import people from './data.js';

const container = document.querySelector('.slide-container');
const next = document.querySelector('.next-btn');
const prev = document.querySelector('.prev-btn');

const newPeople = people
  .map((slide, index) => {
    const { img, name, job, text } = slide;
    let position = 'next';
    if (index === 0) position = 'active';
    if (index === people.length - 1) position = 'last';

    return `<article class="slide ${position}">
    <img class="img"
      src='${img}' alt="">
    <h4>${name}</h4>
    <p class="title">${job}</p>
    <p class="text">${text}</p>
    <div class="quote-icon">
      <i class="fas fa-quote-right"></i>
    </div>
  </article>`;
  })
  .join('');

container.innerHTML = newPeople;

const carousel = (type) => {
  const slide = container.querySelectorAll('.slide');
  const active = container.querySelector('.active');
  let next = active.nextElementSibling;
  const last = container.querySelector('.last');
  if (!next) next = container.firstElementChild;

  active.classList.remove(['active']);
  next.classList.remove(['next']);
  last.classList.remove(['last']);

  if (type === 'prev') {
    active.classList.add('next');
    last.classList.add('active');
    next = last.previousElementSibling;
    if (!next) next = container.lastElementChild;
    next.classList.add('last');
    return;
  }

  active.classList.add('last');
  next.classList.add('active');
  last.classList.add('next');
};

// document.addEventListener('DOMContentLoaded', () => {
//   setInterval(() => {
//     carousel('next');
//   }, 3000);
// });

next.addEventListener('click', () => {
  carousel('next');
});

prev.addEventListener('click', () => {
  carousel('prev');
});
