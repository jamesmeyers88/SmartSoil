import { combineReducers } from 'redux';
import { SOIL_ACTIONS } from '../actions/soilActions';

const soil = (state = [], action) => {
  switch (action.type) {
    case SOIL_ACTIONS.FETCH_SOIL:
        console.log('in soilReducer', state)
        return state;
    case SOIL_ACTIONS.SHOW_MOISTURE:
        return action.payload
    default:
      return state;
  }
};

export default combineReducers({
  soil,
});