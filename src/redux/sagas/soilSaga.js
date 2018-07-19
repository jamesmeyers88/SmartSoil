// import { USER_ACTIONS } from '../actions/userActions';
import { SOIL_ACTIONS } from '../actions/soilActions';
import { getSoil } from '../requests/soilRequests';
import { put, takeLatest } from 'redux-saga/effects';
// import axios from 'axios';

function* fetchSoil() {
  try {
    // yield put({ type: WATER_ACTIONS.GET_EVENTS });
    let soilData = yield getSoil();
    // let moisture = soilData[0].moisture
    // console.log(`in soil SAGA`, soilData[0].moisture);

    console.log('in soil saga for all data', soilData)
    yield put({
      type: SOIL_ACTIONS.SOIL_DATA,
      payload: soilData,
    })
  } catch (error) {
    console.log('error in soil SAGA fetch', error)
  }
}

function* soilSaga() {
    yield takeLatest(SOIL_ACTIONS.FETCH_SOIL, fetchSoil);
    // yield takeLatest(WATER_ACTIONS.SEND_EVENT, sendEvent);
    // yield takeLatest(WATER_ACTIONS.DELETE_EVENT, deleteEvent);
    // yield takeLatest(WATER_ACTIONS.UPDATE_EVENT, updateEvent)
  }
  
  export default soilSaga;