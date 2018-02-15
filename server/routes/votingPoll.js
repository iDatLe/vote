var express = require('express');
var router  = express.Router();
var Vote = require('../models/votingPollSchema');

router.post('/', function(req, res) {
	var title = req.body.title
	var options = req.body.options

	var newVote = {title: title, options: options}
	Vote.create(newVote, function(err, newlyCreated){
		if(err) {
			console.log(err);
		} else {
			console.log(req.body.title)
			console.log(req.body.options)
			console.log("You successfully posted")
		}
	})
})

module.exports = router;