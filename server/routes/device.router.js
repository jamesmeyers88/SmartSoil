const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    let queryText = `SELECT * FROM device;`;
    pool.query(queryText)
      .then((result) => {
        console.log(`received device info from DB`);
        res.send(result.rows);
      })
      .catch((error) => {
        console.log(`Error handling GET on device.router`, error);
        res.sendStatus(500);
      })
    // res.sendStatus(200); // For testing only, can be removed
});// end device.router GET

/**
 * POST route template
 */
router.post('/', (req, res) => {
  let queryText = `INSERT INTO device (device_id, auth_token, notes, username)
  VALUES ($1, $2, $3, $4);`
  pool.query(queryText, [req.body.device_id, req.body.auth_token, req.body.notes, req.body.username])
  .then((result) => {
    console.log(`POSTed device to DB`);
    res.sendStatus(201);
  })
  .catch((error) => {
    console.log(`Error handling POST on device.router`, error);
    res.sendStatus(500);
  })
});// end device.router POST

module.exports = router;