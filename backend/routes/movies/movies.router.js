const express = require("express");
const { httpGetMovieByName, httpGetTopMovies } = require("./movies.controller");
const moviesRouter = express.Router();

moviesRouter.get("/get-top-movies", httpGetTopMovies);
moviesRouter.get("/get-movie/:name", httpGetMovieByName);

module.exports = moviesRouter;
