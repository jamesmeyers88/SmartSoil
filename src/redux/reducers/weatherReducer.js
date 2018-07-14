import { combineReducers } from 'redux';
import { WEATHER_ACTIONS } from '../actions/weatherActions';

const temp = (state = [], action) => {
  switch (action.type) {
    case WEATHER_ACTIONS.FETCH_TEMP:
        console.log('in tempREducer', state)
        return state;
    case WEATHER_ACTIONS.SHOW_TEMP:
        // this.setState({
        //     temp: action.payload,
        // })
        return state
    default:
      return state;
  }
};

export default combineReducers({
  temp,
});