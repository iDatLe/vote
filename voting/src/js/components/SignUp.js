import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SignUpAction } from '../actions/Actions.js';
import { SignUpSubmit } from '../actions/Actions.js';
import '../../css/SignUp.css';


class SignUp extends Component {

	onChange = (event) => {
		this.props.input(event.target.name, event.target.value)
	}

	render() {
		console.log(this.props.SignUpAction)

		return (
			<div class="container">
				<div class="jumbotronSignUp">
					<h1>DirectPoll</h1>
					<h2>Create an account before creating your own custom polls!</h2>
				</div>

				<form onSubmit={this.props.submitInput}>
					<div class="forms">
						<p>Username</p>
							<input 
								name="text" 
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
		submitData: state.SignUpSubmit
	}
}

function mapDispatchToProps(dispatch) {
	return {
		input: (name, value) => {
			dispatch(SignUpAction(name, value))
		},
		submitInput: (signUpData) => {
			dispatch(SignUpSubmit(signUpData))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);