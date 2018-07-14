// import { USER_ACTIONS } from '../actions/userActions';
import { DEVICE_ACTIONS } from '../actions/deviceActions';
import { getDevices } from '../requests/deviceRequests';
import { put, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchDevices() {
  try {
    // yield put({ type: WATER_ACTIONS.GET_EVENTS });
    let event = yield getDevices();
    console.log(`in device SAGA`, event);
    yield put({
      type: DEVICE_ACTIONS.SHOW_DEVICES,
      payload: event,
    });
  } catch (error) {
    console.log('error in device SAGA fetch', error)
  }
}

// function* sendDevice(action) {
//   try{
//     console.log(`in SEND device on SAGA`, action.payload)
//     let event = yield getDevices();
//     yield call(axios.post, '/api/device', action.payload);
//     yield put({ 
//       type: DEVICE_ACTIONS.FETCH_DEVICES,
//       payload: event,
//     })
//   } catch (error){
//     console.log('error in device SAGA send', error)
//   }
// }

// function* deleteDevice(action){
//   try{
//     console.log(`in DELETE device on SAGA`, action.payload)
//     yield call(axios.delete, `/api/device/${action.payload}`)
//     let event = yield getDevices();
//     yield put({ 
//       type: DEVICE_ACTIONS.FETCH_DEVICES,
//       payload: event,
//     })
//   } catch (error){
//     console.log('error in device SAGA DELETE', error)
//   } 
// }

// function* updateDevice(action){
//   try{
//     console.log(`in UPDATE device on SAGA`, action.payload)
//     yield call(axios.put, `/api/device/${action.payload.device_id}`, action.payload)
//   } catch (error){
//     console.log('error in device SAGA DELETE', error)
//   } 
// }

function* deviceSaga() {
  yield takeLatest(DEVICE_ACTIONS.FETCH_DEVICES, fetchDevices);
//   yield takeLatest(DEVICE_ACTIONS.SEND_DEVICE, sendDevice);
//   yield takeLatest(DEVICE_ACTIONS.DELETE_DEVICE, deleteDevice);
//   yield takeLatest(DEVICE_ACTIONS.UPDATE_DEVICE, updateDevice);
}

export default deviceSaga;