var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

exports.index = function(req, res){
    res.render('index', { title: 'Tahm' });
};

module.exports = router;

