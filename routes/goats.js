var express = require('express');
var router = express.Router();
var query = require('../db/query');


router.get('/', function(req, res, next) {
  query.getAll()
  .then ((goats) => {
    res.json(goats);
  });
});

router.get('/:id', function(req, res, next) {
  query.getOne(req.params.id)
  .then ((goat) => {
    res.json(goat)
  });
});

module.exports = router;
