import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import water from './waterReducer';
import device from './deviceReducer';

const store = combineReducers({
  user,
  login,
  water,
  device,
});

export default store;
