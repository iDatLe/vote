import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DashboardAction } from '../actions/Actions.js';
import { DashboardPost } from '../actions/Actions.js';
import '../../css/Dashboard.css';

class Dashboard extends Component {

		handleSubmit = (event) => {
			event.preventDefault()
			const data = this.props.inputData
			const options = this.props.inputData.options
			const splitOptions = options.split(/\n/g)

			const optionsArr = []
			splitOptions.map((option, i) => {
				const optionsObj = {}
				optionsObj.options = option
				optionsObj.poll = 0
				optionsArr.push(optionsObj)
			})	
			const dataArray = {...data, options: optionsArr}
			this.props.submit(dataArray)
		}

		onChange = (event) => {
			this.props.input(event.target.name, event.target.value)
		}

	render() {

		return(
			<div className="container">
				<div className="jumbotronSignUp">
					<h1>DirectPoll</h1>
					<h2>What would you like to do today?</h2>
				</div>
					<h1 id="NewPoll">New Poll</h1>
				<div >
					<form onSubmit={this.handleSubmit}>
						<p>Name your poll</p>
							<input type="text" 
								name="title" 
								value={this.props.inputData.title} 
								placeholder="Please enter a title" 
								onChange={this.onChange} />

						<p>Options (Separate by new line)</p>
							<div>
								<textarea 
								name="options" 
								value={this.props.inputData.options}
								placeholder="What are your options?"
								onChange={this.onChange} />
							</div>
						
							<input type="submit" name="submit" />
						</form>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		inputData: state.DashboardReducer
	}
}

const mapDispatchToProps = dispatch => {
	return {
		input: (name, value) => {
			dispatch(DashboardAction(name, value))
		},
		submit: (dataArray) => {
			dispatch(DashboardPost(dataArray))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);