var express   = require("express");
var router    = express.Router();
var passport  = require("passport");
var loginUser = require('../models/LoginSchema');

router.post("/", passport.authenticate("local",
	(req, res) => {
		console.log("Successsss")
	} 
))

module.exports = router;