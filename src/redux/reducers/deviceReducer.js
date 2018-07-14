import { combineReducers } from 'redux';
import { DEVICE_ACTIONS } from '../actions/deviceActions';

const device = (state = [], action) => {
  switch (action.type) {
    case DEVICE_ACTIONS.FETCH_DEVICES:
        console.log('in deviceReducer', state)
        return state;
    case DEVICE_ACTIONS.SHOW_DEVICES:
        return action.payload
    default:
      return state;
  }
};

export default combineReducers({
  device,
});