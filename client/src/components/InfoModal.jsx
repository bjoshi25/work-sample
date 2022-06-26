import React from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import InfoIcon from '@mui/icons-material/Info';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-25%, -25%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function InfoModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const description = props.comic.description || props.comic.variantDescription || props.comic.title;

  return (
    <div>
      <InfoIcon onClick={handleOpen}/>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
      <Card sx={style}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={`${props.comic.thumbnail.path}.jpg`}
            alt={props.comic.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.comic.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      </Modal>
    </div>
  );
}
