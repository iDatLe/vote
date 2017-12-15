var express    = require('express');
var mongoose   = require('mongoose');
var bodyParser = require('body-parser');
var SignUp     = require('./models/SignUpSchema');

var app = express();
var router = express.Router();

var port = process.env.API_PORT || 3001;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://iDatLe:souperprivate1@ds049854.mlab.com:49854/votingapp');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.get(‘/’, function(req, res) {
	res.json({ message: ‘Hello’});
});

app.listen(port, function() {
 console.log('We out here');
});