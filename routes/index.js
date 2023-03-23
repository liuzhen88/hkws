var express = require('express');
var router = express.Router();
var moment = require("moment");

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(moment().format("YYYY-MM-DD HH:mm:ss"))
  res.render('index', { title: 'Express' });
});

router.post("/", (req, res, next) => {
  console.log("==============request===================", moment().format("YYYY-MM-DD HH:mm:ss"))
  console.log(req.body);
  if(req.body.params) {
    console.log(req.body.params.events);
  }
  res.send("ok");
});

module.exports = router;
