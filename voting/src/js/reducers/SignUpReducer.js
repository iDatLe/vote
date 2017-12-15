const initialState = {
	text:"A",
	email:"",
	password:"B"
}

function SignUpReducer(state=initialState, action) {
	switch (action.type) {
		case "SIGNUP_INPUT":
			return  {
				...state,
				SignUpForm: action.signUpData
		}
		default: 
			return state;
	}
}

export default SignUpReducer;

