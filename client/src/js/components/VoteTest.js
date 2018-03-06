import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { PlaceVote, SelectOption } from '../actions/Actions.js';
import { Bar } from 'react-chartjs-2';
import '../../css/Vote.css';

class VoteTest extends Component {

	handleSubmit = (event) => {
		event.preventDefault();
		var location = this.props.location.pathname //Handles individual page's id
		var id       = location.split('/votetest/')	
		const optionsArray = this.props.data.label
		const selection    = this.props.data.selectOption //Handles polling
		const poll         = optionsArray.find(i => i.options === selection).poll
		optionsArray.find(i => i.options === selection).poll = poll + 1
		console.log(optionsArray)
		this.props.submit(id[1], optionsArray)
	}

	handleChange = (event) => {
		this.props.option(event.target.value)
	}

	render () {
		const optionsArray = this.props.data.label
		const arrLabel = []
		const arrPoll = []


		const Result = optionsArray.map((options, i) => {
			arrLabel.push(options.options)
			arrPoll.push(options.poll)
			return ( 
				<option key={i} value={options.options}> {options.options} </option>
			)
		})
			if(this.props.data.boolean) {
				return (		
					<Fragment>
						<h1 className="jumbotronVoteLanding">
							Place your vote!
						</h1>

						<div className="barGraph">
							<Bar data={{
								labels: arrLabel,
								datasets: [{
										label: this.props.data.title,
										data: arrPoll,
									}]
								}}
								options= {{
									title: {
										display: true,
										fontSize: 25
									},
									maintainAspectRatio: false,
								scales: {
									yAxes: [{
										ticks: {
											beginsAtZero: true,
											min: 0,
											max: 50,
											stepSize: 10
										}
									}]
								}									
								}
							}
								width={300}
								height={300}
							/>
						</div>
						<form onSubmit={this.handleSubmit}>
							<select onChange={this.handleChange}>
								<option>Please select an answer </option>
								{Result}
							</select>
								<input type='submit' name='submit'/>
						</form>
					</Fragment>
				)
			} else {
				return (		
					<Fragment>
						<h1 className="jumbotronVoteLanding">
							Place your vote!
						</h1>
					</Fragment>
				)
		}
	}
}

const mapStateToProps = state => {
	return {
		data: state.VoteTestReducers,
		logout: state.LoginReducer
	}
}

const mapDispatchToProps = dispatch => {
	return {
		submit: (data, data2) => {
			dispatch(PlaceVote(data, data2))
		},
		option: (data, poll) => {
			dispatch(SelectOption(data))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(VoteTest);