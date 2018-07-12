const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    let queryText = `SELECT * FROM water;`;
    pool.query(queryText)
      .then((result) => {
        console.log(`received water events from DB`);
        res.send(result.rows);
      })
      .catch((error) => {
        console.log(`Error handling GET on water.router`, error);
        res.sendStatus(500);
      })
    // res.sendStatus(200); // For testing only, can be removed
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  let queryText = `INSERT INTO water (username, date, water_amount)
  VALUES ($1, $2, $3);`
  pool.query(queryText, [req.body.username, req.body.date, req.body.water_amount])
  .then((result) => {
    console.log(`POSTed water events to DB`);
    res.sendStatus(201);
  })
  .catch((error) => {
    console.log(`Error handling POST on water.router`, error);
    res.sendStatus(500);
  })
});

module.exports = router;