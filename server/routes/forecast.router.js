// const express = require('express');
// // const pool = require('../modules/pool');
// const router = express.Router();


// /** CHRON setup to GET rain data from OpenWeatherMapAPI and POST to DB **/
// const cron = require('node-cron');
// const axios = require('axios');

// cron.schedule('*/50 * * * *', function(){
//   console.log('running a task every day?');
//   pingWeather();
// });

// // ping right away
// pingWeather();

// function pingWeather() {
//   //eventually allow user to add/update APPID/APIKey
//     axios.get('https://api.openweathermap.org/data/2.5/forecast?zip=55408&APPID=505ed5c7e64621ebb7c89a6c1271b352')
//       .then((response) => {
//         console.log(`You successfully pinged the weatherAPI`, response.data.list)
//         let weather = response.data.list;
//         return weather;
//       })
//       .catch((error) => {
//           console.log('there has been an error with your RAIN chronGET')
//       })
// }

// module.exports = router;