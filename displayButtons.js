const displayButtons = (indexActive, pages, container) => {
  let btns = pages.map((_, pageIndex) => {
    return `<button class='page-btn ${
      pageIndex === indexActive ? 'active' : ''
    }' data-index='${pageIndex}'>${pageIndex + 1}</button>`;
  });
  btns.push(`<button class='next-btn'>next</button>`);
  btns.unshift(`<button class='prev-btn'>prev</button>`);
  container.innerHTML = btns.join('');
  const activePage = container.querySelector('.active');
  activePage.style.background = 'dodgerblue';
};

export default displayButtons;
