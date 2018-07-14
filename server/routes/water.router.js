const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    let queryText = `SELECT * FROM water ORDER BY event_id DESC;`;
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

router.delete('/:id', (req, res) => {
    console.log(`in DELETE on water.router`, req.params.id)
    const id = Number(req.params.id);
    let queryText = `DELETE FROM water WHERE event_id = $1`;
    pool.query(queryText, [req.params.id])
    .then((result) => {
      console.log( `error DELETing water from DB`)
        res.sendStatus(200);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });
});

router.put('/:id', (req, res) => {
  console.log(`in UPDATE on water.router`, req.params.id);
  console.log(`in UPDATE on water.router - BODY`, req.body)
  let id = Number(req.params.id);
  let date = req.body.date;
  let water_amount = req.body.water_amount;
  let queryText = `UPDATE water SET date = '$1', water_amount = '$2'
  WHERE event_id = $3;`;
  pool.query(queryText, [date, water_amount, id])
  .then((result) => {
    console.log( `error UPDATing water from DB`)
      res.sendStatus(200);
  }).catch((error) => {
      console.log(error);
      res.sendStatus(500);
  });
});

module.exports = router;