import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { LogOut } from '../actions/Actions.js';
import     			Home  from './Home';
import   		  Login  from './Login';
import 			SignUp  from './SignUp';
import      VoteTest  from './VoteTest';
import  Dashboard from './Dashboard.js';
import VoteLanding from './VoteLanding';
import '../../css/LandingPage.css';


class Landing extends Component {

	handleClick = () => {
		this.props.history.push('/login')
		this.props.logOut()
	}

	render() {
		const arrayList = [
			{link: '/', name: 'Home', className:'leftside'},
			{link: '/register/', name: 'Sign Up', className:'rightSide register'},
			{link: '/login/', name: 'Login', className: 'rightSide'},
			{link: '/dashboard/', name: 'Dashboard', className: 'rightSide'},
		]

		if(this.props.showLogin.showLogin) {		
			return (
					<Router>
						<div className="container">
							<div className="navbar">
								<Link to="/" className="leftSide">Home </Link>
								<Link to="/register/" className="rightSide register">Sign Up </Link>
								<Link to="/login/" className="rightSide">Login </Link>
								<Link to="/dashboard/" className="rightSide">Dashboard </Link>
								<Link to="/vote/" className="rightSide">Vote </Link>
							</div>
							<Route exact path="/" component={Home} />
							<Route exact path="/login" component={Login} />
							<Route exact path="/register" component={SignUp} />
							<Route path="/vote" component={VoteLanding} />
							<Route path="/votetest" component={VoteTest} />
							<Route path="/dashboard"  render={() => (
								this.props.showLogin.showLogin ? (<Redirect to='/login' />) : (<Dashboard />) 
								)} />
						</div>
					</Router>
				)
			} else {
				return (
					<Router>
						<div className="container">
							<div className="navbar">
								<Link to="/" className="leftSide">Home </Link>
								<Link to="/dashboard" className="rightSide">Dashboard </Link>
								<Link to="/vote/" className="rightSide">Vote </Link>
								<a className="rightSide" onClick={this.handleClick}>Logout </a>
							</div>

							<Route exact path="/" component={Home} />
							<Route path="/login"  render={() => (
								!this.props.showLogin.showLogin ? (<Redirect to='/dashboard' />) : (<Login />) 
								)} />

							<Route path="/register"  render={() => (
								!this.props.showLogin.showLogin ? (<Redirect to='/dashboard' />) : (<SignUp />) 
								)} />

							<Route path="/vote" component={VoteLanding} />
							<Route path="/votetest" component={VoteTest} />
							<Route path="/dashboard" component={Dashboard} />
						</div>
					</Router>
				)
			}
	}
}

function mapStateToProps(state) {
	return {
		showLogin: state.LoginReducer
	}
}

function mapDispatchToProps(dispatch) {
	return {
		logOut: () => {
			dispatch(LogOut())
		}
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Landing));
