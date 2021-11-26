import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./Header.css";
import Logo from "./imdb.png";

const Header = (props) => {
  const { handleClickSearchIcon } = props;
  return (
    <div className="header__wrapper">
      <div className="header__logo">
        <img src={Logo} width={70} height={70} />
      </div>
      <h1 className="app-title">MovieRate</h1>
      <SearchBar handleClickSearchIcon={handleClickSearchIcon} />
    </div>
  );
};

export default Header;
