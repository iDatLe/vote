var express    = require('express'),
	mongoose   = require('mongoose'),
	bodyParser = require('body-parser')

var usersRoutes = require('./routes/users')
var path = require('path')

/*---------MODELS-------*/
var SignUp     = require('./models/SignUpSchema');

var app = express();
var port = process.env.PORT || 4000;

mongoose.Promise = global.Promise;
mongoose.createConnection('mongodb://iDatLe:souperprivate1@ds049854.mlab.com:49854/votingapp', {useMongoClient: true});

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/users', usersRoutes);

app.use(express.static(path.join(__dirname, '../client/build')));

app.get('*', function (req, res) {
	console.log(path.join(__dirname, '../client/build', 'index.html'));
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});


/*-----------------------*/
app.listen(port, function() {
	console.log('Hi')
})