import React, { Component } from 'react';
import '../../css/Dashboard.css';

class Dashboard extends Component {
	render() {
		return(
			<div class="container">
				<div class="jumbotronSignUp">
					<h1>DirectPoll</h1>
					<h2>What would you like to do today?</h2>
				</div>
				<div>
					<h1 id="NewPoll">New Poll</h1>
				</div>
				<div >
					<p>Name your poll</p>
						<input type="text" name="text" value="some logic here" />
					<p>Options</p>
						<input type="text" name="text" value="some logic" />
					<p><button>More Options</button></p>
						<input type="submit" name="submit" />
				</div>
			</div>
		)
	}
}

export default Dashboard;