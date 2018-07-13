import { all } from 'redux-saga/effects';
import userSaga from './userSaga';
import loginSaga from './loginSaga';
import waterSaga from './waterSaga';



export default function* rootSaga() {
  yield all([
    userSaga(),
    loginSaga(),
    waterSaga(),
    // watchIncrementAsync()
  ]);
}
