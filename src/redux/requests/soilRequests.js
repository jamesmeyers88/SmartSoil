import axios from 'axios';

export function getSoil() {
  return axios.get('/api/soil')
    .then(response => response.data)
    .catch((error) => { 
        console.log(`There's been an error GETing soil events`, error);
        throw error.response || error;
    });
}