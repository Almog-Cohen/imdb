import * as React from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const BasicModal = (props) => {
  const { modalData, setModalData } = props;

  return (
    <div>
      <Modal
        open={true}
        onClose={() => setModalData(null)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card sx={style}>
          <CardMedia
            component="img"
            height="140"
            src={modalData.Poster}
            alt="Poster"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {modalData.Title}
            </Typography>
            <Typography gutterBottom variant="h7" component="div">
              {`Director: ${modalData.Director}`}
            </Typography>
            <Typography gutterBottom variant="h8" component="div">
              {`Actors: ${modalData.Actors}`}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {modalData.Plot}
            </Typography>
            <Typography variant="body2">{`Run time: ${modalData.Runtime}`}</Typography>
            <Typography variant="body2">{`Released: ${modalData.Released}`}</Typography>
            <Typography variant="body2">{modalData.imdbRating}</Typography>
          </CardContent>
        </Card>
      </Modal>
    </div>
  );
};

export default BasicModal;
