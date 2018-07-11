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
        console.log(`received water events from DB`, result.rows);
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

});

module.exports = router;