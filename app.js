const sidebar = document.querySelector('.sidebar');
const toggle = document.querySelector('.sidebar-toggle');
const closeSide = document.querySelector('.close-btn');

toggle.addEventListener('click', () => {
  sidebar.classList.toggle('show-sidebar');
});

closeSide.addEventListener('click', () => {
  sidebar.classList.remove('show-sidebar');
});
