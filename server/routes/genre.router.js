const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  // Add query to get all genres
  const queryText = `SELECT * FROM "genres";`
  pool.query(queryText).then(result => {
    res.send(result.rows)
  }).catch(err => {
    console.log('Error getting all genres');
    res.sendStatus(500)
  })
});

module.exports = router;