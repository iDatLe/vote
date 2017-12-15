import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import Home from './Home';
import Dashboard from './Dashboard.js'
import '../../css/LandingPage.css';

class Landing extends Component {

	render() {
		return (
			<Router>
				<div class="container">
					<div class="navbar">
						<Link to="/" class="leftSide">DirectPoll </Link>
						<Link to="/" class="leftSide">Home </Link>
						<Link to="/register/" class="rightSide register">Sign Up </Link>
						<Link to="/login/" class="rightSide">Login </Link>
					</div>

					<Route exact path="/" component={Home} />
					<Route path="/login" component={Login} />
					<Route path="/register" component={SignUp} />
					<Route path="/dashboard" component={Dashboard} />
				</div>
			</Router>
		)
	}
}

export default Landing;
