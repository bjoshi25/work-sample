import { combineReducers } from 'redux';
import { characterReducer } from './characterReducer';

const config = {
  characterReducer : characterReducer
  }
  const appReducer  = combineReducers(config);
  export default appReducer;

