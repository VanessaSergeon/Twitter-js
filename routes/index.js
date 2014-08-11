var store = require('../store');
var express = require('express');
var router = express.Router();

router.post('/submit', function(req, res) {
  var name = req.body.name;
  var text = req.body.text;

  store.push(name, text);
  // io.sockets.emit("new_tweet", { tweets: list });
  res.redirect('/');
});

/* GET home page. */
// get is the type of request that this controller handles
router.get('/', function(req, res) {
  var list = store.list();
  res.render('index', { title: 'Twitter.js', tweets: list, show_form: true });
  // keys in this hash can have corresponding cariables in views that will render the data
  // io.sockets.emit("new_tweet", { tweets: list });
});

module.exports = router;
