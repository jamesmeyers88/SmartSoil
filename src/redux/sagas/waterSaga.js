// import { USER_ACTIONS } from '../actions/userActions';
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

function* deleteEvent(action){
  try{
    console.log(`in DELETE event on SAGA`, action.payload)
    yield call(axios.delete, `/api/water/${action.payload}`)
    let event = yield getEvents();
    yield put({ 
      type: WATER_ACTIONS.FETCH_EVENTS,
      payload: event,
    })
  } catch (error){
    console.log('error in water SAGA DELETE', error)
  } 
}

function* updateEvent(action){
  try{
    console.log(`in UPDATE event on SAGA`, action.payload)
    yield call(axios.put, `/api/water/${action.payload.event_id}`, action.payload)
  } catch (error){
    console.log('error in water SAGA DELETE', error)
  } 
}

function* waterSaga() {
  yield takeLatest(WATER_ACTIONS.FETCH_EVENTS, fetchEvents);
  yield takeLatest(WATER_ACTIONS.SEND_EVENT, sendEvent);
  yield takeLatest(WATER_ACTIONS.DELETE_EVENT, deleteEvent);
  yield takeLatest(WATER_ACTIONS.UPDATE_EVENT, updateEvent)
}

export default waterSaga;