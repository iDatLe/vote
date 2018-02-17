var express = require('express');
var router  = express.Router();
var Vote = require('../models/votingPollSchema');

//POSTS NEW POLLS TO DATABASE
router.post('/', function(req, res) {
	var title = req.body.title
	var options = req.body.options

	var newVote = {title: title, options: options}
	Vote.create(newVote, function(err, newlyCreated){
		if(err) {
			console.log(err);
		} else {
			console.log(req.body)
			console.log("You successfully posted")
		}
	})
})


//GET ALL POLLS FOR POLL LANDING PAGE
router.get('/', function(req, res) {
	Vote.find({}, function(err, allVotes) {
		if(err){
			console.log(err);
		} else {
			console.log(allVotes[0]._id);
			res.json(allVotes);
		}
	})
})

	// Vote.findById(req.params.id).exec(function(err, allVotes) {
	// 	if(err) {
	// 		console.log(err);
	// 	} else {
	// 		console.log("You are in the get request")
	// 		// console.log(allVotes);
	// 		res.sendStatus(200);
	// 	}
	// })

module.exports = router;