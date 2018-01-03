var express = require('express');
var router  = express.Router();
var Users   = require('../models/SignUpSchema');

/*-------AUTHORIZATION-------*/

//Handle registration logic
router.post('/', function(req, res) {
	console.log('goodbye')
	// var newUser = new Users({username: req.body.username, email: req.body.email, password: req.body.password});
	// Users.save()
	// .then(item => {
	// 	res.send("Registered successfully");
	// 	console.log("Successfully registered");
	// })
	// .catch(err => {
	// 	res.status(400).send("Registration failed");
	// 	console.log("Could not connect");
	// })
})

module.exports = router;