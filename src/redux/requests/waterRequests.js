import axios from 'axios';

export function getEvents() {
  return axios.get('/api/water')
    .then(response => response.data)
    .catch((error) => { 
        console.log(`There's been an error GETing water events`, error);
        throw error.response || error;
    });
}

export function postEvents(payload) {
  const thing = ({
    username: payload.username,
    date: payload.date,
    water_amount: payload.water_amount
  });
  return axios.post('/api/water', thing)
    .then(response => response.data)
    .catch((error) => { 
        console.log(`There's been an error GETing water events`, error);
        throw error.response || error;
    });
}

export function placeholder() {
  console.log('hi');
}