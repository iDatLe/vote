const initialState = {

}

function SignUpReducer(state=initialState, action) {
	switch (action.type) {
		case "SIGNUP_INPUT":
			return  {
				...state,
				[action.name]: action.value
			}
		default: 
			return state;
	}
}

export default SignUpReducer;

