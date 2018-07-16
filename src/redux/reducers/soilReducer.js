import { combineReducers } from 'redux';
import { SOIL_ACTIONS } from '../actions/soilActions';

const soilData = (state = [], action) => {
  switch (action.type) {
    case SOIL_ACTIONS.FETCH_SOIL:
        console.log('in soilReducer', state)
        return state;
    // case SOIL_ACTIONS.SHOW_MOISTURE:
    //     console.log(`this is your SHOW_MOISTURE`, action.payload)
    //     return action.payload;
    case SOIL_ACTIONS.SOIL_DATA:
        console.log(`this is your soilData`, action.payload )
        return action.payload; 
    default:
      return state;
  }
};

export default combineReducers({
  soilData,
});