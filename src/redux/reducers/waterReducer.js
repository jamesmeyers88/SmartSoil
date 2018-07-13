import { combineReducers } from 'redux';
import { WATER_ACTIONS } from '../actions/waterActions';

const events = (state = [], action) => {
  switch (action.type) {
    case WATER_ACTIONS.FETCH_EVENTS:
        console.log('in waterREducer', state)
        return state;
    case WATER_ACTIONS.SHOW_EVENTS:
        return action.payload
    default:
      return state;
  }
};

export default combineReducers({
  events,
});