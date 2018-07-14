import { all } from 'redux-saga/effects';
import userSaga from './userSaga';
import loginSaga from './loginSaga';
import waterSaga from './waterSaga';
import deviceSaga from './deviceSaga';
import weatherSaga from './weatherSaga';
import soilSaga from './soilSaga';



export default function* rootSaga() {
  yield all([
    userSaga(),
    loginSaga(),
    waterSaga(),
    deviceSaga(),
    weatherSaga(),
    soilSaga(),
    // watchIncrementAsync()
  ]);
}
