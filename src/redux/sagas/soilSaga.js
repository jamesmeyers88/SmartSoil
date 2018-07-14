// import { USER_ACTIONS } from '../actions/userActions';
import { SOIL_ACTIONS } from '../actions/soilActions';
import { getSoil } from '../requests/soilRequests';
import { put, call, takeLatest } from 'redux-saga/effects';
// import axios from 'axios';

function* fetchSoil() {
  try {
    // yield put({ type: WATER_ACTIONS.GET_EVENTS });
    let soil = yield getSoil();
    console.log(`in soil SAGA`, soil);
    yield put({
      type: SOIL_ACTIONS.SHOW_SOIL,
      payload: soil,
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