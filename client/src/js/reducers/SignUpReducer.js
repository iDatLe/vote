const initialState = {
	username:'',
	email:'',
	password:'',
	registerFail: false
}

function SignUpReducer(state=initialState, action) {
	switch (action.type) {
		case "SIGNUP_INPUT":
			return  {
				...state,
				[action.name]: action.value
			}
		case "REGISTER_FAIL":
			return {
				...state,
				registerFail: true
			}
		case "REGISTER_FAIL_TIMEOUT":
			return {
				...state,
				registerFail: false
			}
		default: 
			return state;
	}
}

export default SignUpReducer;