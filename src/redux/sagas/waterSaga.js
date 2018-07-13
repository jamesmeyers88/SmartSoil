import { USER_ACTIONS } from '../actions/userActions';
import { WATER_ACTIONS } from '../actions/waterActions';
import { getEvents } from '../requests/waterRequests';
import { put, takeLatest } from 'redux-saga/effects';

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

  }
}

function* waterSaga() {
  yield takeLatest(WATER_ACTIONS.FETCH_EVENTS, fetchEvents);
}

export default waterSaga;