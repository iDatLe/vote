var express        = require('express'),
	mongoose       = require('mongoose'),
	bodyParser     = require('body-parser'),
	passport       = require('passport'),
	LocalStrategy  = require("passport-local").Strategy,
	session        = require('express-session');

/*--------ROUTES--------*/
var registerRoutes = require('./routes/register')
var loginRoutes    = require('./routes/login')
var logoutRoutes   = require('./routes/logout')
var votingRoute    = require('./routes/votingPoll')
var path           = require('path')

/*---------MODELS-------*/
var User           = require('./models/SignUpSchema');
var loginUser      = require ('./models/LoginSchema');
var Vote           = require('./models/votingPollSchema');

var app            = express();

/*---------MONGOOSE---------*/
mongoose.Promise   = global.Promise;
mongoose.connect('mongodb://iDatLe:souperprivate1@ds049854.mlab.com:49854/votingapp', {useMongoClient: true});

/*---------BODY PARSER---------*/
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/*----------PASSPORT CONFIG----------*/
app.use(session({
	secret: "Smalls is still the cutest bunny",
	saveUninitialized: true,
	resave: true,
	signed: true,
	cookie: { 
		secure: false, 
		maxAge: 60000,
		httpOnly: false
	}
}));
app.use(passport.initialize());
app.use(passport.session());

//PASSPORT LOCAL MONGOOSE .REGISTER METHOD-----------
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
//---------------------------------------------------

/*---------ROUTES--------*/
app.use('/api/register', registerRoutes);
app.use('/api/login', loginRoutes);
app.use('/api/logout', logoutRoutes);
app.use('/api/vote', votingRoute);

/*---------CONNECTS SERVER AND CLIENT---------*/
app.use(express.static(path.join(__dirname, '../client/build')));

app.get('*', function (req, res) {
	console.log(path.join(__dirname, '../client/build', 'index.html'));
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});


/*-----------------------*/
app.listen(8080, function() {
	console.log('You have connected to the server')
})