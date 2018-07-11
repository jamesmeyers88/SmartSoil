import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import water from './waterReducer';

const store = combineReducers({
  user,
  login,
  water,
});

export default store;
