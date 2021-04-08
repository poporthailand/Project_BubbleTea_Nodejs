var express = require('express');
var router = express.Router();
var path = require('path');

/* GET users listing. */
router.get('/', function (req, res, next) {
    //res.render("history_Sale")
    res.sendFile(path.join(__dirname,'html','history_Sale.html'))
});




module.exports = router;