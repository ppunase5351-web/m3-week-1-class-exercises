var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home', function(req, res) {
  res.send("Hello, World!");
});

router.post('/home', function(req, res) {
  res.send("called POST method at 'hello' !\n");
});

module.exports = router; // to use use in example3b.js