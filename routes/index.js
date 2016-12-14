var express = require('express');
var router = express.Router();

var multer  = require('multer')
var upload = multer({
  dest: 'public/uploads/'
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',
    file:req.files});
});
router.post('/',upload.any(), function(req, res, next) {
  //res.send(req.files[1].filename);
  res.render('test', {
    title: 'Express',
    file:req.files[1]
  })
});

module.exports = router;
