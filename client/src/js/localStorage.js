export const loadState = () => {
	try {
		const serializedState = localStorage.getItem('state');
		if (serializedState === null) {
			return undefined;
		}
		return JSON.parse(serializedState);
	}
	catch(err) {
		return undefined;
	}
}

export const saveState = () => {
	try {
		const serializedState = JSON.stringify()
		localStorage.setItem('state', serializedState);
	}
	catch(err) {
		//Ignore write errors
	}
}