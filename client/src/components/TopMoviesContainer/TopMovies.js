import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";

import "./TopMovies.css";

const TopMovies = (props) => {
  const { topMoviesData, handleOpenModal } = props;
  return (
    <div className="top-movies-container">
      <h1 className="title">Top 10 Movies</h1>
      <Swiper
        spaceBetween={20}
        slidesPerView="auto"
        height={200}
        direction="horizontal"
      >
        {topMoviesData.map((movieData) => (
          <SwiperSlide key={movieData.imdbID} className="swiper-slide">
            <MovieCard
              key={movieData.imdbID}
              movieData={movieData}
              handleOpenModal={handleOpenModal}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopMovies;
