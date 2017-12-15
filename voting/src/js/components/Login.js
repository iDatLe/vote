import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LoginAction } from '../actions/Actions.js'
import '../../css/Login.css';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: "",
			password: ""
		}
		this.onChange = this.onChange.bind(this);
	}

	onChange(event) {
		this.setState({[event.target.name] : event.target.value});
	}

	render() {
		return (
			<div class="container">
				<div class="jumbotronLogin">
					<h1>DirectPoll</h1>
					<h2>Welcome Back!</h2>
				</div>

				<div class="forms">
					<p class="signUpForm">Username</p> 
						<input 
							type="text" 
							name="text" 
							placeholder="Enter your username"
							value={this.props.LoginForm.text}
							onChange={this.props.input} />

					<p class="signUpForm">Password</p> 
						<input 
							type="password" 
							name="password" 
							placeholder="Enter your password"
							value={this.props.LoginForm.password}
							onChange={this.props.input} />
					<p><input type="submit" name="login" value="Login" /></p>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		LoginForm: state.LoginReducer
	}
}

const mapDispatchToProps = dispatch => {
	return {
		input: (loginData) =>
		dispatch(LoginAction(loginData))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);