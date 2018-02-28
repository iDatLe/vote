const initialState = {
	username: '',
	password: '',
	showLogin: true,
	loginFail: false,
}

function LoginReducer(state=initialState, action) {
	switch (action.type) {
		case "LOGIN_INPUT":
			return {
				...state,
				[action.name]: action.value
			}
		case "SHOW_LOGIN_FALSE":
			return {
				...state, showLogin: false
			}
		case "LOGIN_FAIL":
			return {
				...state, 
				loginFail: true
			}
		case "LOGIN_FAIL_TIMEOUT":
			return {
				...state, 
				loginFail: false
			}					
		case "LOGOUT":
			return {
				...state, showLogin: true
			}
		default: 
			return state
	}
}

export default LoginReducer;