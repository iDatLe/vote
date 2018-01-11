var express    = require('express'),
	mongoose   = require('mongoose'),
	bodyParser = require('body-parser'),
	passport   = require('passport')

/*--------ROUTES--------*/
var registerRoutes = require('./routes/register')
var usersRoutes    = require('./routes/users')
var path           = require('path')

/*---------MODELS-------*/
var SignUp = require('./models/SignUpSchema');

var app = express();

/*---------MONGOOSE---------*/
mongoose.Promise = global.Promise;
mongoose.createConnection('mongodb://iDatLe:souperprivate1@ds049854.mlab.com:49854/votingapp', {useMongoClient: true});

/*---------BODY PARSER---------*/
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/register', registerRoutes);

/*---------CONNECTS SERVER AND CLIENT---------*/
app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/', function (req, res) {
	console.log(path.join(__dirname, '../client/build', 'index.html'));
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});


/*-----------------------*/
app.listen(4000, function() {
	console.log('You have connected to the server')
})