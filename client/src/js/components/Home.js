import React, { Component } from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SignUp from './SignUp';
import '../../css/LandingPage.css';


class Home extends Component {
	render() {
		if(this.props.showLogin.showLogin) {		
			return (
					<div class="jumbotron">
						<h1>DirectPoll</h1>
						<h4>Create custom polls with live results.</h4>
						<Link to="/register/" href="#signup">
							<button class="button register">Sign Up</button>
						</Link>

						<Route path="/register" component={SignUp} />
					</div>
				)
			} else {
				return(
					<div class="jumbotron">
						<h1>DirectPoll</h1>
						<h4>Create custom polls with live results.</h4>
						<h1>Welcome Back!</h1>
					</div>
				)
			}
	}
}

function mapStateToProps(state) {
	return {
		showLogin: state.LoginReducer
	}
}

export default connect(mapStateToProps, null)(Home);