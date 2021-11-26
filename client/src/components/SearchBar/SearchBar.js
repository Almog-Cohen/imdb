import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = (props) => {
  const { handleClickSearchIcon } = props;
  const [searchedTxt, setSearchedTxt] = useState("");
  return (
    <Paper
      component="form"
      sx={{
        marginLeft: "20px",
        marginRight: "7px",
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 300,
      }}
    >
      <InputBase
        onChange={(e) => setSearchedTxt(e.target.value)}
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search for a movie"
        value={searchedTxt}
      />
      <IconButton
        onClick={() => handleClickSearchIcon(searchedTxt)}
        sx={{ p: "10px" }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
