import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SignUpAction } from '../actions/Actions.js';
import { SignUpSubmit } from '../actions/Actions.js';
import '../../css/SignUp.css';


class SignUp extends Component {
	// test = (data) => { //arrow function will bind the event handler
	// 	this.props.input(data.target.value)
	// }

	changeHandler = (signUpData) => {
		this.props.input(signUpData)
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
								// value={this.props.inputData.text} 
								onChange={() => this.changeHandler()}
								/>

						<p>Email</p>
							<input 
								name="email" 
								placeholder="Enter an Email" 
								// value={this.props.inputData.email}
								onChange={() => this.changeHandler()}
								/>

						<p>Password</p>
							<input 
								name="password"
								type="password" 
								placeholder="Enter a Password" 
								onChange={() => this.changeHandler()}  
								/>

						<p><input type="submit" name="submit" /*onClick={this.props.SignUpSubmit}*/ /></p>
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
		input: (signUpData) => {
			dispatch(SignUpAction(signUpData))
		},
		submitInput: (data) => {
			dispatch(SignUpSubmit(data))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);