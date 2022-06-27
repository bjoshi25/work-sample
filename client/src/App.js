import  React, {useState, useEffect } from 'react';
import { connect } from "react-redux";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ComicGallery from './components/ComicGallery.jsx';
import { setCharacter, setComicsData } from './redux/actions/actions.js'
import {bindActionCreators} from 'redux'

class SelectCharacter extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      character: '',
      comicsData: []
    }
    this.handleSelection = this.handleSelection.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }

 handleSelection = (event) => {
    this.props.setCharacter(event.target.value);
  };

  fetchData = (character) => {
    this.props.setComicsData(character);
  }

  componentDidUpdate(prevProps) {
    if (this.props.character !== prevProps.character) {
      this.fetchData(this.props.character);
    }
  }


 characterNames = [
    'Darth Vader',
    'Avengers',
    'Annihilation',
    'Fantastic Four',
    'Spider-Man',
    'Amazing Spider-Man',
    'Civil War',
    'Wolverine',
    'Daredevil',
    'Black Panther',
  ];

  render() {
    let CharacterList = this.characterNames.map((charactername) => {
      return(
        <MenuItem value={charactername} key = {charactername}>{charactername}</MenuItem>
      )
    })

    return (
      <Box sx={{ minWidth: 120 }}>
        <FormControl  sx={{ minWidth: 500 }} >
          <InputLabel id="demo-simple-select-label">Choose a Comic Character</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={this.props.character}
            label="Age"
            onChange={this.handleSelection}
          >
            {CharacterList}
          </Select>
        </FormControl>
        <ComicGallery comics = {this.props.comicsData} character = {this.props.character}/>
      </Box>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    character: state.characterReducer.character,
    comicsData: state.characterReducer.comicsData
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  setCharacter,
  setComicsData
},dispatch);

export default connect(mapStateToProps, mapDispatchToProps )(SelectCharacter);

