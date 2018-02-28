import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SignUpAction } from '../actions/Actions.js';
import { SignUpSubmit } from '../actions/Actions.js';
import { withRouter } from 'react-router';
import Fail from '../modals/fail';
import '../../css/SignUp.css';


class SignUp extends Component {

	handleSubmit = (event) => {
		event.preventDefault();
		const data = this.props.inputData //THIS IS FROM THE STORE FROM ONCHANGE
		this.props.submit(data);
	}

	onChange = (event) => {
		this.props.input(event.target.name, event.target.value)
	}

	render() {
		return (
			<div className="container">
			{this.props.inputData.registerFail ? <Fail /> : null}
				<div className="jumbotronSignUp">
					<h1>DirectPoll</h1>
					<h2>Create an account before creating your own custom polls!</h2>
				</div>

				<form onSubmit={this.handleSubmit}>
					<div className="forms">
						<p>Username</p>
							<input 
								name="username" 
								placeholder="Enter a Username" 
								value={this.props.inputData.text} 
								onChange={this.onChange}
								/>

						<p>Email</p>
							<input 
								name="email" 
								placeholder="Enter an Email" 
								value={this.props.inputData.email} 
								onChange={this.onChange}
								/>

						<p>Password</p>
							<input 
								name="password"
								type="password" 
								placeholder="Enter a Password" 
								value={this.props.inputData.password}
								onChange={this.onChange}  
								/>

						<p><input type="submit" name="submit" /></p>
					</div>
				</form>

			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		inputData: state.SignUpReducer,
		showLogin: state.LoginReducer
	}
}

function mapDispatchToProps(dispatch) {
	return {
		input: (name, value) => {
			dispatch(SignUpAction(name, value))
		},
		submit: (data) => {
			dispatch(SignUpSubmit(data))
		}
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp));