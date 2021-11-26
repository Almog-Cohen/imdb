import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const MovieCard = (props) => {
  const { movieData, handleOpenModal } = props;
  return (
    <>
      <Card
        sx={{ width: 400, height: 400, background: "rgb(181, 184, 179)" }}
        onClick={() => handleOpenModal(movieData)}
      >
        <CardMedia
          component="img"
          height="140"
          src={movieData.Poster}
          alt="Poster"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {movieData.Title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {movieData.Plot}
          </Typography>
          <Typography variant="body2">{movieData.imdbRating}</Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default MovieCard;
