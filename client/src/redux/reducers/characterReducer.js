import { SET_CHARACTER, SET_COMICSDATA } from '../actions/actionTypes';

const initialState = {
  character: '',
  comicsData: []
};

export const characterReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_CHARACTER:
      return {
        ...state,
        character: action.payload
      }
    case SET_COMICSDATA: {
      return {
        ...state,
        comicsData: action.payload
      }
    }
    default:
      return state
  }
}