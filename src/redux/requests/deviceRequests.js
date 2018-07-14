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
//   const event = ({
//     username: payload.username,
//     date: payload.date,
//     water_amount: payload.water_amount
//   });
  return axios.post('/api/device')
    .then(response => response.data)
    .catch((error) => { 
        console.log(`There's been an error GETing devices`, error);
        throw error.response || error;
    });
}

export function placeholder() {
  console.log('hi');
}