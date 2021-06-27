const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let date = new Date(2021, 9, 25, 12, 30);
const year = date.getFullYear();
const day = date.getDate();
const weekday = date.getDay();
const month = date.getMonth();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();

const currMonth = months[month];
const currWeekday = weekdays[weekday];

giveaway.textContent = `giveaway ends on ${currWeekday}, ${day} ${currMonth} ${year}, ${hours}:${minutes}`;

const time = date.getTime();

const getRemeaningTime = () => {
  const today = new Date().getTime();
  const timeLeft = time - today;

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  let days = Math.floor(timeLeft / oneDay);
  let hours = Math.floor((timeLeft % oneDay) / oneHour);
  let minutes = Math.floor((timeLeft % oneHour) / oneMinute);
  let seconds = Math.floor((timeLeft % oneMinute) / 1000);

  const values = [days, hours, minutes, seconds];

  function format(item) {
    if (item < 10) return `0${item}`;
    return item;
  }

  items.forEach((item, index) => {
    item.innerHTML = format(values[index]);
  });

  if (timeLeft < 0) {
    deadline.innerHTML = `<h4 class='expired'>sorry, this giveaway has expired! Please, update the counter </h4>`;
  }
};

let countdown = setInterval(getRemeaningTime, 1000);
getRemeaningTime();
