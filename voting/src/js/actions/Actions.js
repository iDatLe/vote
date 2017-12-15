let nextID = 0;

export function SignUpAction(signUpData) {
	return {
		type: "SIGNUP_INPUT",
		signUpData,
	}
}

export function LoginAction(loginData) {
	return {
		type: "LOGIN_INPUT",
		loginData
	}
}

export function SignUpSubmit(data) {
	return {
		type: "SUBMIT_REGISTRATION",
		id: nextID++,
		data,
	}
}