import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import water from './waterReducer';
import device from './deviceReducer';
import weather from './weatherReducer';
import soilData from './soilReducer';

const store = combineReducers({
  user,
  login,
  water,
  device,
  weather,
  soilData,
});

export default store;
