var express  = require("express");
var router   = express.Router();
var passport = require("passport");
var User     = require('../models/SignUpSchema');

/*-------AUTHORIZATION-------*/

//Handle registration logic

// router.post('/', (req, res) => {
// 	console.log("You have connected to the register route from client");
// 	console.log(req.body);
// 	//Create a user object to save, using incoming JSON data
// 	var newUser = new User({
// 		username: req.body.username,
// 		email: req.body.email,
// 		password: req.body.password
// 	});
// 	//Saves the user to database
// 	newUser.save(function(err, newUser) {
// 		if (err) {
// 			console.log(err);
// 		} else {
// 			console.log("No error")
// 		}
// 	}) 
// })

router.post('/', (req, res) => {
	console.log("You have successfully connected client to register route");
	console.log(req.body);
	const newUser = new User({
		username: req.body.username,
		email: req.body.email
	})
	User.register(newUser, req.body.password, (err, user) => {
		if (err) {
			res.sendStatus(JSON.stringify(500));
			return console.log("There was an ERROR");
		} 
		passport.authenticate('local')(req, res, function() {
			req.session.save(function(err) {
				if(err) {
					console.log(err);
					res.sendStatus(500);
					return next(err);
				} else {
					res.sendStatus(JSON.stringify(200));
					return console.log("Success registering")
				}
			})
		})
	})
})

module.exports = router;