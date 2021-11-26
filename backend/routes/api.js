const express = require("express");

const  moviesRouter= require("./movies/movies.router");

const api = express.Router();

api.use("/movies", moviesRouter);

module.exports = api;