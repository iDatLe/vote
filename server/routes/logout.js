var express   = require("express");
var router    = express.Router();
var passport  = require("passport");

router.post('/logout', function(req, res) {
	req.logOut();
	req.session.destroy(function(err) {
		if(err) {
			console.log(err, "There was an error");
		} else {
			res.sendStatus(200)
		}
	})
})

module.exports = router;