const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


/** CHRON setup to GET sensor data from ParticleAPI and POST to DB **/
const cron = require('node-cron');
const axios = require('axios');

cron.schedule('* * * * *', function(){
  console.log('running a task every minute');
  pingPhoton();
});

// ping right away
pingPhoton();

function pingPhoton() {
    axios.get('https://api.particle.io/v1/devices/30002c000347343138333038/result?access_token=c8bb42507daf2b0ca0e9bcf644ebeb868920b249')
      .then((response) => {
          console.log(response.data.result);
          console.log(`deviceID:`, response.data.coreInfo.deviceID);
          const deviceID = response.data.coreInfo.deviceID;
          console.log(`date:`, response.data.coreInfo.last_heard);
          const date = response.data.coreInfo.last_heard;
          router.post('/', (req, res) => {
            queryText = `INSERT INTO soil (device_id, date, moisture)
            Values ($1, $2, $3);`;
        });
      })
}
/**
 * GET route template
 */
router.get('/', (req, res) => {
    
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;