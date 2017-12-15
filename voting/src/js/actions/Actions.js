let nextID = 0;

export function SignUpAction(name, value) {
	return {
		type: "SIGNUP_INPUT",
		name,
		value,
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