var express = require('express');
var router = express.Router();
var path = require('path');

/* GET users listing. */
router.get('/', function (req, res, next) {
    //res.render("make_Order")
    res.sendFile(path.join(__dirname,'html','make_Order.html'));
});




module.exports = router;