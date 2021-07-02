const container = document.querySelector('.container');

const display = (followers) => {
  const newFollowers = followers
    .map((follower) => {
      const { html_url, avatar_url, login } = follower;
      return `<article class='card'>
        <img src='${avatar_url}' />
        <h4>${login}</h4>
        <a class='btn' href='${html_url}'>view profile</a>
    </article>`;
    })
    .join('');

  container.innerHTML = newFollowers;
};

export default display;
