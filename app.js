import sublinks from './data.js';

const toggleBtn = document.querySelector('.toggle-btn');
const closeBtn = document.querySelector('.close-btn');
const sidebarWrap = document.querySelector('.sidebar-wrapper');
const sidebar = document.querySelector('.sidebar-links');
const linksBtns = [...document.querySelectorAll('.link-btn')];
const submenu = document.querySelector('.submenu');
const hero = document.querySelector('.hero');
const nav = document.querySelector('.nav');

closeBtn.addEventListener('click', () => {
  sidebarWrap.classList.remove('show');
});

toggleBtn.addEventListener('click', () => {
  sidebarWrap.classList.add('show');
});

sidebar.innerHTML = sublinks
  .map((item) => {
    const { page, links } = item;

    return `<article>
    <h4>${page}</h4>
    <div class='sidebar-sublinks'>${links
      .map((link) => {
        return `<a href='${link.url}'><i class='${link.icon}'></i>${link.label}</a>`;
      })
      .join('')}</div>
    </article>`;
  })
  .join('');

linksBtns.forEach((btn) => {
  btn.addEventListener('mouseover', (e) => {
    const text = e.currentTarget.dataset.menu;
    const tempBtn = e.currentTarget.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;

    const tempPage = sublinks.find(({ page }) => page === text);
    if (tempPage) {
      const { page, links } = tempPage;
      submenu.classList.add('show');
      submenu.style.left = `${center}px`;
      submenu.style.top = `${bottom}px`;
      let cols = '2';
      if (links.length === 3) cols = 3;
      if (links.length > 3) cols = 4;
      submenu.innerHTML = `<section>
      <h4>${page}</h4>
      <div class='submenu-center col-${cols}'>
      ${links
        .map((link) => {
          return `<a href='${link.url}'>
          <i class='${link.icon}'></i>${link.label}
          </a>`;
        })
        .join('')}
      </div>
      </section>`;
    }
  });
});

nav.addEventListener('mouseover', (e) => {
  if (!e.target.classList.contains('link-btn')) {
    submenu.classList.remove('show');
  }
});

hero.addEventListener('mouseover', (e) => {
  submenu.classList.remove('show');
});
