var express    = require('express'),
	mongoose   = require('mongoose'),
	bodyParser = require('body-parser')

/*---------MODELS-------*/
var SignUp     = require('./models/SignUpSchema');

var app = express();

mongoose.Promise = global.Promise;
mongoose.createConnection('mongodb://iDatLe:souperprivate1@ds049854.mlab.com:49854/votingapp', {useMongoClient: true});

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function(req, res) {
	res.send("Hello yall");
});

app.get('/users', function(req, res) {
	res.send("Users page");
});


/*-----------------------*/
app.listen(4000, function() {
	console.log('Hi')
})