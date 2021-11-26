const axios = require("axios");
const cacheTopMovies = [];
const cacheSearchedMovies = new Map();

const MOVIES_API_REQUEST = "http://www.omdbapi.com/";
// Should be in dotenv file
const API_KEY = "27f3233";
const arrayOfTopMoviesIds = [
  "tt1201607",
  "tt0241527",
  "tt0295297",
  "tt0304141",
  "tt0330373",
  "tt0373889",
  "tt0926084",
  "tt1756545",
  "tt0417741",
  "tt0304140",
];

const getTopMovies = () => {
  return cacheTopMovies;
};

const getMovieByname = async (movieName) => {
  try {
    if (cacheSearchedMovies.has(movieName))
      return cacheSearchedMovies.get(movieName);
    const searchedMovieResponse = await axios.get(
      `${MOVIES_API_REQUEST}?apikey=${API_KEY}&t=${movieName}`
    );
    const searchedMovieData = searchedMovieResponse.data;
    if (searchedMovieData.Response === "False")
      return { err: searchedMovieData.Error };
    cacheSearchedMovies.set(searchedMovieData.Title, searchedMovieData);

    return searchedMovieData;
  } catch (err) {
    console.log(err);
    return { err: "Error on api request to imdb" };
  }
};

const loadTopMovies = async () => {
  try {
    const arrayOfMoviePromises = await Promise.all(
      arrayOfTopMoviesIds.map(async (movieId) => {
        const movieResponse = await axios.get(
          `${MOVIES_API_REQUEST}?apikey=${API_KEY}&i=${movieId}`
        );
        const movieData = movieResponse.data;
        if (movieData.Response === "False") return { err: movieData.Error };

        cacheTopMovies.push(movieData);
        cacheSearchedMovies.set(movieData.Title, movieData);
      })
    );

    return arrayOfMoviePromises;
  } catch (error) {
    console.log(error);
    return { err: "Error on api request to imdb" };
  }
};

module.exports = {
  loadTopMovies,
  getMovieByname,
  getTopMovies,
};
