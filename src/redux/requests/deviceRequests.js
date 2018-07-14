import axios from 'axios';

export function getDevices() {
  return axios.get('/api/device')
    .then(response => response.data)
    .catch((error) => { 
        console.log(`There's been an error GETing devices`, error);
        throw error.response || error;
    });
}

export function postDevices(payload) {
  const device = ({
    device_id: payload.device_id,
    auth_token: payload.auth_token,
    username: payload.username,
    notes: payload.notes,
  });
  return axios.post('/api/device', device)
    .then(response => response.data)
    .catch((error) => { 
        console.log(`There's been an error GETing devices`, error);
        throw error.response || error;
    });
}

export function placeholder() {
  console.log('hi');
}