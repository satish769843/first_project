var express = require('express');
var router = express.Router();
var db = require('../db/database')
const ejsLint = require('ejs-lint');
/* GET home page. */
router.get('/', function(req, res, next) {
  db.find({}).exec((err, data) => {
    if (err) throw err;
    res.render('index', { title: 'Free English Academy',post:data });
  })
});
router.get('/post/:id',(req, res) =>{
  db.findById(req.params.id).exec((err,data) =>{
    if(err) throw err;
    res.render('post-view',{ post:data})
  })
 
})
module.exports = router;
