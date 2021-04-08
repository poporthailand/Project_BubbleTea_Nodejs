var express = require('express');
var router = express.Router();
var path = require('path');


/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.sendFile(path.join(__dirname,'html','index.html'));
});
router.get('/test', function(req, res, next) {
  res.render('test', { title: 'Express' });
});

module.exports = router;
