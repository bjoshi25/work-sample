import { SET_CHARACTER, SET_COMICSDATA } from './actionTypes';
import axios from 'axios';

export const setCharacter = (character) =>{
  return dispatch => {
    dispatch({type: SET_CHARACTER,payload: character})
  }
}

export const setComicsData = (character) => {
  return dispatch => {
  return  axios.get(`/${character}`)
    .then(data => {
    dispatch({type : SET_COMICSDATA, payload : data })
    })
    .catch(err => {
    console.log('Error in fetching data from API')
  })}}
