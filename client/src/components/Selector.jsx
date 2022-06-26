import { React, useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ComicGallery from './ComicGallery.jsx';

export default function Selector() {
  const [character, setCharacter] = useState('');
  const [comicsData, setComicsData] = useState([]);

  const handleSelection = (event) => {
    setCharacter(event.target.value);
  };

  const characterNames = [
    'Darth Vader',
    'Annihilation',
    'Fantastic Four',
    'Spider-Man',
    'Amazing Spider-Man',
    'Civil War',
    'Wolverine',
    'Daredevil',
    'Black Panther',
  ];

  const CharacterList = characterNames.map((character) => {
    return(
      <MenuItem value={character} key = {character}>{character}</MenuItem>
    )
  })

  useEffect(() => {
    if (character) {
      axios.get(`/${character}`)
        .then((data) => {
          // console.log('data from API', data);
          setComicsData(data);
        })
        .catch((error) => {
          console.log('error in fetching data from the API', error);
        })
    }
  }, [character])

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl  sx={{ minWidth: 500 }} >
        <InputLabel id="demo-simple-select-label">Choose a Comic Character</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={character}
          label="Age"
          onChange={handleSelection}
        >
          {CharacterList}
        </Select>
      </FormControl>
      <ComicGallery comics = {comicsData} character = {character}/>
    </Box>
  );
}


