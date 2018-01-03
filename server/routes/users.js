var express = require('express');
var router  = express.Router();
/*-----MODLES-----*/
var SignUp  = require('../models/SignUpSchema');


// router.get('/register', function(req, res) {
// 	if(err){
// 		console.log(err);
// 	}
// });

//CREATE - Adds new form to the DB
router.post('/register', function(req, res) {
	console.log(req.body);
	// var name     = req.param.text;
	// var email    = req.param.email;
	// var password = req.param.password;
	// var newForm = {text: name, email: email, password: password}
	// SignUp.create(newForm, function(err, newlyCreated) {
	// 	if(err) {
	// 		console.log(err);
	// 	} else {
	// 		res.redicrect("/register");
	// 	}
	// })

});

module.exports = router;