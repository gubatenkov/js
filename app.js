// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const nav = document.getElementById('nav');
const renderDate = document.querySelector('.date');
const currentYear = new Date().getUTCFullYear();

renderDate.textContent = currentYear;
// ********** close links ************
const toggle = document.querySelector('.nav-toggle');
const container = document.querySelector('.links-container');
const linksList = document.querySelector('.links');
const topLink = document.querySelector('.top-link');
const navHeight = nav.getBoundingClientRect().height;

toggle.addEventListener('click', () => {
  container.classList.toggle('show-links');
  const containerHeight = container.getBoundingClientRect().height;
  const linksHeight = linksList.getBoundingClientRect().height;

  if (containerHeight === 0) {
    container.style.height = `${linksHeight}px`;
  } else {
    container.style.height = 0;
  }
});

// ********** fixed navbar ************
window.addEventListener('scroll', () => {
  const home = document.getElementById('home');
  const homeHeight = home.getBoundingClientRect().height;

  if (window.pageYOffset > homeHeight - navHeight) {
    nav.style.position = 'fixed';
    // nav.style.top = '0';
  } else {
    nav.style.position = 'sticky';
  }

  if (window.pageYOffset > navHeight * 0.7) {
    nav.classList.add('fixed-nav');
  } else {
    nav.classList.remove('fixed-nav');
  }

  if (window.pageYOffset > 500) {
    topLink.classList.add('show-link');
  } else {
    topLink.classList.remove('show-link');
  }
});
// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const id = e.currentTarget.getAttribute('href').slice(1);
    const element = document.getElementById(id);
    const fixedNav = nav.classList.contains('fixed-nav');
    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position -= navHeight;
    }
    if (navHeight > 82) {
      position += containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    container.style.height = '0';
  });
});
