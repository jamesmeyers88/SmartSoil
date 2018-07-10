const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


/** CHRON setup to GET sensor data from ParticleAPI and POST to DB **/
const cron = require('node-cron');
const axios = require('axios');

cron.schedule('*/10 * * * *', function(){
  console.log('running a task every 10 minutes');
  pingPhoton();
});

// ping right away
pingPhoton();

let data = '';

function pingPhoton() {
    axios.get('https://api.particle.io/v1/devices/30002c000347343138333038/result?access_token=c8bb42507daf2b0ca0e9bcf644ebeb868920b249')
      .then((response) => {
        console.log(response.data.result);
        console.log(`deviceID:`, response.data.coreInfo.deviceID);
        console.log(`date:`, response.data.coreInfo.last_heard);
        // data = response.data;
        const moisture = response.data.result;
        const device_id = response.data.coreInfo.deviceID;
        let date = response.data.coreInfo.last_heard;
        let moistVal = moisture.substr(15, 4);
        console.log(moistVal)
        queryText = `INSERT INTO soil (device_id, date, moisture)
        Values ($1, $2, $3);`;
        pool.query(queryText, [device_id, date, moistVal])
      })
      .catch((error) => {
          console.log('there has been an error with your chronGET')
      })
}

module.exports = router;