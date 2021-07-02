const paginate = (followers) => {
  const itemsPerPage = 8;
  const totalPages = Math.ceil(followers.length / itemsPerPage);

  const newFollowers = Array.from({ length: totalPages }, (_, index) => {
    const start = index * itemsPerPage;
    return followers.slice(start, start + itemsPerPage);
  });
  return newFollowers;
};

export default paginate;
