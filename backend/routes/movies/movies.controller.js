const { getTopMovies, getMovieByname } = require("../../models/movies.model");

const httpGetTopMovies = (req, res) => {
  return res.json(getTopMovies());
};

const httpGetMovieByName = async (req, res) => {
  if (req.params.name === undefined) return res.status(400);
  const movieName = req.params.name;
  const movieData = await getMovieByname(movieName);
  return res.json(movieData);
};

module.exports = {
  httpGetTopMovies,
  httpGetMovieByName,
};
