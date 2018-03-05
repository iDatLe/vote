export function SignUpAction(name, value) {
	return {
		type: "SIGNUP_INPUT",
		name,
		value
	}
}

export function LoginAction(name, value) {
	return {
		type: "LOGIN_INPUT",
		name,
		value
	}
}

export function DashboardAction(name, value) {
	return {
		type: "DASHBOARD_INPUT",
		name,
		value
	}
}

export function SelectOption(data) {
	return {
		type: "SELECT_OPTION",
		data
	}
}

export function SignUpSubmit(data) {
	return (dispatch) => {
		return fetch('/api/register', {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(data)
		})
		.then((res) => {
			if(res.status === 200) {
				dispatch({type: 'SHOW_LOGIN_FALSE'})
			} else {
				dispatch({type: 'REGISTER_FAIL'})
				setTimeout(() => {
					dispatch({type:'REGISTER_FAIL_TIMEOUT'})
				}, 3000) //implement flash messages
			}
		})
	}
}

export function LoginSubmit(data) {
	return (dispatch) => {
		return fetch('/api/login', {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(data)
		})
		.then((res) => {
			if(res.status === 200) {
				dispatch({type: 'SHOW_LOGIN_FALSE'})
			} else {
				dispatch({type: 'LOGIN_FAIL'})
				setTimeout(() => {
					dispatch({type: 'LOGIN_FAIL_TIMEOUT'})
				}, 3000)
			}
		})
	}
}

export function DashboardPost(optionsArray) {
	return (dispatch) => {
		return fetch('/api/vote', {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(optionsArray)
		})
		.then((res) => {
			if(res.status === 200) {
				console.log("Successfully posted")
			} else {
				console.log("Error bruh")
			}
		})
	}
}

export function LogOut(data) {
	return (dispatch) => {
		return fetch('/api/logout', {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(data)
		})
		.then((res) => {
			if(res.status === 200) {
				return dispatch({type: 'LOGOUT'})
			} else {
				console.log("THERE WAS AN ERROR")
			}
		})
	}
}

export function GetPoll(responseData) {
	return {type: "GET_POLL", data: responseData.data}
}

export function GetPollLanding() {
	return (dispatch) => {
		return fetch('/api/vote', {
			method: 'GET',
			headers: {'Content-Type':'application/json'},
		})
		.then(res => res.json())
		.then(responseData => {
			if(responseData.status !== 400) {
				dispatch(RetrievePoll(responseData))
			}
		})
	}
}

export function RetrievePoll (responseData) {
	return {type: "RETRIEVE_VOTE", data: responseData}
}

export function RetrieveOptions(data, data2) {
	return (dispatch) => {
		dispatch({type: 'RESET_LABEL_FALSE'})
		return fetch('/api/vote/' + data, {
			method: 'GET',
			headers: {'Content-Type':'application/json'},
		})
		.then(res => res.json())	
		.then(responseData => {
			if(responseData.status !== 400) {
				dispatch(OptionsRetrieved(responseData, data2))
			}
		})
	}
}

export function OptionsRetrieved (responseData, data2) {
	return {type: "RETRIEVE_POLL", data: responseData, data2}
}

export function PlaceVote(data, data2) {
	return (dispatch) => {
		return fetch('/api/vote/' + data, {
			method: 'PUT',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(data2)
		})
		.then((res) => {
			if(res.status !== 400) {
				dispatch({type: 'EDITED_POLL'})
				setTimeout(() => {
					dispatch({type: 'EDITED_POLL_FALSE'})
				}, 1000)				
			} 
		})
	}
}
