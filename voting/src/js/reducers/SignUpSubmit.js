function SignUpSubmit(state={}, action) {
	switch (action.type) {
		case "SUBMIT_REGISTRATION":
			return {
				...state,
				SignUpSubmissions: action.data,
				id: action.id
			}
	}
}

export default SignUpSubmit;