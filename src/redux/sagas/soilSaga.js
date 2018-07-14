// import { USER_ACTIONS } from '../actions/userActions';
import { SOIL_ACTIONS } from '../actions/soilActions';
import { getSoil } from '../requests/soilRequests';
import { put, takeLatest } from 'redux-saga/effects';
// import axios from 'axios';

function* fetchSoil() {
  try {
    // yield put({ type: WATER_ACTIONS.GET_EVENTS });
    let soil = yield getSoil();
    let moisture = soil[0].moisture
    console.log(`in soil SAGA`, soil[0].moisture);
    yield put({
      type: SOIL_ACTIONS.SHOW_MOISTURE,
      payload: moisture,
    });
  } catch (error) {
    console.log('error in soil SAGA fetch', error)
  }
}

function* waterSaga() {
    yield takeLatest(SOIL_ACTIONS.FETCH_SOIL, fetchSoil);
    // yield takeLatest(WATER_ACTIONS.SEND_EVENT, sendEvent);
    // yield takeLatest(WATER_ACTIONS.DELETE_EVENT, deleteEvent);
    // yield takeLatest(WATER_ACTIONS.UPDATE_EVENT, updateEvent)
  }
  
  export default waterSaga;