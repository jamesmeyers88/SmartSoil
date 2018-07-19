const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//GET for soilMoisture readings stored in DB
router.get('/', (req, res) => {
    let queryText = `SELECT date, moisture FROM soil ORDER BY event_id DESC;`;
    pool.query(queryText)
      .then((result) => {
        console.log(`received soil events from DB`, result.rows);
        res.send(result.rows);
      })
      .catch((error) => {
        console.log(`Error handling GET on soil.router`, error);
        res.sendStatus(500);
      })
});// end soilMoisture GET

/**
 * POST route template
 */
// router.post('/', (req, res) => {
//   let queryText = `INSERT INTO water (username, date, water_amount)
//   VALUES ($1, $2, $3);`
//   pool.query(queryText, [req.body.username, req.body.date, req.body.water_amount])
//   .then((result) => {
//     console.log(`POSTed water events to DB`);
//     res.sendStatus(201);
//   })
//   .catch((error) => {
//     console.log(`Error handling POST on water.router`, error);
//     res.sendStatus(500);
//   })
// });

// router.delete('/:id', (req, res) => {
//     console.log(`in DELETE on water.router`, req.params.id)
//     const id = Number(req.params.id);
//     let queryText = `DELETE FROM water WHERE event_id = $1`;
//     pool.query(queryText, [req.params.id])
//     .then((result) => {
//       res.sendStatus(200);
//     }).catch((error) => {
//       console.log( `error DELETing water from DB`, error)
//         res.sendStatus(500);
//     });
// });

// router.put('/:id', (req, res) => {
//   console.log(`in UPDATE on water.router`, req.params.id);
//   console.log(`in UPDATE on water.router - BODY`, req.body)
//   let id = req.params.id;
//   let date = req.body.userEvent.date;
//   let water_amount = req.body.userEvent.water_amount;
//   let queryText = `UPDATE water SET date = $1, water_amount = $2
//   WHERE event_id = $3;`;
//   pool.query(queryText, [date, water_amount, id])
//   .then((result) => {
//     console.log( `error UPDATing water from DB`)
//       res.sendStatus(200);
//   }).catch((error) => {
//       console.log(error);
//       res.sendStatus(500);
//   });
// });

module.exports = router;

//////////////////////////////////

// To be added later once the project is closer to completion. I have 
// a separate app running this cron to log data without being
// constantly restarted and re-pinged and then relogged.

// const express = require('express');
// const pool = require('../modules/pool');
// const router = express.Router();


// /** CHRON setup to GET sensor data from ParticleAPI and POST to DB **/
// const cron = require('node-cron');
// const axios = require('axios');

// cron.schedule('*/30 * * * *', function(){
//   console.log('running a task every hour');
//   pingPhoton();
// });

// // ping right away
// pingPhoton();

// let data = '';

// function pingPhoton() {
//     axios.get('https://api.particle.io/v1/devices/30002c000347343138333038/result?access_token=c8bb42507daf2b0ca0e9bcf644ebeb868920b249')
//       .then((response) => {
//         console.log(`deviceID:`, response.data.coreInfo.deviceID);
//         console.log(`date:`, response.data.coreInfo.last_heard);
//         // data = response.data;
//         const moisture = response.data.result;
//         const device_id = response.data.coreInfo.deviceID;
//         let date = response.data.coreInfo.last_heard;
//         let moistVal = moisture.substr(15, 4);
//         console.log(`Sensor reading:`, moistVal)
//         queryText = `INSERT INTO soil (device_id, date, moisture)
//         Values ($1, $2, $3);`;
//         pool.query(queryText, [device_id, date, moistVal])
//       })
//       .catch((error) => {
//           console.log('there has been an error with your chronGET')
//       })
// }

// module.exports = router;