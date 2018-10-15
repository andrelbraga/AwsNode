var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.download("C://Users//Ersystems//Documents//Andre Braga//cssStyle.txt");
  // res.json({
  //   name:"Andre Braga",
  //   password:"xptoz"
  // });
});

module.exports = router;
