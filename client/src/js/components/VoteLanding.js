import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { GetPollLanding, RetrieveOptions } from '../actions/Actions.js';
import { BrowserRouter as Route, Link } from 'react-router-dom';
import VoteTest  from './VoteTest';
import '../../css/Vote.css';

class VoteLanding extends Component {

	componentDidMount() {
		// eslint-disable-next-line
		this.props.mount;
	}

	// handleClick = (x, y) => {
	// 	this.props.getOptions(x, null)
	// 	this.props.getOptions(x, y)

	// }

	render() {
		const titleArray = this.props.landingData.data
		const Result = titleArray.map((titles, i) => {
			return ( 
			<ul key={i}>
				<Link to={`/votetest/${titles.id}`} 
					key={i} 
					onClick={() => this.props.getOptions(titles.id, titles.title) } >
					 {titles.title}
					 </Link>
				<Route exact path="/votetest/titles.id" component={VoteTest} />
			</ul>
			)
		});

		return(
			<Fragment>
				<h1 className="jumbotronVoteLanding">
					Pick a Poll
				</h1>
				<h2>
					{Result}
				</h2>
			</Fragment>
		)
	}
}

const mapStateToProps = state => {
	return {
		landingData: state.VotingLandingReducer
	}
}

const mapDispatchToProps = dispatch => {
	return {
		mount: dispatch(GetPollLanding()),

		getOptions: (data, data2) => {
			dispatch(RetrieveOptions(data, data2))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(VoteLanding);