var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var votingPollSchema = new Schema({
	title: String,
	options: [String]
}, {strict: false} )

module.exports = mongoose.model('Vote', votingPollSchema)