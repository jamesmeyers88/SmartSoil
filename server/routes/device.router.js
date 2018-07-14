const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    let queryText = `SELECT * FROM device ORDER BY id DESC;`;
    pool.query(queryText)
      .then((result) => {
        console.log(`received device info from DB`, result.rows);
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

router.delete('/:id', (req, res) => {
  console.log(`in DELETE on device.router`, req.params.id)
  const id = Number(req.params.id);
  let queryText = `DELETE FROM device WHERE device_id = $1`;
  pool.query(queryText, [req.params.id])
  .then((result) => {
    res.sendStatus(200);
  }).catch((error) => {
    console.log( `error DELETing device from DB`, error)
      res.sendStatus(500);
  });
});

router.put('/:id', (req, res) => {
  console.log(`in UPDATE on device.router`, req.params.id);
  console.log(`in UPDATE on device.router - BODY`, req.body)
  let id = req.params.id;
  let auth_token = req.body.device.auth_token;
  let notes = req.body.device.notes;
  let deviceID = req.body.device.device_id;
  let queryText = `UPDATE device SET device_id = $1, auth_token = $2, notes = $3
  WHERE device_id = $4;`;
  pool.query(queryText, [deviceID, auth_token, notes, id])
  .then((result) => {
    console.log( `error UPDATing water from DB`)
      res.sendStatus(200);
  }).catch((error) => {
      console.log(error);
      res.sendStatus(500);
  });
});

module.exports = router;