import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LoginAction } from '../actions/Actions.js';
import { LoginSubmit } from '../actions/Actions.js';
import { withRouter } from 'react-router';
import Fail from '../modals/fail';
import '../../css/Login.css';

class Login extends Component {

	handleSubmit = (event) => {
		event.preventDefault();
		const data = this.props.inputData //THIS COMES FROM THE STORE FROM ONCHANGE
		this.props.submit(data)
		}

	onChange = (event) => {
		this.props.input(event.target.name, event.target.value)
	}

	render() {

		return (
			<div className="container">
				{this.props.inputData.loginFail ? <Fail /> : null}
				<div className="jumbotronLogin">
					<h1>DirectPoll</h1>
					<h2>Welcome Back!</h2>
				</div>
				<form onSubmit={this.handleSubmit}>
					<div className="forms">
						<p className="signUpForm">Username</p> 
							<input 
								type="username" 
								name="username" 
								placeholder="Enter your username"
								value={this.props.username}
								onChange={this.onChange} />

						<p className="signUpForm">Password</p> 
							<input 
								type="password" 
								name="password" 
								placeholder="Enter your password"
								value={this.props.password}
								onChange={this.onChange} />
						<p><input type="submit" name="login" value="Login" /></p>
					</div>
				</form>

			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		inputData: state.LoginReducer
	}
}

const mapDispatchToProps = dispatch => {
	return {
		input: (name, value) => {
			dispatch(LoginAction(name, value))
		},
		submit: (data) => {
			dispatch(LoginSubmit(data))
		}
	}
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));