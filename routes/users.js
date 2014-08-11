var express = require('express');
var router = express.Router();
var store = require("../store");

router.get('/:name', function(req, res) {
  var name = req.params.name;
  var list = store.find({name: name});
  res.render('index', { title: 'Twitter.js', tweets: list, show_form: true });
  // io.sockets.emit("new_tweet", { tweets: list });
});

module.exports = router;
