var express = require('express');
var router = express.Router();

const knex = require('../db/knex');

/* http://localhost:3000/fakedata */
router.get('/', function(req, res, next) {
  knex('fakedata')
    .select()
    .then(fakedata => {
      res.render('all', {fakedata: fakedata});
    });
});

module.exports = router;