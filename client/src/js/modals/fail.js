import React, { Component } from 'react';
import '../../css/FailModal.css'

class Fail extends Component {
	render () {
		return (
			<div className="modal">
				<p>
					Something went wrong, buddy!
				</p>
			</div>
		)
	}
}

export default Fail;