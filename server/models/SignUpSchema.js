var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var signUpSchema = new Schema({
	text: String,
	email: String,
	password: String
})

module.exports = mongoose.model('SignUp', signUpSchema);