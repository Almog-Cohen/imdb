import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./SearchedMovieContainer.css";

const SearchedMovieConatiner = (props) => {
  const { searchedMovie, handleOpenModal } = props;
  return (
    <div className="search-movie-container">
      <h1>Your result...</h1>
      <MovieCard movieData={searchedMovie} handleOpenModal={handleOpenModal} />
    </div>
  );
};

export default SearchedMovieConatiner;
