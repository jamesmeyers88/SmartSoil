const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET from water table
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
}); // end GET 

// POST for water table
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
}); // end POST

// DELETE for water table
router.delete('/:id', (req, res) => {
    console.log(`in DELETE on water.router`, req.params.id)
    const id = Number(req.params.id);
    let queryText = `DELETE FROM water WHERE event_id = $1`;
    pool.query(queryText, [req.params.id])
    .then((result) => {
      res.sendStatus(200);
    }).catch((error) => {
      console.log( `error DELETing water from DB`, error)
        res.sendStatus(500);
    });
}); // end DELETE

// PUT for water table
router.put('/:id', (req, res) => {
  console.log(`in UPDATE on water.router`, req.params.id);
  console.log(`in UPDATE on water.router - BODY`, req.body)
  let id = req.params.id;
  let date = req.body.userEvent.date;
  let water_amount = req.body.userEvent.water_amount;
  let queryText = `UPDATE water SET water_amount = $1
  WHERE event_id = $2;`;
  pool.query(queryText, [ water_amount, id])
  .then((result) => {
    console.log( `error UPDATing water from DB`)
      res.sendStatus(200);
  }).catch((error) => {
      console.log(error);
      res.sendStatus(500);
  });
}); // end PUT

module.exports = router;