var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var votingPollSchema = new Schema({
	title: String,
	options: [Schema.Types.Mixed],
}, {strict: false})

module.exports = mongoose.model('Vote', votingPollSchema)