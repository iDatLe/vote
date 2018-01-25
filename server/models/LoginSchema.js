var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var loginSchema = new Schema({
	username: String,
	password: {type: String, select: false}
})

loginSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('loginUser', loginSchema);