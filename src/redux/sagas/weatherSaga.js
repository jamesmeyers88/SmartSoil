// import { USER_ACTIONS } from '../actions/userActions';
import { WEATHER_ACTIONS } from '../actions/weatherActions';
import { getTemp, getIcon } from '../requests/weatherRequests';
import { put, takeLatest } from 'redux-saga/effects';
// import axios from 'axios';

function* fetchTemp() {
  try {
    let temp = yield getTemp();
    let americaTemp = temp * (9/5) - 459.67
    console.log(`this is americaTemp`, americaTemp)
    let icon = yield getIcon();
    console.log(`this is the icon`, icon)
    let weather = { americaTemp, icon }
    yield put({
      type: WEATHER_ACTIONS.SHOW_TEMP,
      payload: weather,
    });
  } catch (error) {
    console.log('error in weather SAGA fetch', error)
  }
}

function* weatherSaga() {
  yield takeLatest(WEATHER_ACTIONS.FETCH_TEMP, fetchTemp);
}

export default weatherSaga;