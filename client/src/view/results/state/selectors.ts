export const getTotalMovies = (movies) => {
  return movies.length;
}

export const getMovies = (movies, filterId) => {
  if (filterId == '') return movies;
  return movies.filter((movie) => movie.genre.id == filterId)
}
