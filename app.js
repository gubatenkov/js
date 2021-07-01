const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prevBtn');
const next = document.querySelector('.nextBtn');

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

let counter = 0;

document.addEventListener('DOMContentLoaded', () => {
  setInterval(() => {
    counter++;
    if (counter > slides.length - 1) counter = 0;
    translateSlide();
  }, 3000);
});

next.addEventListener('click', () => {
  counter++;
  if (counter > slides.length - 1) counter = 0;
  translateSlide();
});

prev.addEventListener('click', () => {
  counter--;
  if (counter < 0) counter = slides.length - 1;
  translateSlide();
});

function translateSlide() {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}
