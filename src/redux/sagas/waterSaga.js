import { USER_ACTIONS } from '../actions/userActions';
import { WATER_ACTIONS } from '../actions/waterActions';
import { getEvents } from '../requests/waterRequests';
import { put, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchEvents() {
  try {
    // yield put({ type: WATER_ACTIONS.GET_EVENTS });
    let event = yield getEvents();
    console.log(`in water SAGA`, event);
    yield put({
      type: WATER_ACTIONS.SHOW_EVENTS,
      payload: event,
    });
  } catch (error) {
    console.log('error in water SAGA fetch', error)
  }
}

function* sendEvent(action) {
  try{
    console.log(`in SEND event on SAGA`, action.payload)
    let event = yield getEvents();
    yield call(axios.post, '/api/water', action.payload);
    yield put({ 
      type: WATER_ACTIONS.FETCH_EVENTS,
      payload: event,
    })
  } catch (error){
    console.log('error in water SAGA send', error)
  }
}

function* waterSaga() {
  yield takeLatest(WATER_ACTIONS.FETCH_EVENTS, fetchEvents);
  yield takeLatest(WATER_ACTIONS.SEND_EVENT, sendEvent);
}

export default waterSaga;