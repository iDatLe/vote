import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SignUp from './SignUp';
import '../../css/LandingPage.css';


class Home extends Component {
	render() {
		return(
			<div class="jumbotron">
				<h1>DirectPoll</h1>
				<h4>Create custom polls with live results.</h4>
				<Link to="/register/" href="#signup">
					<button class="button register">Sign Up</button>
				</Link>

				<Route path="/register" component={SignUp} />
			</div>
		)
	}
}

export default Home;