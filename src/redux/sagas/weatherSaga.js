// import { USER_ACTIONS } from '../actions/userActions';
import { WEATHER_ACTIONS } from '../actions/weatherActions';
import { getTemp } from '../requests/weatherRequests';
import { put, takeLatest } from 'redux-saga/effects';
// import axios from 'axios';

function* fetchTemp() {
  try {
    let temp = yield getTemp();
    console.log(`in weather SAGA`, temp);
    let americaTemp = temp * (9/5) - 459.67
    console.log(`this is america`, americaTemp)
    yield put({
      type: WEATHER_ACTIONS.SHOW_TEMP,
      payload: americaTemp,
    });
  } catch (error) {
    console.log('error in weather SAGA fetch', error)
  }
}

function* weatherSaga() {
  yield takeLatest(WEATHER_ACTIONS.FETCH_TEMP, fetchTemp);
}

export default weatherSaga;