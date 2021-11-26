import axios from "axios";
const API_URL = "http://localhost:8000/v1/movies";
const API_TOP_MOVIES = "get-top-movies";
const API_SEARCHED_MOVIE = "get-movie";
// Fetch top 10 movies
export const httpFetchMovies = async () => {
  const topMoviesResponse = await axios.get(`${API_URL}/${API_TOP_MOVIES}`);
  return topMoviesResponse.data;
};
// Fetch searched movie
export const httpFetchSearchedMovie = async (movieName) => {
  const topMoviesResponse = await axios.get(
    `${API_URL}/${API_SEARCHED_MOVIE}/${movieName}`
  );
  return topMoviesResponse.data;
};
