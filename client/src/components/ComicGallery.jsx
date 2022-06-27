import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoModal from './InfoModal.jsx';
import Skeleton from '@mui/material/Skeleton';

export default function ComicGallery(props) {

  const comicsData = props.comics.data;

  return (
    !Array.isArray (comicsData) ?
    <>
      <Skeleton variant="rectangular" width={500} height={800} />
    </>
    :
    <ImageList sx={{ width: 500, height: 800 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">{props.character}</ListSubheader>
      </ImageListItem>
      {comicsData.map((comic) => (
        <ImageListItem key={comic.id}>
          <img
            src={`${comic.thumbnail.path}.jpg`}
            alt={comic.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={comic.title}
            subtitle={comic.creators.items[0].name}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${comic.title}`}
              >
                <InfoModal comic = {comic} />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
