const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


/** CHRON setup to GET rain data from OpenWeatherMapAPI and POST to DB **/
const cron = require('node-cron');
const axios = require('axios');

cron.schedule('*/59 * * * *', function(){
  console.log('running a task every day?');
  pingWeather();
});

// ping right away
pingWeather();

function pingWeather() {
  //eventually allow user to add/update APPID/APIKey
    axios.get('https://api.openweathermap.org/data/2.5/forecast?zip=55408&APPID=505ed5c7e64621ebb7c89a6c1271b352')
      .then((response) => {
        console.log(`You successfully pinged the weatherAPI`)
        console.log(response.data);
        // let precip_type = response.data.list;
        // // date will need to be supplimented from elsewhere
        // let date = new Date();
        // let icon = response.data.weather[0].icon
        // queryText = `INSERT INTO rain (precip_type, date, icon)
        // Values ($1, $2, $3);`;
        // pool.query(queryText, [precip_type, date, icon])
      })
      .catch((error) => {
          console.log('there has been an error with your RAIN chronGET')
      })
}

module.exports = router;