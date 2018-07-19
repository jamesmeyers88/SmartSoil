import axios from 'axios';

// GET for temp from weatherAPI
export function getTemp() {
  return axios.get('https://api.openweathermap.org/data/2.5/forecast?zip=55408&APPID=505ed5c7e64621ebb7c89a6c1271b352')
    .then(response => response.data.list[0].main.temp)
    .catch((error) => { 
        console.log(`There's been an error GETing devices`, error);
        throw error.response || error;
    });
}// end temp GET

// GET resuest for icon from weatherAPI
export function getIcon() {
    return axios.get('https://api.openweathermap.org/data/2.5/weather?zip=55408&APPID=505ed5c7e64621ebb7c89a6c1271b352')
      .then(response => response.data.weather[0].icon)
      .catch((error) => { 
          console.log(`There's been an error GETing devices`, error);
          throw error.response || error;
      });
  } //end icon GET
