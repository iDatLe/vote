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
});


//GET ALL POLLS FOR POLL LANDING PAGE

router.get('/', function(req, res) {	 
	Vote.find({}, function(err, allVotes) {
		
		const votingDataArray = []
		for (i = 0; i<allVotes.length; i++) {
			const votingDataObject = {}
			votingDataObject.id = allVotes[i]._id;
			votingDataObject.title = allVotes[i].title;
			votingDataArray.push(votingDataObject);
		}

		if(err){
			console.log(err);
		} else {
			res.json(votingDataArray);
		}
	})
});

//GET POLL FOR SPECIFIC PAGE
router.get('/:id', function(req, res) {
	Vote.findById(req.params.id).exec(function(err, allVotes) {
		console.log(allVotes.options)
		if(err) {
			console.log(err);
			console.log("There was an error retrieving that poll")
		} else {
			res.json(allVotes.options)
			console.log("We found that poll")
		}
	})
});


module.exports = router;