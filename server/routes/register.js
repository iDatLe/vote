var express = require('express');
var router  = express.Router();
var User    = require('../models/SignUpSchema');

/*-------AUTHORIZATION-------*/

//Handle registration logic
router.post('/', function(req, res) {
	console.log('goodbye');
	var username = req.body.text;
	var email    = req.body.email;
	var password = req.body.password;
	console.log(req.body.text)

});

module.exports = router;