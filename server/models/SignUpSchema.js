var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var signUpSchema = new Schema({
	username: String,
	email: String,
	password: {type: String, select: false}
});

signUpSchema.methods.validPassword = function(password) {
	if (this.password === password) {
		console.log("True");
		return true;
	} else {
		console.log("False");
		return false;
	}
}

signUpSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', signUpSchema);