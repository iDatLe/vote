let nextID = 0;

export function SignUpAction(signUpData) {
	return {
		type: "SIGNUP_INPUT",
		signUpData,
	}
}

export function SignUpSubmit(signUpData) {
	return {
		type: "SUBMIT_REGISTRATION",
		id: nextID++,
		signUpData,
	}
}

export function LoginAction(loginData) {
	return {
		type: "LOGIN_INPUT",
		loginData
	}
}