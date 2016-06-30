var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express Homepage', path: req.path });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Page', path: req.path });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' , path: req.path});
});

module.exports = router;
