const initialState = {
	text: "",
	password: ""
}

function LoginReducer(state=initialState, action) {
	switch (action.type) {
		case "LOGIN_INPUT":
			return {
				...state,
				LoginForm: action.loginFormData,
		}
		default: 
			return state
	}
}

export default LoginReducer;