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
		const linkLogin = [
			{
				link: '/',           
				name: 'Home',      
				className: 'leftSide', 
			},
			{
				link: '/dashboard/', 
				name: 'Dashboard', 
				className: 'leftSide', 
			},
			{
				link: '/vote/',      
				name: 'Vote',      
				className: 'rightSide', 
			},
			{
				link: '/login/',     
				name: 'Login',     
				className: 'rightSide', 
			},
			{
				link: '/register/',  
				name: 'Sign Up',   
				className: 'rightSide register', 
			}
		]

		const linkMap = linkLogin.map(({link, name, className}, i) => {
			return (
				<Link key={i} to={link} className={className}>{name} </Link>
			)})

		const linkMapTwo = linkLogin.slice(0, 3).map(({link, name, className}, i) => {
			return (
				<Link key={i} to={link} className={className}>{name} </Link>
			)})

		if(this.props.showLogin.showLogin) { //Logged out	
			return (
					<Router>
						<div className="container">
							<div className="navbar">
								{linkMap}
							</div>
							<Route exact path="/" component={Home} />
							<Route path="/login" component={Login} />
							<Route path="/register" component={SignUp} />
							<Route path="/vote" component={VoteLanding} />
							<Route path="/votetest" component={VoteTest} />
							<Route path="/dashboard"  render={() => (
								this.props.showLogin.showLogin ? (<Redirect to='/login' />) : (<Dashboard />) 
								)} />
						</div>
				    </Router>
				)
			} else { //Logged in
				return (
					<Router>
						<div className="container">
							<div className="navbar">
								{linkMapTwo}
								<a className="rightSide" onClick={this.handleClick}>Logout </a>
							</div>

							<Route exact path="/" component={Home} />
							<Route path="/vote" component={VoteLanding} />
							<Route path="/votetest" component={VoteTest} />
							<Route path="/dashboard" component={Dashboard} />
							<Route path="/login"  render={() => (
								!this.props.showLogin.showLogin ? (<Redirect to='/dashboard' />) : (<Login />) 
								)} />
							<Route path="/register"  render={() => (
								!this.props.showLogin.showLogin ? (<Redirect to='/dashboard' />) : (<SignUp />) 
								)} />
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
