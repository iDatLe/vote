var express = require('express');
var router  = express.Router();
var Vote = require('../models/votingPollSchema');

//POSTS NEW POLLS TO DATABASE
router.post('/', function(req, res) {
	var title = req.body.title
	var options = req.body.options
	var poll = req.body.poll

	var newVote = {title: title, options: options, poll: poll}
	Vote.create(newVote, function(err, newlyCreated){
		if(err) {
			console.log(err);
		} else {
			console.log(req.body)
			console.log("You successfully posted")
			res.sendStatus(200)
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

		const votingDataArray = []
		for (i = 0; i<allVotes.options.length; i++) {
			votingDataArray.push(allVotes.options[i]);
		}
		if(err) {
			console.log(err);
		} else {
			res.json(votingDataArray)
		}
	})
});

//PUT REQUEST TO EDIT POLL NUMBERS
router.put('/:id', function(req, res) {
	Vote.findByIdAndUpdate(req.params.id, { $set: {options: req.body}}, {new: true}, function(err, allVotes) {
		console.log("req.body", req.body)
		if(err){
			console.log("Error buddy")
		} else {
			res.sendStatus(200)
		}
	})
})


module.exports = router;