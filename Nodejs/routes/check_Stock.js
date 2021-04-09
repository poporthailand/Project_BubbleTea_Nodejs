var express = require('express');
var router = express.Router();
var path = require('path');

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.render("check_Stock.html")
    //res.sendFile(path.join(__dirname,'html','check_Stock.html'));
});




module.exports = router;