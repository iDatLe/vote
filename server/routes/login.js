var express   = require("express");
var router    = express.Router();
var passport  = require("passport");
var loginUser = require('../models/LoginSchema');

//============ req.session.save method
router.post('/', passport.authenticate('local'), (req, res, next) => {
    req.session.save((err, user) => {
        if (err) {
        	console.log(err)
            return next(err);
        }
        console.log("You have logged in.");
        res.json({redirectURI: "/dashboard"}) //required for .then in client to redirect
    });
});

//============= passport.authenticate method
// router.post('/',
// 	passport.authenticate('local', (err, user, info) => {
// 		if(err) {
// 			console.log("err 1")
// 			return next(err);
// 		} else if (!user) {
// 			console.log("Wrong user");
// 		} 
// 			console.log("You in")
// 	})
	// , (req, res) => {
	// 	req.session.save((err) => {
	// 		if(err) {
	// 			return next(err);
	// 		} else {
	// 			console.log("You logged in");
	// 		}
	// 	})
	// }
// )


module.exports = router;