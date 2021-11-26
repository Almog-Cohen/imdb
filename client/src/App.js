import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import BasicModal from "./components/Modal/Modal";
import SearchedMovieConatiner from "./components/SearchedMovieConatiner/SearchedMovieConatiner";
import TopMovies from "./components/TopMoviesContainer/TopMovies";
import { httpFetchMovies, httpFetchSearchedMovie } from "./utils/apiClient";

function App() {
  const [topMoviesData, setTopMoviesData] = useState(null);
  const [searchedMovie, setSearchedMovie] = useState(null);
  const [modalData, setModalData] = useState(null);
  const [errorTxt, setErrorTxt] = useState("");

  // When search icon is clicked send movie name to the server
  const handleClickSearchIcon = async (movieName) => {
    setErrorTxt("");
    const searchedMovieResponse = await httpFetchSearchedMovie(movieName);
    if (searchedMovieResponse.err === undefined)
      return setSearchedMovie(searchedMovieResponse);
    setSearchedMovie(null);
    setErrorTxt(searchedMovieResponse.err);
  };

  // Open modal with movie data
  const handleOpenModal = (movieData) => {
    setModalData(movieData);
  };

  useEffect(() => {
    const fetchTopMovies = async () => {
      const topMoviesResponse = await httpFetchMovies();
      setTopMoviesData(topMoviesResponse);
    };

    fetchTopMovies();
  }, []);

  return (
    <div className="App">
      <Header handleClickSearchIcon={handleClickSearchIcon} />
      {topMoviesData && (
        <TopMovies
          topMoviesData={topMoviesData}
          handleOpenModal={handleOpenModal}
        />
      )}
      {searchedMovie && (
        <SearchedMovieConatiner
          searchedMovie={searchedMovie}
          handleOpenModal={handleOpenModal}
        />
      )}
      {errorTxt !== "" && (
        <p style={{ color: "red", textAlign: "center" }}>{errorTxt}</p>
      )}
      {modalData && (
        <BasicModal modalData={modalData} setModalData={setModalData} />
      )}
    </div>
  );
}

export default App;
