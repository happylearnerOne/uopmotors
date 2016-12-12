var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //這種寫法表示default generate jade的index
  //res.render('index', { title: 'Express of UOP' });
  //這種寫法表示default generate /public/index.html
  res.sendfile('./public/index.html', { title: 'Express of UOP' });
});


module.exports = router;
