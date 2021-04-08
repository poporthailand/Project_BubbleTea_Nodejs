var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.sendFile( 'D:/IT2RC/term2/Final/JAVASCRIPT PROGRAMMING/Project_BubbleTea_Nodejs/Nodejs/views/index.html');
});

module.exports = router;
